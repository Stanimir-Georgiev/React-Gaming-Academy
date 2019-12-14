import React from 'react';
import './LoggedInHomePage.scss';
import Header from '../Header/Header';
import GameNavigation from '../GameNavigation/GameNavigation';
import Footer from '../Footer/Footer'
import Course from '../Course/Course';
import { StoreContext } from '../Store/Store';
import courseService from '../services/course-service';


const LoggedInHomePage = () => {
    const { state } = React.useContext(StoreContext);

    const [courses, setCourses] = React.useState(undefined);

    React.useEffect(() => {
        courseService.getEnrolledCourses()
            .then(res => {
                setCourses(res.enrolledCourses)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(courses)

    return (
        <React.Fragment>
            <Header />
            {courses ?
                <section className="logged-home">
                    <aside>
                        <GameNavigation />
                        <div className="credits">
                            <h2>Total Credits</h2>
                            <p>{state.user.credits} credits</p>
                        </div>
                    </aside>
                    <main>
                    <section className="course-section">
                    <div className="inner-course">
                        {courses.length > 0 ? <h2>Enrolled Courses</h2> : <h2>There are no Enrolled Courses courses yet</h2>}
                        <ul className="courses">
                        {courses.map((course) => <Course key={course._id} imgUrl={course.imgUrl} name={course.name} totalVideos={course.totalVideos} difficulty={course.difficulty} id={course._id} />)}
                        </ul>
                    </div>
                </section>
                    </main>
                </section>
                :
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            }
            <Footer />
        </React.Fragment>

    )
}

export default LoggedInHomePage