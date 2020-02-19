import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {BaseButton} from '../../../style/buttons'
import {Title} from '../../../style/titles'
import SendResetCodeSuccess from './SendResetCodeSucess'
import PasswordResetValidation from '../PasswordResetValidation'
import {ErrorMessage} from '../../../style/messages'
import {CredentialsLink} from '../../../style/links'
import {ResetPasswordForm, ResetPasswordInput} from './styles'
import {useResetErrors} from '../../../hooks'
import {resetPassword} from '../../../store/user/actions/authentication/resetPasswordAction'


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

    return <>
        <ResetPasswordForm>
            {showResetCodeSuccess && <SendResetCodeSuccess/>}
            {showResetValidation && <PasswordResetValidation showResetValidation={showResetValidation} setShowResetValidation={setShowResetValidation}/>}
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
            <CredentialsLink onClick={() => setShowResetValidation(!showResetValidation)}>
                I have the code already!
            </CredentialsLink>
        </ResetPasswordForm>
    </>
}

const mapStateToProps = ({errorReducer: {error}}) => ({
    error
})

export default connect(mapStateToProps)(PasswordReset)
