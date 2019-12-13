/* eslint-disable no-undef */
import React from 'react';
import './Profile.scss';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { StoreContext } from '../Store/Store';
import * as yup from 'yup';
import { useFormControl, getValidationsRunnerForSchema } from '../Shared/form-setter';
import { update } from '../Store/actions';
import { useHistory } from 'react-router-dom'



const validations = {
    firstName: yup.string('First name should be a string!')
        .required('First name is required!'),
    lastName: yup.string('LastName should be a string!')
        .required('Password is required!'),
    description: yup.string('Description should be a string!')
        .max(50,'The description should not be more than 50 characters')    
}
const schema = yup.object().shape(validations);
const validationsRunner = getValidationsRunnerForSchema(schema)

const Profile = () => {

    const history = useHistory()
    const { state, dispatch } = React.useContext(StoreContext)

    const [ imgUrl, setImgUrl ] = React.useState(state.user.imgUrl)

    const firstNameFormControl = useFormControl(state.user.firstName, validations.firstName);
    const lastNameFormControl = useFormControl(state.user.lastName, validations.lastName);
    const descriptionFormControl = useFormControl(state.user.description, validations.description);

    const handleSubmit = React.useCallback((event) => {
        event.preventDefault()
        validationsRunner({
            firstName: firstNameFormControl.value,
            lastName: lastNameFormControl.value,
            description: descriptionFormControl.value
        }).then(data => {
            data._id = state.user._id;
            data.imgUrl = imgUrl;
            data.ready = true
            dispatch(update(data));
            setTimeout(() => {
                history.push('/')
            }, 500)
        }).catch(errors => {
            if (errors.firstName) { firstNameFormControl.setErrors(errors.firstName); }
            if (errors.lastName) { lastNameFormControl.setErrors(errors.lastName); }
            if (errors.description) { descriptionFormControl.setErrors(errors.description); }
        })
    }, [firstNameFormControl, lastNameFormControl, descriptionFormControl, imgUrl, dispatch]);

    const firstFirstNameError = firstNameFormControl.errors && firstNameFormControl.errors[0];
    const firstLastNameError = lastNameFormControl.errors && lastNameFormControl.errors[0];
    const firstDescriptionError = descriptionFormControl.errors && descriptionFormControl.errors[0];

    const myWidget = cloudinary.createUploadWidget({
        cloudName: 'drs58tv83',
        uploadPreset: 'softuni',
        apiKey: '387499278241678'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            setImgUrl(result.info.url)
        }
    }
    )
    return (
        <React.Fragment>
            <Header />
            <section className="profile">
                <div className="personal-details">
                    <h4>Personal Details</h4>
                    <form action="#">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" className={firstFirstNameError && "error"} placeholder={firstFirstNameError || state.user.firstName} onChange={firstNameFormControl.changeHandler}/>
                           
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" className={firstLastNameError && "error"} placeholder={firstLastNameError || state.user.lastName} onChange={lastNameFormControl.changeHandler}/>
                            
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" cols="25" rows="2" className={firstDescriptionError && "error"} placeholder={firstDescriptionError || state.user.description} onChange={descriptionFormControl.changeHandler}></textarea>
                          
                        </div>
                        <button onClick={handleSubmit}>Save changes</button>
                    </form>
                    <div className="avatar">
                        <img src={imgUrl || state.user.imgUrl} alt="avatar" onClick={() => myWidget.open()} />
                        <h6>Change Avatar ^^</h6>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}
export default Profile