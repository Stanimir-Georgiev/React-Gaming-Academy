import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { StoreContext } from "../Store/Store";

const Navigation = () => {
    const { state } = React.useContext(StoreContext);
    const isLogged = !!state.user;
    return (
        <nav className="site-nav">
            {!isLogged && <ul>
                <li>
                    < Link to="/login">Login</Link>
                </li>
                <li>
                    < Link to="/register">Register</Link>
                </li>
            </ul>}
            {isLogged && <div>
                <ul>
                    <li>
                        < Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        < Link to="/courses">Courses</Link>
                    </li>
                    {state.user.isAdmin &&
                        <li>
                            < Link to="/createCourse">Create Course</Link>
                        </li>
                    }
                    <li>
                        < Link to="/logout">Logout</Link>
                    </li>}
                </ul>
                < Link to="/profile">
                    <img src={state.user.imgUrl} alt="avatar" />
                </Link>
            </div>}
        </nav >
    )
}
export default Navigation