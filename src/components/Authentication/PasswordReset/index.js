import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {BaseButton} from '../../../style/buttons'
import {Title} from '../../../style/titles'
import SendResetCodeSuccess from './SendResetCodeSucess'
import {ErrorMessage} from '../../../style/messages'
import {LinkBase} from '../../../style/links'
import {ResetPasswordInput} from './styles'
import {useResetErrors} from '../../../hooks'
import {resetPassword} from '../../../store/user/actions/authentication/resetPasswordAction'
import {AuthenticationContainer} from '../../../style/containers'
import {ResetPasswordForm} from '../../../style/forms'


const PasswordReset = ({dispatch, error}) => {
    let email = useRef('')
    const [showResetValidation, setShowResetValidation] = useState(false)
    const [showResetCodeSuccess, setShowResetCodeSuccess] = useState(false)
    useResetErrors()

    const resetPasswordHandler = async e => {
        e.preventDefault()
        const data = await dispatch(resetPassword(email.current.value))
        if(data){
            setShowResetCodeSuccess(!showResetCodeSuccess)
            setTimeout(() => {
                setShowResetValidation(!showResetValidation)
            }, 2000)
        }
    }

    return <AuthenticationContainer>
        <ResetPasswordForm>
            {showResetCodeSuccess && <SendResetCodeSuccess/>}
            <Title>Forgot You Password?</Title>
            <ResetPasswordInput
                type='text'
                name='email'
                placeholder='email'
                ref={email}
            />
            {error && <ErrorMessage>{error.email}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
            <BaseButton onClick={resetPasswordHandler}>Send Code</BaseButton>
            <LinkBase to='/password-reset-validation'>I have the code already!</LinkBase>
        </ResetPasswordForm>
    </AuthenticationContainer>
}

const mapStateToProps = ({errorReducer: {error}}) => ({
    error
})

export default connect(mapStateToProps)(PasswordReset)
