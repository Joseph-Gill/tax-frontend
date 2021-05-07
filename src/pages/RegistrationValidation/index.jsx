import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import PhoneInput from 'react-phone-input-2'
import {CountryDropdown} from 'react-country-region-selector'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import LoginFooter from '../../components/LoginFooter'
import LoginLogo from '../../components/LoginLogo'
import RegistrationValidationNameInput from './RegistrationValidationNameInput'
import {useUrlQueryParams} from '../../hooks'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {registrationValidationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import {LOGIN} from '../../routes/paths'
import {GlassInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import {RegistrationValidationForm} from '../../style/forms'
import {ErrorMessageContainer, InputErrorContainer, RegistrationLoginContainer} from '../../style/containers'
import {PasswordErrorMessageContainer, PhoneErrorMessageContainer, RegistrationValidationButton, RegistrationValidationTitle} from './styles'
import 'react-phone-input-2/lib/style.css'


const RegistrationValidation = ({history}) => {
    const dispatch = useDispatch()
    const email = useUrlQueryParams('email')
    const code = useUrlQueryParams('code')
    const error = useSelector(state => state.errorReducer.error)
    const [showSuccess, setShowSuccess] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [countryName, setCountryName] = useState('')

    return (
        <RegistrationLoginContainer>
            <div className='color' />
            <div className='color' />
            <div className='color' />
            <Formik
                // Sets initial values for Formik inputs
                initialValues={{password: '', password_repeat: '', first_name: '', last_name: ''}}
                // Function called each time submit button is clicked
                onSubmit={async (values) => {
                    dispatch(resetErrors())
                    const credentials = {
                        email: email,
                        code: code,
                        password: values.password,
                        password_repeat: values.password_repeat,
                        first_name: values.first_name,
                        last_name: values.last_name,
                        phone_number: phoneNumber,
                        country: countryName
                    }
                    const response = await dispatch(registrationValidationAction(credentials))
                    if (response) {
                        setShowSuccess(!showSuccess)
                    }
                }}
                validate={values  => {
                    const errors = {};
                    if (!values.password) {
                        errors.password = true;
                    }
                    if (!values.password_repeat) {
                        errors.password_repeat = true;
                    }
                    if (!values.first_name) {
                        errors.first_name = true;
                    }
                    if (!values.last_name) {
                        errors.last_name = true;
                    }
                    if (values.password !== values.password_repeat) {
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
                          <RegistrationValidationForm onSubmit={handleSubmit}>
                              <RegistrationValidationTitle>Register</RegistrationValidationTitle>
                              <RegistrationValidationNameInput
                                  error={error}
                                  errors={errors}
                                  handleBlur={handleBlur}
                                  handleChange={handleChange}
                                  touched={touched}
                                  values={values}
                              />
                              <InputErrorContainer>
                                  <GlassInput
                                      disabled
                                      name='email'
                                      placeholder='Enter your email'
                                      type='text'
                                      value={email}
                                  />
                                  <ErrorMessageContainer />
                              </InputErrorContainer>
                              <InputErrorContainer>
                                  <PhoneInput
                                      country='ch'
                                      inputClass='profilePhoneInput'
                                      inputStyle={{
                                          background: 'rgba(255, 255, 255, 0.2)',
                                          height: '42px',
                                          fontFamily: 'Nunito Sans, sans-serif',
                                          fontSize: '14px',
                                          borderRadius: '1.5rem',
                                          borderTop: 'rgba(255, 255, 255, 0.5)',
                                          borderLeft: 'rgba(255, 255, 255, 0.5)',
                                          borderBottom: 'none',
                                          borderRight: 'none',
                                          letterSpacing: '1px',
                                          color: '#FFFFFF',
                                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                                          marginBottom: '10px'
                                      }}
                                      onChange={phone => setPhoneNumber(phone)}
                                      value={phoneNumber}
                                  />
                                  <PhoneErrorMessageContainer>
                                      {error && <ErrorMessage>{error.phone_number}</ErrorMessage>}
                                  </PhoneErrorMessageContainer>
                              </InputErrorContainer>
                              <InputErrorContainer>
                                  <GlassInput
                                      error={errors.password}
                                      name='password'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder='Enter your password'
                                      type='password'
                                      value={values.password}
                                  />
                                  <PasswordErrorMessageContainer>
                                      {error && <ErrorMessage>{error.password}</ErrorMessage>}
                                      {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                                  </PasswordErrorMessageContainer>
                              </InputErrorContainer>
                              <InputErrorContainer>
                                  <GlassInput
                                      error={errors.password_repeat}
                                      name='password_repeat'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder='Retype new password'
                                      type='password'
                                      value={values.password_repeat}
                                  />
                                  <ErrorMessageContainer>
                                      {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                                      {errors.password_repeat && touched.password_repeat && <ErrorMessage>{errors.password_repeat}</ErrorMessage>}
                                  </ErrorMessageContainer>
                              </InputErrorContainer>
                              <InputErrorContainer>
                                  <CountryDropdown
                                      classes='glassInputCountryDropdown'
                                      onChange={(val) => setCountryName(val)}
                                      value={countryName}
                                  />
                                  <ErrorMessageContainer>
                                      {error && <ErrorMessage>{error.country}</ErrorMessage>}
                                      {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                                      {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                                  </ErrorMessageContainer>
                              </InputErrorContainer>
                              <RegistrationValidationButton disabled={isSubmitting} type='submit'>Register</RegistrationValidationButton>
                          </RegistrationValidationForm>
                )}
            </Formik>
            <LoginLogo history={history} />
            <SignUpLink />
            <LoginFooter />
            {showSuccess &&
                <SuccessMessage
                    message="Congratulations! Your account was successfully created!"
                    redirect={LOGIN}
                />}
        </RegistrationLoginContainer>
    )
}


export default RegistrationValidation

