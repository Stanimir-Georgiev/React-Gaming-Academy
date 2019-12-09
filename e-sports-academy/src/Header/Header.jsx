import React from 'react';
import './Header.scss'
import logo from '../logo.png';
import Navigation from '../Navigation/Navigation';
import SocialMedia from '../Social-media/Social-media';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-wrapper">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <SocialMedia />
                <Navigation />
            </div>
        </header>
    )
}
export default Header