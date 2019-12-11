import React from 'react';
import './LoggedInHomePage.scss';
import Header from '../Header/Header';
import GameNavigation from '../GameNavigation/GameNavigation';
import Footer from '../Footer/Footer'
import Course from '../Course/Course'

const LoggedInHomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="logged-home">
                <aside>
                    <GameNavigation />
                    <div className="credits">
                        <h2>Total Credits</h2>
                        <p>10 credits</p>
                    </div>
                </aside>
                <main>
                    <div className="dashoard">
                        <h2>My courses</h2>
                        <ul>
                            <Course />
                            <Course />
                            <Course />
                            <Course />
                            <Course />
                            <Course />


                        </ul>
                    </div>
                </main>
            </section>
            <Footer />
        </React.Fragment>

    )
}

export default LoggedInHomePage