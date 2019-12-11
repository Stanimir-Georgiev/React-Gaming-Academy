import React from 'react';
import './Course.scss';

const Course = () => {

    return (
        <li className="course">
            <div className="image">
                <img src="https://i.pinimg.com/474x/2b/f4/c6/2bf4c601c4467365a802ec844846e907--legends-tips-and-tricks.jpg" alt="adc-image" />
            </div>
            <div className="information">
                <h5>ADC Essentials</h5>
                <p>22 Videos</p>
                <p>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </p>
               
                <p>Difficulty: Easy</p>
            </div>
        </li>
    )
}

export default Course