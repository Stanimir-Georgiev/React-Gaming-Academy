import React from 'react';
import './Footer.scss';
import logo from '../logo.png'
import league from '../images/league.png';
import tft from '../images/tft.png'
import fortnite from '../images/fortnite.png'
import cs from '../images/cs.png'
import hs from '../images/hs.png'



const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-wrapper">
                <section className="logo">
                    <a href="/"><img src={logo} /></a>
                    <h5>All rights reserved &copy;</h5>
                </section>
                <div className="addition">
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Customer Support</a>
                </div>
                <section className="footer-games">
                    <h5>Games</h5>
                    <nav className="game-nav">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={league} alt="league" />
                                    <h6>League Of Legends</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={tft} alt="tft" />
                                    <h6>Teamfight Tactitcs</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={fortnite} alt="fortnite" />
                                    <h6>Fortnite</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={cs} alt="cs" />
                                    <h6>Counter Strike: GO</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={hs} alt="hs" />
                                    <h6>Hearthstone</h6>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
        </footer>
    )
}
export default Footer