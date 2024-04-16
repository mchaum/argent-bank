import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { logIn } from '../features/auth/authSlice';
import { useNavigate } from 'react-router';

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log(email, password);
        // Pour empêcher l'actualisation //
        e.preventDefault();

        dispatch(logIn({email, password})).then(action => {
            navigate("/")
        });
    }

    return (
        <main className='main bg-dark'>
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            // On store le input du champ //
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                        >Remember me</label
                        >
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Form;