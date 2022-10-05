import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const E404 = () => {
    return (
        <>
            <Header />
            <div className="error-container">
                <h1>404</h1>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d’accueil</a>
            </div>
            <Footer />
        </>
    );
};

export default E404;