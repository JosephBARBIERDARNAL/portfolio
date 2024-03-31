import { Link } from 'react-router-dom';
import Spacing from './spacing';
import React from 'react';
import './footer.css';

// Assuming your images are named github.png and linkedin.png
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <Link to="https://github.com/JosephBARBIERDARNAL" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/img/github.png`} alt="GitHub" className="social-logo" />
                </Link>
                <Link to="https://www.linkedin.com/in/joseph-barbier-4ab531224/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="LinkedIn" className="social-logo" />
                </Link>
                <Link to="https://twitter.com/joseph_barbier" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/img/twitter.png`} alt="Twitter" className="social-logo" />
                </Link>
                <Spacing count={2} />
                <p>Copyright © 2024, Joseph Barbier</p>
            </div>
        </footer>
    );
}

export default Footer;
