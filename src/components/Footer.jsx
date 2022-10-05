import React from 'react';
import logo_footer from "../assets/img/logo_footer.png"

const Footer = () => {
    return (
        <div className="footer">
            <a href="/"><img src={logo_footer} alt="Logo" /></a>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;