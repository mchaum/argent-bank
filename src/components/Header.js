import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/argentBankLogo.png';


const Header = () => {
    return (
        <header className='main-nav'>
            <NavLink className="main-nav-logo" to="/">
                <img className='main-nav-logo-image' src={Logo} alt='Logo Argent Bank'></img>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <NavLink className="main-nav-item" to="/Sign-in">
                <FontAwesomeIcon icon={faCircleUser} />
                <p>Sign In</p>
            </NavLink>
        </header>
    );
};

export default Header;