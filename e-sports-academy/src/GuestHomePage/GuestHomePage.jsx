import React from 'react';
import './GuestHomePage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
const GuestHomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="site-banner">
                <div className="addvert">
                    <h3>Stop being a human!</h3>
                    <h2>Become a Legend</h2>
                    <h3>Master all games with our courses</h3>
                    <h2>Learn from The Best!</h2>
                    <div className="button-wrapper">
                        <Link to="/register" className="button">Get Started!</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>

    )
}
export default GuestHomePage