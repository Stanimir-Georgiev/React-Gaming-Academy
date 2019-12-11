import React from 'react';
import './Footer.scss';
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import league from '../images/league.png';
import tft from '../images/tft.png'
import fortnite from '../images/fortnite.png'
import cs from '../images/cs.png'
import hs from '../images/hs.png';
import FooterScript from '../scripts/footer-script';


const Footer = () => {
    React.useEffect(() => {
        FooterScript()
    }, [])
    return (
        <footer className="site-footer">
            <div className="footer-wrapper">
                <section className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <h5>All rights reserved &copy;</h5>
                </section>
                <div className="addition">
                    <Link to="#">Terms and Conditions</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Customer Support</Link>
                </div>
                <section className="footer-games">
                    <h5>Games</h5>
                    <nav className="game-nav">
                        <ul>
                            <li>
                                <Link to="#">
                                    <img src={league} alt="league" />
                                    <h6>League Of Legends</h6>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={tft} alt="tft" />
                                    <h6>Teamfight Tactitcs</h6>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={fortnite} alt="fortnite" />
                                    <h6>Fortnite</h6>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={cs} alt="cs" />
                                    <h6>Counter Strike: GO</h6>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={hs} alt="hs" />
                                    <h6>Hearthstone</h6>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
        </footer>
    )
}
export default Footer