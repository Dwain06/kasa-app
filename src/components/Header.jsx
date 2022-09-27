import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <img src="./logo.png" alt="logo kasa" />
                </div>
                <div className="navigation">
                    <ul>
                        <NavLink to="/" end className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Accueil</li>
                        </NavLink>
                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>A propos</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;