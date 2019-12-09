import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import  { StoreContext } from "../Store/Store";

const Navigation = () => {
    const { state } = React.useContext(StoreContext);
    const isLogged = !!state.user;
    return (
        <nav className="site-nav">
            <ul>
                <li>
                    {!isLogged && < Link to="/login">Login</Link>}
                </li>
                <li>
                    {!isLogged && < Link to="/register">Register</Link>}
                </li>
                <li>
                {isLogged && < Link to="/logout">Logout</Link>}
                </li>
            </ul>
        </nav >
    )
}
export default Navigation