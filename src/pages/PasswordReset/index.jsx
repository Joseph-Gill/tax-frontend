import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import LoginFooter from '../../components/LoginFooter'
import PasswordLink from '../../components/PasswordLink'
import {useResetErrors} from '../../hooks'
import {resetPassword} from '../../store/user/actions/authentication/resetPasswordAction'
import {LOGIN} from '../../routes/paths'
import {Title} from '../../style/titles'
import {LogoPlaceholder} from '../../style'
import {LoginLogo} from '../../style/logos'
import {BaseInput} from '../../style/inputs'
import {BaseButton} from '../../style/buttons'
import {ErrorMessage} from '../../style/messages'
import {ResetPasswordForm} from '../../style/forms'
import {ActiveInputLabel} from '../../style/labels'
import {BasePageContainer, ErrorMessageContainer, LoginLogoContainer} from '../../style/containers'


const PasswordReset = () => {
    const dispatch = useDispatch()
    let email = useRef('')
    const error = useSelector(state => state.errorReducer.error)
    const [showSuccess, setShowSuccess] = useState(false)

    useResetErrors()

    const resetPasswordHandler = async e => {
        e.preventDefault()
        const data = await dispatch(resetPassword(email.current.value))
        if(data) setShowSuccess(!showSuccess)
    }

    return (
        <BasePageContainer>
            <ResetPasswordForm>
                <LoginLogoContainer>
                    <LoginLogo alt="logo" src={LogoPlaceholder} />
                </LoginLogoContainer>
                {
                    showSuccess
                    &&
                    <SuccessMessage
                        message="A code has been sent to your email!"
                        redirect={LOGIN}
                    />
                }
                <Title>Forgot Your Password?</Title>
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
                <BaseButton onClick={resetPasswordHandler}>Send Code</BaseButton>
                <PasswordLink />
                <SignUpLink />
                <LoginFooter />
            </ResetPasswordForm>
        </BasePageContainer>
    )
}


export default PasswordReset
