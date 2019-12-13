import React from 'react';
import './Course.scss';
import { Link } from 'react-router-dom';

const Course = ({ imgUrl, name, totalVideos, difficulty, id }) => {
    console.log(imgUrl)
    const path = `/course/details/${id}`
    return (
        <li className="course">
            <Link to={path}>
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
            </Link>
        </li>
    )
}

export default Course