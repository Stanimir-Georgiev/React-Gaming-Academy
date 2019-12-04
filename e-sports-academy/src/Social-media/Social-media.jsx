import React from 'react';
import './Social-media.scss'


const SocialMedia = () => {
    return (
        <ul className="social-media">
            <li>
                <a href="#">
                    <i className="fa fa-youtube-play"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-facebook"></i>
                </a>
            </li>
        </ul>
    )
}

export default SocialMedia