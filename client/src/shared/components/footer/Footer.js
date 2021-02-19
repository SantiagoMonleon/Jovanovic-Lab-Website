import React from 'react';

import Banner from './footerimg.jpg';

import './Footer.css';

const Footer = () => {
    const imgBox = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))," +`url(${Banner})`,
        height: "140px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        padding: 0,
        margin: 0,
        bottom: 0,
        
    }

    return (
        <div style={imgBox}>
            <div className="footer-text">
                <h3>Jovanovic Lab at Oregon State University</h3>
                <h4>105 SW 26th St., Suite 216 </h4>
                <h4>Corvallis, OR 97331</h4>
                <h4>goran.jovanovic@oregonstate.edu</h4>
                <h4>Office Phone: 541-737-3614</h4>
            </div>
        </div>
    );
}

export default Footer;