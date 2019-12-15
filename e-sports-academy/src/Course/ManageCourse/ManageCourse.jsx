import React from 'react';
import './ManageCourse.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import courseService from '../../services/course-service'
import { useParams } from 'react-router';
import { useHistory, Link } from 'react-router-dom'


const ManageCourse = () => {
    const [course, setCourse] = React.useState(undefined);
    const { id } = useParams();
    const history = useHistory()
    const deletePath = `/course/delete/${id}`

    const nameRef = React.useRef()
    const gameRef = React.useRef()
    const difficultyRef = React.useRef()
    const estimatedTimeRef = React.useRef()
    const imgUrlRef = React.useRef()
    const descriptionRef = React.useRef()

    React.useEffect(() => {
        courseService.getOne(id).then(res => {
            setCourse(res)
        })
    }, [])

    const [serverError, setServerError] = React.useState(undefined)

    const editCourse = React.useCallback((event) => {
        event.preventDefault()
        const nameValue = nameRef.current.value
        const difficultyValue = difficultyRef.current.value
        const gameValue = gameRef.current.value
        const estimatedTimeValue = estimatedTimeRef.current.value
        const imgUrlValue = imgUrlRef.current.value
        const descriptionValue = descriptionRef.current.value

        const data = {
            name: nameValue,
            difficulty: difficultyValue,
            game: gameValue,
            estimatedTime: estimatedTimeValue,
            imgUrl: imgUrlValue,
            description: descriptionValue
        }
        courseService.editCourse(id, data).then(() => {
            history.push(`/course/details/${id}`)
        }).catch((error) => {
            console.log(error)
        })

    }, [nameRef, difficultyRef, gameRef, estimatedTimeRef, imgUrlRef, descriptionRef])

    return (
        <React.Fragment>
            <Header />
            {course ?
                <section className="manage-section">
                    <section className="manage-wrapper">
                        <div className="edit">
                            <h3>Edin Course</h3>
                            <form action="#">
                                <div>
                                    <label htmlFor="courseName">Course Name</label>
                                    <input type="text" id="courseName" ref={nameRef} defaultValue={course.name} />

                                </div>
                                <div>
                                    <label htmlFor="difficulty">Difficulty</label>
                                    <select id="difficulty" ref={difficultyRef} defaultValue={course.difficulty}>
                                        <option value="Easy">Easy</option>
                                        <option value="Average">Average</option>
                                        <option value="Good">Good</option>
                                        <option value="Pro">Pro</option>
                                        <option value="Master">Master</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="game">Game</label>
                                    <select  id="game" ref={gameRef} defaultValue={course.game}>
                                        <option value="LeagueOfLegends">League of Legends</option>
                                        <option value="TeamfightTactics">Teamfight Tactics</option>
                                        <option value="Fortnite">Fortnite</option>
                                        <option value="CounterStrike">Counter Strike</option>
                                        <option value="Hearthstone">Hearthstone</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="time">Estimated Time</label>
                                    <input id="time" type="text" ref={estimatedTimeRef} defaultValue={course.estimatedTime} />
                                </div>
                                <div>
                                    <label htmlFor="imgUrl">Image URL</label>
                                    <input id="imgUrl" type="text" ref={imgUrlRef} defaultValue={course.imgUrl} />
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" type="text" rows="3" ref={descriptionRef} defaultValue={course.description} />
                                </div>
                                <button onClick={editCourse}>Edit course</button>
                            </form>
                        </div>
                        <div className="add-video">
                            <h3>Add Video</h3>
                            <form action="#">
                                <label htmlFor="addVideo">Add Video</label>
                                <input type="text" id="addVideo" />
                                <button>Add Video</button>
                            </form>
                        </div>
                        <div className="delete">
                                <h3>Delete Course</h3>
                                <Link to={deletePath}>Delete Course</Link>
                        </div>
                    </section>
                </section>
                : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            }
            <Footer />
        </React.Fragment>
    )
}

export default ManageCourse