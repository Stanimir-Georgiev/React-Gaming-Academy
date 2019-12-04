import React from 'react';
import './Navigation.scss';

const Navigation = () => {
    return (
          <nav className="site-nav">
              <ul>
                  <li>
                      <a href="#">Login</a>
                  </li>
                  <li>
                      <a href="#">Register</a>
                  </li>
                  <li>
                      <a href="#">Logout</a>
                  </li>
              </ul>
          </nav>
    )
}
export default Navigation