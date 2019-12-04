import React from 'react';
import './Header.scss'
import logo from '../logo.png';
import Navigation from '../Navigation/Navigation'
import SocialMedia from '../Social-media/Social-media'

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-wrapper">
                <a href="/"><img src={logo} alt="logo" /></a>
                <SocialMedia />
                <Navigation />
            </div>
        </header>
    )
}
export default Header