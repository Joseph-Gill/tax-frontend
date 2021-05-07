import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import LoginFooter from '../../components/LoginFooter'
import PasswordLink from '../../components/PasswordLink'
import LoginLogo from '../../components/LoginLogo'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {resetPassword} from '../../store/user/actions/authentication/resetPasswordAction'
import {LOGIN} from '../../routes/paths'
import {GlassInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import {ResetPasswordForm} from '../../style/forms'
import {ErrorMessageContainer, InputErrorContainer, RegistrationLoginContainer} from '../../style/containers'
import {PasswordResetButton, PasswordResetTitle} from './styles'


const PasswordReset = ({history}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    const [showSuccess, setShowSuccess] = useState(false)

    return (
        <RegistrationLoginContainer>
            <div className='color' />
            <div className='color' />
            <div className='color' />
            <Formik
                // Sets initial values for Formik inputs
                initialValues={{email: ''}}
                // Function called each time submit button is clicked
                onSubmit={async (values) => {
                    dispatch(resetErrors())
                    const response = await dispatch(resetPassword(values.email))
                    if (response) {
                        setShowSuccess(!showSuccess)
                    }
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = true;
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors
                }}
                // Validation only checked when user clicks submit
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({values, errors, touched, handleChange,
                      handleBlur, handleSubmit, isSubmitting}) => (
                          <ResetPasswordForm onSubmit={handleSubmit}>
                              <PasswordResetTitle>Forgot Your Password?</PasswordResetTitle>
                              <InputErrorContainer>
                                  <GlassInput
                                      error={errors.email}
                                      name='email'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder='Enter your email'
                                      type='email'
                                      value={values.email}
                                  />
                                  <ErrorMessageContainer>
                                      {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                                      {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                                      {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
                                  </ErrorMessageContainer>
                              </InputErrorContainer>
                              <PasswordResetButton disabled={isSubmitting} type="submit">
                                  Send Code
                              </PasswordResetButton>
                              <PasswordLink />
                          </ResetPasswordForm>
                )}
            </Formik>
            <LoginLogo history={history} />
            <SignUpLink />
            <LoginFooter />
            {showSuccess &&
                <SuccessMessage
                    message="A code has been sent to your email!"
                    redirect={LOGIN}
                />}
        </RegistrationLoginContainer>
    )
}


export default PasswordReset
