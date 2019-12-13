import React from 'react';
import './Course.scss';

const Course = ({ imgUrl, name, totalVideos, difficulty }) => {
    console.log(imgUrl)
    return (
        <li className="course">
            <div className="image">
                <img src={imgUrl} alt="courseImage" />
            </div>
            <div className="information">
                <h6>{name}</h6>
                <p>{totalVideos} Videos</p>
                <p>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </p>
                <p>Difficulty: {difficulty}</p>
            </div>
        </li>
    )
}

export default Course