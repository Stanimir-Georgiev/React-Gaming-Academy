import React from 'react';
import './Footer.scss';
import logo from '../logo.png'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-wrapper">
                <section className="logo">
                    <a href="/"><img src={logo} /></a>
                    <h5>All rights reserved &copy; Game Academy</h5>
                </section>
                <div className="addition">
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Customer Support</a>
                    </div>
                <section className="footer-games">
                    <h5>Games</h5>
                    <ul>

                    </ul>
                </section>
            </div>
        </footer>
    )
}
export default Footer