import React from 'react';
import '../Shared/form.scss';
import { Link } from 'react-router-dom';
import logo from '../logo.png'

const Register = () => {
    return (
        <div className="form-background">
            <section className="form">
                <div className="form-wrapper">
                    <Link to="/" >
                        <img src={logo} alt="logo" />
                    </Link>
                    <h2>Log in</h2>
                    <form action="#">
                        <label htmlFor="username">
                            <p>
                                <i className="fa fa-user"></i>
                                <input type="text" name="username" id="username" placeholder="Username" />
                            </p>
                        </label>
                        <label htmlFor="password">
                            <p>
                                <i className="fa fa-lock"></i>
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </p>
                        </label>
                        <Link to="/register ">You dont have an account? Register here!!!</Link>
                        <input type="submit" value="Login" />
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Register