import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {Title} from '../../style/titles'
import {ErrorMessage} from '../../style/messages'
import {useResetErrors} from '../../hooks'
import {resetPassword} from '../../store/user/actions/authentication/resetPasswordAction'
import {BasePageContainer} from '../../style/containers'
import {ResetPasswordForm} from '../../style/forms'
import SignUpButton from '../../components/SignUpButton'
import SuccessMessage from '../../components/SuccessMessage'
import {BaseInput} from '../../style/inputs'


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

    return <BasePageContainer>
        <SignUpButton/>
        <ResetPasswordForm>
            {showSuccess && <SuccessMessage
                message={'A code has been sent to you email!'}
                redirect={'/password-reset-validation'}
            />}
            <Title>Forgot You Password?</Title>
            <BaseInput
                type='text'
                name='email'
                placeholder='email'
                ref={email}
            />
            {error && <ErrorMessage>{error.email}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
            <BaseButton onClick={resetPasswordHandler}>Send Code</BaseButton>
        </ResetPasswordForm>
    </BasePageContainer>
}


export default PasswordReset
