import React from 'react';
import './Header.scss'
import logo from '../logo.png';
import Navigation from '../Navigation/Navigation';
import SocialMedia from '../Social-media/Social-media';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Store/Store';


const Header = () => {
    const { state } = React.useContext(StoreContext);
    const isLogged = !!state.user
    return (
        <header className="site-header">
            <div className="header-wrapper">
                <Link to="/"><img src={logo} alt="logo" /></Link>
               {!isLogged && <SocialMedia />}
                <Navigation />
            </div>
        </header>
    )
}
export default Header