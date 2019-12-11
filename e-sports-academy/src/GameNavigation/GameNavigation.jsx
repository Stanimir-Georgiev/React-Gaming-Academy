import React from 'react';
import league from '../images/league.png';
import tft from '../images/tft.png'
import fortnite from '../images/fortnite.png'
import cs from '../images/cs.png'
import hs from '../images/hs.png'
import { Link } from 'react-router-dom';


const GameNavigation = () => {
    return (
        <nav className="game-nav">
        <ul>
            <li>
                <Link to="#">
                    <img src={league} alt="league" />
                  
                </Link>
            </li>
            <li>
                <Link to="#">
                    <img src={tft} alt="tft" />
                   
                </Link>
            </li>
            <li>
                <Link to="#">
                    <img src={fortnite} alt="fortnite" />
    
                </Link>
            </li>
            <li>
                <Link to="#">
                    <img src={cs} alt="cs" />
                    
                </Link>
            </li>
            <li>
                <Link to="#">
                    <img src={hs} alt="hs" />
                </Link>
            </li>
        </ul>
    </nav>
    )
}
export default GameNavigation
