import React from 'react';
import '../Shared/form.scss';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import * as yup from 'yup';
import { useFormControl, getValidationsRunnerForSchema } from '../Shared/form-setter';
import { StoreContext } from '../Store/Store'
import { register } from '../Store/actions';
const validations = {
    username: yup.string('Username should be a string!')
        .required('Username is required!')
        .min(5, 'Username should be at least 5 characters')
        .max(15, 'Username should not be more than 15 characters'),
    password: yup.string('Password should be a string!')
        .required('Password is required!')
        .min(5, 'Password should be at least 5 characters'),
    rePassword: yup.string('Password must be a string!')
        .required('Password is required!')
        .min(5, 'Password should be at least 5 characters')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
}
const dynamicValidations = {
    rePassword: yup.string('Password must be a string!')
        .required('Password is required!')
        .min(5, 'Password should be at least 5 characters')
}
const schema = yup.object().shape(validations);
const validationsRunner = getValidationsRunnerForSchema(schema)

const Register = () => {
    const { state, dispatch } = React.useContext(StoreContext)

    const usernameFormControl = useFormControl('', validations.username);
    const passwordFormControl = useFormControl('', validations.password);
    const rePasswordFormControl = useFormControl('', dynamicValidations.rePassword)

    const handleSubmit = React.useCallback((event) => {
        event.preventDefault()
        validationsRunner({
            username: usernameFormControl.value,
            password: passwordFormControl.value,
            rePassword: rePasswordFormControl.value
        }).then(data => {
           dispatch(register(data))
        }).catch(errors => {
            if (errors.username) { usernameFormControl.setErrors(errors.username); }
            if (errors.password) { passwordFormControl.setErrors(errors.password); }
            if (errors.rePassword) { rePasswordFormControl.setErrors(errors.rePassword); }
        })
    }, [usernameFormControl, passwordFormControl, rePasswordFormControl, dispatch]);

    const firstUsernameError = usernameFormControl.errors && usernameFormControl.errors[0];
    const firstPasswordError = passwordFormControl.errors && passwordFormControl.errors[0];
    const firstRePasswordError = rePasswordFormControl.errors && rePasswordFormControl.errors[0];
    return (
        <div className="form-background">
            <section className="form">
                <div className="form-wrapper">
                    <Link to="/" >
                        <img src={logo} alt="logo" />
                    </Link>
                    <h2>Register an account</h2>
                    <form action="#">
                    {state.error && <div className="server-error">{state.error}</div>}
                        <label htmlFor="username">
                            <p>
                                <i className="fa fa-user"></i>
                                <input type="text" id="username" className={firstUsernameError && "error"} placeholder="Username" onChange={usernameFormControl.changeHandler} />
                            </p>
                            {firstUsernameError && <span>{firstUsernameError}</span>}
                        </label>
                        <label htmlFor="password">
                            <p>
                                <i className="fa fa-lock"></i>
                                <input type="password" id="password" className={firstPasswordError && "error"} placeholder="Password" onChange={passwordFormControl.changeHandler} />
                            </p>
                            {firstPasswordError && <span>{firstPasswordError}</span>}
                        </label>
                        <label htmlFor="repeat">
                            <p>
                                <i className="fa fa-lock"></i>
                                <input type="password" id="repeat" className={firstRePasswordError && "error"} placeholder="Reapeat-Password" onChange={rePasswordFormControl.changeHandler} />
                            </p>
                            {firstRePasswordError && <span>{firstRePasswordError}</span>}
                        </label>
                        <Link to="/login">You have an account? Login here!!!</Link>
                        <input type="submit" value="Register" onClick={handleSubmit} />
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Register