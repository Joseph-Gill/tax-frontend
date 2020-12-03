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
import {LOGIN} from '../../routes/paths'
import LoginFooter from '../../components/LoginFooter'
import {LoginLogo} from '../../style/logos'
import {LogoPlaceholder} from '../../style'
import {ActiveInputLabel} from '../../style/labels'
import PasswordLink from '../../components/PasswordLink'


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


