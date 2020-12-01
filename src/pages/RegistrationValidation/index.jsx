import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {ErrorMessage} from '../../style/messages'
import {useUrlQueryParams, useResetErrors} from '../../hooks'
import {registrationValidationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import {Title} from '../../style/titles'
import {BasePageContainer, LoginLogoContainer} from '../../style/containers'
import {RegistrationValidationForm} from '../../style/forms'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import {BaseInput, NameInput} from '../../style/inputs'
import {LOGIN} from '../../routes/paths'
import LoginFooter from '../../components/LoginFooter'
import {LoginLogo} from '../../style/logos'
import {LogoPlaceholder} from '../../style'
import styled from 'styled-components/macro'
import {EmailInputLabel, ActiveInputLabel} from '../../style/labels'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const NameInputContainer = styled.div`
    display: flex;
    width: 302px;
    justify-content: space-between;
`


const RegistrationValidation = () => {
    const email = useUrlQueryParams('email')
    const code = useUrlQueryParams('code')
    let password = useRef('')
    let password_repeat = useRef('')
    let first_name = useRef('')
    let last_name = useRef('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
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
                <LoginLogoContainer>
                    <LoginLogo alt="logo" src={LogoPlaceholder} />
                </LoginLogoContainer>
                <Title>Register</Title>
                <NameInputContainer>
                    <div>
                        <ActiveInputLabel htmlFor='first_name'>Firstname</ActiveInputLabel>
                        <NameInput
                            name='first_name'
                            placeholder='Enter firstname'
                            ref={first_name}
                            type='text'
                        />
                    </div>
                    <div>
                        <ActiveInputLabel htmlFor='last_name'>Lastname</ActiveInputLabel>
                        <NameInput
                            name='last_name'
                            placeholder='Enter lastname'
                            ref={last_name}
                            type='text'
                        />
                    </div>
                </NameInputContainer>
                <NameInputContainer>
                    {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
                    {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
                </NameInputContainer>
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
                        inputClass='phoneInput'
                        inputStyle={{
                            background: '#FAFAFA',
                            height: '42px',
                            fontFamily: 'Nunito Sans, sans-serif',
                            fontSize: '14px'
                        }}
                        onChange={phone => setPhoneNumber(phone)}
                        value={phoneNumber}
                    />
                </div>
                <div>
                    <ActiveInputLabel>Password</ActiveInputLabel>
                    <BaseInput
                        name='password'
                        placeholder='Enter your password'
                        ref={password}
                        type='password'
                    />
                </div>
                {error && <ErrorMessage>{error.password}</ErrorMessage>}
                <div>
                    <ActiveInputLabel>Password</ActiveInputLabel>
                    <BaseInput
                        name='password_repeat'
                        placeholder='Retype new password'
                        ref={password_repeat}
                        type='password'
                    />
                </div>
                {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                <BaseButton onClick={ValidationHandler}>Register</BaseButton>
                <SignUpLink />
                <LoginFooter />
            </RegistrationValidationForm>
        </BasePageContainer>
    )
}


export default RegistrationValidation

