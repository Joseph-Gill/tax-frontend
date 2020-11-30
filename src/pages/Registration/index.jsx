import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {Title} from '../../style/titles'
import {useResetErrors} from '../../hooks'
import {userRegistrationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import SignUpLink from '../../components/SignUpLink'
import {BasePageContainer, LoginLogoContainer} from '../../style/containers'
import {RegistrationForm} from '../../style/forms'
import SuccessMessage from '../../components/SuccessMessage'
import {BaseInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import styled from 'styled-components/macro'
import {LOGIN} from '../../routes/paths'
import LoginFooter from '../../components/LoginFooter'
import {LoginLogo} from '../../style/logos'
import {LogoPlaceholder} from '../../style'
import {InputLabel} from '../../style/labels'
import PasswordLink from '../../components/PasswordLink'


export const TermsAndConditionsWrapper = styled.div`
  margin-top: 10px;
  width: 75%;
  color: rgba(0,0,0,0.82);
  font-size: 12px;
  height: 25%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  flex-direction: column;
    label {
    color: ${props => props.theme.accentColor};
    cursor: pointer;
    :hover {
        text-decoration: underline;
        color: #c47010;
    }
`


const Registration = () => {
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    let email = useRef('')
    useResetErrors()

    const registrationHandler = async (e) => {
        e.preventDefault()
        const data = await dispatch(userRegistrationAction(email.current.value))
        if(data) setShowSuccess(!showSuccess)
    }

    return (
        <BasePageContainer>
            {showSuccess && <SuccessMessage
                message="A verification code has been sent to you email!"
                redirect={LOGIN}
                            />}
            <RegistrationForm>
                <LoginLogoContainer>
                    <LoginLogo alt="logo" src={LogoPlaceholder} />
                </LoginLogoContainer>
                <Title>Registration</Title>
                <div>
                    <InputLabel>Email</InputLabel>
                    <BaseInput
                        name='email'
                        placeholder='Enter your email'
                        ref={email}
                        type='text'
                    />
                </div>
                {error && <ErrorMessage>{error.email}</ErrorMessage>}
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                <BaseButton onClick={registrationHandler}>Register</BaseButton>
                <PasswordLink />
                <SignUpLink />
                <LoginFooter />
            </RegistrationForm>
        </BasePageContainer>
    )
}


export default Registration


