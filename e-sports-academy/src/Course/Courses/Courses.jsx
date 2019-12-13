import React from 'react';
import './Courses.scss';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';
import Course from '../Course';
import courseService from '../../services/course-service';


const Courses = () => {

    const [courses, setCourses] = React.useState(null);

    React.useEffect(() => {
        courseService.getAll().then(res => {
            setCourses(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <React.Fragment>
            <Header />
            { courses ?
                <section className="course-section">
                    <div className="inner-course">
                        {courses > 0 ? <h2>Course Section</h2> : <h2>There are no courses</h2>}
                        <ul className="courses">
                        {courses.map((course) => <Course key={course._id} imgUrl={course.imgUrl} name={course.name} totalVideos={course.totalVideos} difficulty={course.difficulty} id={course._id} />)}
                        </ul>
                    </div>
                </section>
                :
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            }
            <Footer />
        </React.Fragment>
    )
}

export default Courses;