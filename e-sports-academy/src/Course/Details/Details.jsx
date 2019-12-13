import React from 'react';
import './Details.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import courseService from '../../services/course-service';
import { useParams } from 'react-router'


const Details = () => {

    const [course, setCourse] = React.useState(undefined)
    const { id } = useParams();

    React.useEffect(() => {
        courseService.getOne(id).then(res => {
            setCourse(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(course)
    return (
        <React.Fragment>
            <Header />
            {course ?
                <section className="detail">
                    <div className="detail-wrapper">
                        <div className="detail-main">
                            <div className="detail-image">
                                <img src={course.imgUrl} alt="detail-image" />
                            </div>
                            <div className="detail-information">
                                <h6>{course.name}</h6>
                                <p><i className="fa fa-youtube-play"></i>{course.totalVideos} Videos</p>
                                <p><i className="fa fa-question-circle"></i>34 questions</p>
                                <p><i className="fa fa-level-up"></i>{course.difficulty} level</p>
                            </div>
                        </div>
                        <div className="detail-aside">
                            <div className="detail-heading">
                                <h2>{course.name}</h2>
                                <p>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </p>
                            </div>
                            <div className="detail-description">
                                <h6>Estimated Time</h6>
                                <p><i className="fa fa-clock-o"></i>{course.estimatedTime} Minutes</p>
                                <h6>About this course</h6>
                                <p>{course.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            }
            <Footer />
        </React.Fragment>
    )
}


export default Details