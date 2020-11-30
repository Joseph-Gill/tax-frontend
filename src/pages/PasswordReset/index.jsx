import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {Title} from '../../style/titles'
import {ErrorMessage} from '../../style/messages'
import {useResetErrors} from '../../hooks'
import {resetPassword} from '../../store/user/actions/authentication/resetPasswordAction'
import {BasePageContainer} from '../../style/containers'
import {ResetPasswordForm} from '../../style/forms'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import {BaseInput} from '../../style/inputs'
import {LOGIN} from '../../routes/paths'


const PasswordReset = () => {
    let email = useRef('')
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    useResetErrors()

    const resetPasswordHandler = async e => {
        e.preventDefault()
        const data = await dispatch(resetPassword(email.current.value))
        if(data) setShowSuccess(!showSuccess)
    }

    return (
        <BasePageContainer>
            <SignUpLink />
            <ResetPasswordForm>
                {
                    showSuccess
                    &&
                    <SuccessMessage
                        message="A code has been sent to your email!"
                        redirect={LOGIN}
                    />
                }
                <Title>Forgot Your Password?</Title>
                <BaseInput
                    name='email'
                    placeholder='email'
                    ref={email}
                    type='text'
                />
                {error && <ErrorMessage>{error.email}</ErrorMessage>}
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                <BaseButton onClick={resetPasswordHandler}>Send Code</BaseButton>
            </ResetPasswordForm>
        </BasePageContainer>
    )
}


export default PasswordReset
