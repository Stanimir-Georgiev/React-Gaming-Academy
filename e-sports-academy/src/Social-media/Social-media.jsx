import React from 'react';
import './Social-media.scss';
import { Link } from 'react-router-dom'

const SocialMedia = () => {
    return (
        <ul className="social-media">
            <li>
                <Link to="#">
                    <i className="fa fa-youtube-play"></i>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <i className="fa fa-instagram"></i>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <i className="fa fa-twitter"></i>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <i className="fa fa-facebook"></i>
                </Link>
            </li>
        </ul>
    )
}

export default SocialMedia