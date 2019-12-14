import React from 'react';
import './CreateCourse.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useFormControl, getValidationsRunnerForSchema } from '../../Shared/form-setter';
import * as yup from 'yup';
import courseService from '../../services/course-service';
import { useHistory } from 'react-router-dom'

const validations = {
    name: yup.string('Course Name should be a string')
        .required('Course name is required!'),
    difficulty: yup.string('Difficulty should be a string!')
        .required('Difficulty is required!'),
    game: yup.string('Game name should be a string!')
        .required('Game name is required!'),
    estimatedTime: yup.string('Estimated time should be a string!')
        .required('Estimated time is required!'),
    imgUrl: yup.string('Image URL should be a string!')
        .required('Image Url is required!'),
    description: yup.string('Description should be a string!')
        .required('Description is required!')
}

const schema = yup.object().shape(validations);
const validationsRunner = getValidationsRunnerForSchema(schema)

const CreateCourse = () => {

    const history = useHistory()

    const nameFormControl = useFormControl('', validations.name);
    const difficultyFormControl = useFormControl('Easy', validations.difficulty);
    const gameFormControl = useFormControl('LeagueOfLegends', validations.game);
    const estimatedTimeFormControl = useFormControl('', validations.estimatedTime);
    const imgUrlFormControl = useFormControl('', validations.imgUrl);
    const descriptionFormControl = useFormControl('', validations.description);

    const [serverError, setServerError] = React.useState(undefined)


    const handleSubmit = React.useCallback((event) => {
        event.preventDefault()
        validationsRunner({
            name: nameFormControl.value,
            difficulty: difficultyFormControl.value,
            game: gameFormControl.value,
            estimatedTime: estimatedTimeFormControl.value,
            imgUrl: imgUrlFormControl.value,
            description: descriptionFormControl.value
        }).then(data => {
            courseService.createCourse(data).then(() => {
                history.push('/courses')
            }).catch((error) => {
                setServerError(serverError)
            })
        }).catch(errors => {
            if (errors.name) { nameFormControl.setErrors(errors.name); }
            if (errors.difficulty) { difficultyFormControl.setErrors(errors.difficulty); }
            if (errors.game) { gameFormControl.setErrors(errors.game); }
            if (errors.estimatedTime) { estimatedTimeFormControl.setErrors(errors.estimatedTime) }
            if (errors.imgUrl) { imgUrlFormControl.setErrors(errors.imgUrl) }
            if (errors.description) { descriptionFormControl.setErrors(errors.description) }
        })
    }, [nameFormControl, difficultyFormControl, gameFormControl, estimatedTimeFormControl, imgUrlFormControl, descriptionFormControl]);

    const firstNameError = nameFormControl.errors && nameFormControl.errors[0];
    const firstDifficultyError = difficultyFormControl.errors && difficultyFormControl.errors[0];
    const firstGameError = gameFormControl.errors && gameFormControl.errors[0];
    const firstEstimatedTimeError = estimatedTimeFormControl.errors && estimatedTimeFormControl.errors[0];
    const firstImgUrlError = imgUrlFormControl.errors && imgUrlFormControl.errors[0]
    const firstDescriptionError = descriptionFormControl.errors && descriptionFormControl.errors[0]
    return (
        <React.Fragment>
            <Header />
            <section className="profile">
                <div className="personal-details">
                    <h4>Create Course</h4>
                    <form action="#">
                        <div>
                            <label htmlFor="courseName">Course Name</label>
                            <input type="text" id="courseName" onChange={nameFormControl.changeHandler} />

                        </div>
                        <div>
                            <label htmlFor="difficulty">Difficulty</label>
                            <select name="difficulty" id="difficulty" onChange={difficultyFormControl.changeHandler}>
                                <option value="Easy">Easy</option>
                                <option value="Average">Average</option>
                                <option value="Good">Good</option>
                                <option value="Pro">Pro</option>
                                <option value="Master">Master</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="game">Game</label>
                            <select name="game" id="game" onChange={gameFormControl.changeHandler}>
                                <option value="LeagueOfLegends">League of Legends</option>
                                <option value="TeamfightTactics">Teamfight Tactics</option>
                                <option value="Fortnite">Fortnite</option>
                                <option value="CounterStrike">Counter Strike</option>
                                <option value="Hearthstone">Hearthstone</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="time">Estimated Time</label>
                            <input id="time" type="text" onChange={estimatedTimeFormControl.changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="imgUrl">Image URL</label>
                            <input id="imgUrl" type="text" onChange={imgUrlFormControl.changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" type="text" rows="3" onChange={descriptionFormControl.changeHandler} />
                        </div>
                        <button onClick={handleSubmit}>Create course</button>
                    </form>
                    {(firstNameError || firstGameError || firstDifficultyError || firstEstimatedTimeError || firstImgUrlError || firstDescriptionError) &&
                        <div className="error-div">
                            <p>Please fill the form</p>
                        </div>
                    }
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default CreateCourse