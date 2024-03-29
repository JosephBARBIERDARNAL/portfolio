

import React from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';

function Header() {
    return (
        <header>
            <div className="header-container">
                <Link to='/'><h1 className='name'>Joseph Barbier</h1></Link>
                <nav>
                    <Link to="/blog"><b>Blog</b></Link>
                    <Link to="/services"><b>Services</b></Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;

