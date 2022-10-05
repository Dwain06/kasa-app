import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo kasa" />
                    </Link>
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