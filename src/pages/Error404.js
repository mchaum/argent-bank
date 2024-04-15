import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error404 = () => {
    return (
        <div>
            <Header />
            <div className='error-container'>
                <h2>404</h2>
                <p> La page que vous demandez n'existe pas. </p>
                <Link to="/" className="error-link">
                Retourner sur la page d’accueil
            </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Error404;