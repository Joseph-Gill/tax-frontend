import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import {CountryDropdown} from 'react-country-region-selector'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import LoginFooter from '../../components/LoginFooter'
import LoginLogo from '../../components/LoginLogo'
import RegistrationValidationNameInput from './RegistrationValidationNameInput'
import {useUrlQueryParams, useResetErrors} from '../../hooks'
import {registrationValidationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import {LOGIN} from '../../routes/paths'
import {Title} from '../../style/titles'
import {BaseInput} from '../../style/inputs'
import {BaseButton} from '../../style/buttons'
import {ErrorMessage} from '../../style/messages'
import {RegistrationValidationForm} from '../../style/forms'
import {EmailInputLabel, ActiveInputLabel} from '../../style/labels'
import {BasePageContainer, ErrorMessageContainer} from '../../style/containers'
import 'react-phone-input-2/lib/style.css'


const RegistrationValidation = () => {
    const dispatch = useDispatch()
    const email = useUrlQueryParams('email')
    const code = useUrlQueryParams('code')
    let password = useRef('')
    let password_repeat = useRef('')
    let first_name = useRef('')
    let last_name = useRef('')
    const error = useSelector(state => state.errorReducer.error)
    const [showSuccess, setShowSuccess] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [countryName, setCountryName] = useState('')

    useResetErrors()

    const ValidationHandler = async e => {
        e.preventDefault()
        const credentials = {
            email: email,
            code: code,
            password: password.current.value,
            password_repeat: password_repeat.current.value,
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            phone_number: phoneNumber,
            country: countryName
        }
        const data = await dispatch(registrationValidationAction(credentials))
        if(data) setShowSuccess(!showSuccess)
    }

    return (
        <BasePageContainer>
            {showSuccess && <SuccessMessage
                message="Congratulations! Your account was successfully created!"
                redirect={LOGIN}
                            />}
            <RegistrationValidationForm>
                <LoginLogo />
                <Title>Register</Title>
                <RegistrationValidationNameInput
                    error={error}
                    first_name={first_name}
                    last_name={last_name}
                />
                <div>
                    <EmailInputLabel>Email</EmailInputLabel>
                    <BaseInput
                        disabled
                        name='email'
                        placeholder='Enter your email'
                        type='text'
                        value={email}
                    />
                </div>
                <div>
                    <ActiveInputLabel>Phone</ActiveInputLabel>
                    <PhoneInput
                        country='ch'
                        inputClass='profilePhoneInput'
                        inputStyle={{
                            background: '#FAFAFA',
                            height: '42px',
                            fontFamily: 'Nunito Sans, sans-serif',
                            fontSize: '14px',
                            borderRadius: '1.5rem'
                        }}
                        onChange={phone => setPhoneNumber(phone)}
                        value={phoneNumber}
                    />
                    <ErrorMessageContainer>
                        {error && <ErrorMessage>{error.phone_number}</ErrorMessage>}
                    </ErrorMessageContainer>
                </div>
                <div>
                    <ActiveInputLabel>Password</ActiveInputLabel>
                    <BaseInput
                        name='password'
                        placeholder='Enter your password'
                        ref={password}
                        type='password'
                    />
                    <ErrorMessageContainer>
                        {error && <ErrorMessage>{error.password}</ErrorMessage>}
                    </ErrorMessageContainer>
                </div>
                <div>
                    <ActiveInputLabel>Password Repeat</ActiveInputLabel>
                    <BaseInput
                        name='password_repeat'
                        placeholder='Retype new password'
                        ref={password_repeat}
                        type='password'
                    />
                    <ErrorMessageContainer>
                        {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                    </ErrorMessageContainer>
                </div>
                <div>
                    <ActiveInputLabel>Country</ActiveInputLabel>
                    <CountryDropdown
                        classes='profileCountryDropdown'
                        onChange={(val) => setCountryName(val)}
                        value={countryName}
                    />
                    <ErrorMessageContainer>
                        {error && <ErrorMessage>{error.country}</ErrorMessage>}
                    </ErrorMessageContainer>
                </div>
                <ErrorMessageContainer>
                    {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                </ErrorMessageContainer>
                <BaseButton onClick={ValidationHandler}>Register</BaseButton>
                <SignUpLink />
                <LoginFooter />
            </RegistrationValidationForm>
        </BasePageContainer>
    )
}


export default RegistrationValidation

