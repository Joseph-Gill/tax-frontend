import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import SignUpLink from '../../components/SignUpLink'
import PasswordLink from '../../components/PasswordLink'
import LoginFooter from '../../components/LoginFooter'
import LoginLogo from '../../components/LoginLogo'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {userLoginAction} from '../../store/user/actions/authentication/userLoginAction'
import {HOME} from '../../routes/paths'
import {BaseButton} from '../../style/buttons'
import {Title} from '../../style/titles'
import {ErrorMessage} from '../../style/messages'
import {BasePageContainer, ErrorMessageContainer} from '../../style/containers'
import {LoginForm} from '../../style/forms'
import {BaseInput} from '../../style/inputs'
import {ActiveInputLabel} from '../../style/labels'


const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)

    return (
        <BasePageContainer>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={async (values) => {
                    dispatch(resetErrors())
                    const response = await dispatch(userLoginAction(values))
                    if (response) {
                        history.push(HOME)
                    }
                }}
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
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({values, errors, touched, handleChange,
                handleBlur, handleSubmit, isSubmitting,
                }) => (
                    <LoginForm onSubmit={handleSubmit}>
                        <LoginLogo />
                        <Title>Login</Title>
                        <div>
                            <ActiveInputLabel>Email</ActiveInputLabel>
                            <BaseInput
                                error={errors.email}
                                name="email"
                                onBlur={handleBlur}  // matches the key name in initialValues
                                onChange={handleChange}
                                placeholder='Enter your email'
                                type="email"
                                value={values.email}
                            />
                        </div>
                        <ErrorMessageContainer>
                            {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                        </ErrorMessageContainer>
                        <div>
                            <ActiveInputLabel>Password</ActiveInputLabel>
                            <BaseInput
                                error={errors.password}
                                name="password"
                                onBlur={handleBlur} // matches the key name in initialValues
                                onChange={handleChange}
                                placeholder='Enter your password'
                                type="password"
                                value={values.password}
                            />
                        </div>
                        <ErrorMessageContainer>
                            {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                        </ErrorMessageContainer>
                        <BaseButton disabled={isSubmitting} type="submit">
                            Log In
                        </BaseButton>
                        <ErrorMessageContainer>
                            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                        </ErrorMessageContainer>
                        <PasswordLink />
                        <SignUpLink />
                        <LoginFooter />
                    </LoginForm>
              )}
            </Formik>
        </BasePageContainer>
    )
}

export default Login
