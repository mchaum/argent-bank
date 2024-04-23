import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/argentBankLogo.png';
import { logOut } from '../features/auth/authSlice';
import { fetchUserData } from '../features/auth/userSlice';


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.user);

    console.log({user});

    useEffect(() => {
        if (token) {
          dispatch(fetchUserData());
        }
      }, [dispatch, token]);

    const logout = () => {
        // Suppression des données stockées //
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        user = null;
        dispatch(logOut());
        navigate("/");
    };

    return (
        <header className='main-nav'>
            <NavLink className="main-nav-logo" to="/">
                <img className='main-nav-logo-image' src={Logo} alt='Logo Argent Bank'></img>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {token ? (
                <div className='navbar-connect'>
                <NavLink className="main-nav-item" to="/user-account" >
                <FontAwesomeIcon icon={faCircleUser} />
                {`${user.userName}`}
                </NavLink>
                <NavLink className="main-nav-item" to="/" onClick={logout} >
                <FontAwesomeIcon icon={faCircleUser} />
                <p>Sign Out</p> 
                </NavLink>
                </div>
             ) : (
                <NavLink className="main-nav-item" to="/Sign-in">
                <FontAwesomeIcon icon={faCircleUser} />
                <p>Sign In</p>
            </NavLink>
             )}
        </header>
    );
};

export default Header;