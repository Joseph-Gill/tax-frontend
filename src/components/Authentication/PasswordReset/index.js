import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {BaseButton} from '../../../style/buttons'
import {Title} from '../../../style/titles'
import {ErrorMessage} from '../../../style/messages'
import {LinkBase} from '../../../style/links'
import {ResetPasswordInput} from './styles'
import {useResetErrors} from '../../../hooks'
import {resetPassword} from '../../../store/user/actions/authentication/resetPasswordAction'
import {BasePageContainer} from '../../../style/containers'
import {ResetPasswordForm} from '../../../style/forms'
import SignUpButton from '../SignUpButton'
import SuccessMessage from '../../Shared/SuccessMessage'
import {useHistory} from 'react-router-dom'

const PasswordReset = ({dispatch, error}) => {
    let email = useRef('')
    const [showResetValidation, setShowResetValidation] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const history = useHistory()
    useResetErrors()

    const resetPasswordHandler = async e => {
        e.preventDefault()
        const data = await dispatch(resetPassword(email.current.value))
        if(data){
            setShowSuccess(!showSuccess)
        }
    }

    return <BasePageContainer>
        <SignUpButton/>
        <ResetPasswordForm>
            {showSuccess && <SuccessMessage
                message={'A code has been sent to you email!'}
                redirect={'/password-reset-validation'}
            />}
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
    </BasePageContainer>
}

const mapStateToProps = ({errorReducer: {error}}) => ({
    error
})

export default connect(mapStateToProps)(PasswordReset)
