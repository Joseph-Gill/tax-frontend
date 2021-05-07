import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import SignUpLink from '../../components/SignUpLink'
import PasswordLink from '../../components/PasswordLink'
import LoginFooter from '../../components/LoginFooter'
import LoginLogo from '../../components/LoginLogo'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {userLoginAction} from '../../store/user/actions/authentication/userLoginAction'
import {HOME} from '../../routes/paths'
import {ErrorMessage} from '../../style/messages'
import {ErrorMessageContainer, InputErrorContainer, RegistrationLoginContainer} from '../../style/containers'
import {LoginForm} from '../../style/forms'
import {GlassInput} from '../../style/inputs'
import {LoginButton, LoginTitle} from './styles'


const Login = ({history}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)

    return (
        <RegistrationLoginContainer>
            <div className='color' />
            <div className='color' />
            <div className='color' />
            <Formik
                // Sets initial values for Formik inputs
                initialValues={{email: '', password: ''}}
                // Function called each time submit button is clicked
                onSubmit={async (values) => {
                    dispatch(resetErrors())
                    const response = await dispatch(userLoginAction(values))
                    if (response) {
                        history.push(HOME)
                    }
                }}
                // Validation called on input values
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = true;
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = true;
                    }
                    return errors;
                    }}
                // Validation only checked when user clicks submit
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({values, errors, touched, handleChange,
                handleBlur, handleSubmit, isSubmitting,}) => (
                    <LoginForm onSubmit={handleSubmit}>
                        <LoginTitle>Login</LoginTitle>
                        <InputErrorContainer>
                            <GlassInput
                                error={errors.email}
                                name="email"
                                onBlur={handleBlur}  // matches the key name in initialValues
                                onChange={handleChange}
                                placeholder='Enter your email'
                                type="email"
                                value={values.email}
                            />
                            <ErrorMessageContainer>
                                {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                            </ErrorMessageContainer>
                        </InputErrorContainer>
                        <InputErrorContainer>
                            <GlassInput
                                error={errors.password}
                                name="password"
                                onBlur={handleBlur} // matches the key name in initialValues
                                onChange={handleChange}
                                placeholder='Enter your password'
                                type="password"
                                value={values.password}
                            />
                            <ErrorMessageContainer>
                                {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                            </ErrorMessageContainer>
                        </InputErrorContainer>
                        <LoginButton disabled={isSubmitting} type="submit">
                            Log In
                        </LoginButton>
                        <ErrorMessageContainer>
                            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                        </ErrorMessageContainer>
                        <PasswordLink />
                    </LoginForm>
              )}
            </Formik>
            <LoginLogo history={history} />
            <SignUpLink />
            <LoginFooter />
        </RegistrationLoginContainer>
    )
}

export default Login
