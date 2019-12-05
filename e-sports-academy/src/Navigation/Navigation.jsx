import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
          <nav className="site-nav">
              <ul>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
                  <li>
                      <Link to="/register">Register</Link>
                  </li>
                  <li>
                      <Link to="logout">Logout</Link>
                  </li>
              </ul>
          </nav>
    )
}
export default Navigation