import React, {useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {Formik} from 'formik'
import SignUpLink from "../../components/SignUpLink"
import SuccessMessage from "../../components/SuccessMessage"
import PasswordLink from '../../components/PasswordLink'
import LoginFooter from '../../components/LoginFooter'
import LoginLogo from '../../components/LoginLogo'
import {useUrlQueryParams} from "../../hooks"
import {resetErrors} from '../../store/errors/actions/errorAction'
import {restPasswordValidate} from "../../store/user/actions/authentication/resetPasswordAction"
import {LOGIN} from '../../routes/paths'
import {Title} from "../../style/titles"
import {BaseInput} from "../../style/inputs"
import {BaseButton} from "../../style/buttons"
import {ActiveInputLabel} from '../../style/labels'
import {ErrorMessage} from "../../style/messages"
import {PasswordResetValidationForm} from '../../style/forms'
import {BasePageContainer, ErrorMessageContainer} from '../../style/containers'


const PasswordResetValidation = ({history}) => {
    const dispatch = useDispatch()
    const email = useUrlQueryParams("email")
    const code = useUrlQueryParams("code")
    const error = useSelector(state => state.errorReducer.error)
    const [showSuccess, setShowSuccess] = useState(false)

    return (
        <BasePageContainer>
            {showSuccess && (
                <SuccessMessage
                    message="Your Password has been updated successfully!"
                    redirect={LOGIN}
                />
            )}
            <Formik
                // Sets initial values for Formik inputs
                initialValues={{password: '', password_repeat: ''}}
                // Function called each time submit button is clicked
                onSubmit={async (values) => {
                    dispatch(resetErrors())
                    const credentials = {
                        email: email,
                        code: code,
                        password: values.password,
                        password_repeat: values.password_repeat
                    }
                    const response = await dispatch(restPasswordValidate(credentials))
                    if (response) {
                        setShowSuccess(!showSuccess)
                    }
                }}
                validate={values => {
                    const errors = {};
                    if (!values.password) {
                        errors.password = true;
                    } else if (!values.password_repeat) {
                        errors.password_repeat = true;
                    } else if (values.password !== values.password_repeat) {
                        errors.password = 'Password and Password Repeat do not match'
                        errors.password_repeat = true;
                    }
                    return errors
                }}
                // Validation only checked when user clicks submit
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({values, errors, touched, handleChange,
                      handleBlur, handleSubmit, isSubmitting}) => (
                          <PasswordResetValidationForm onSubmit={handleSubmit}>
                              <LoginLogo
                                  history={history}
                              />
                              <Title>Create New Password</Title>
                              <div>
                                  <ActiveInputLabel>Password</ActiveInputLabel>
                                  <BaseInput
                                      error={errors.password}
                                      name='password'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder='Set a new password'
                                      type='password'
                                      value={values.password}
                                  />
                              </div>
                              <ErrorMessageContainer>
                                  {error && <ErrorMessage>{error.password}</ErrorMessage>}
                                  {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                              </ErrorMessageContainer>
                              <div>
                                  <ActiveInputLabel>Password</ActiveInputLabel>
                                  <BaseInput
                                      error={errors.password_repeat}
                                      name='password_repeat'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder='Retype new password'
                                      type='password'
                                      value={values.password_repeat}
                                  />
                              </div>
                              <ErrorMessageContainer>
                                  {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                                  {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                                  {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                                  {errors.password_repeat && touched.password_repeat && <ErrorMessage>{errors.password_repeat}</ErrorMessage>}
                              </ErrorMessageContainer>
                              <BaseButton disabled={isSubmitting} type="submit">
                                  Reset Password
                              </BaseButton>
                              <PasswordLink />
                              <SignUpLink />
                              <LoginFooter />
                          </PasswordResetValidationForm>
                )}
            </Formik>
        </BasePageContainer>
    )
}

export default PasswordResetValidation
