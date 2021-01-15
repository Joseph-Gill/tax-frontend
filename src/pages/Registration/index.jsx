import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import LoginFooter from '../../components/LoginFooter'
import PasswordLink from '../../components/PasswordLink'
import {userRegistrationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import {useResetErrors} from '../../hooks'
import {LOGIN} from '../../routes/paths'
import {Title} from '../../style/titles'
import {LoginLogo} from '../../style/logos'
import {BaseInput} from '../../style/inputs'
import {BaseButton} from '../../style/buttons'
import {ErrorMessage} from '../../style/messages'
import {RegistrationForm} from '../../style/forms'
import {ActiveInputLabel} from '../../style/labels'
import {BasePageContainer, ErrorMessageContainer, LoginLogoContainer} from '../../style/containers'
import {LogoPlaceholder} from '../../style'


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
                    <ActiveInputLabel>Email</ActiveInputLabel>
                    <BaseInput
                        name='email'
                        placeholder='Enter your email'
                        ref={email}
                        type='text'
                    />
                </div>
                <ErrorMessageContainer>
                    {error && <ErrorMessage>{error.email}</ErrorMessage>}
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                </ErrorMessageContainer>
                <BaseButton onClick={registrationHandler}>Register</BaseButton>
                <PasswordLink />
                <SignUpLink />
                <LoginFooter />
            </RegistrationForm>
        </BasePageContainer>
    )
}


export default Registration


