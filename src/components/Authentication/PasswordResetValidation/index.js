import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {ShowPasswordWrapper} from '../../../style/wrappers'
import {ErrorMessage} from '../../../style/messages'
import {BaseButton} from '../../../style/buttons'
import {Title} from '../../../style/titles'
import {CredentialsLink, LinkBase} from '../../../style/links'
import NewPasswordSuccess from './NewPasswordSucess'
import {withRouter} from 'react-router-dom'
import {ResetPasswordValidationInput} from './styles'
import {useResetErrors} from '../../../hooks'
import {restPasswordValidate} from '../../../store/user/actions/authentication/resetPasswordAction'
import {ROUTE_HOME} from '../../../routes'
import {AuthenticationContainer} from '../../../style/containers'
import {PasswordResetValidationForm} from '../../../style/forms'


const PasswordResetValidation = ({dispatch, error, history, setShowResetValidation, showResetValidation}) => {
    let email = useRef('')
    let code = useRef('')
    let password = useRef('')
    let password_repeat = useRef('')
    const [showHidePassword, setShowHidePassword] = useState(false)
    const [showNewPasswordSuccess, setShowNewPasswordSuccess] = useState(false)
    useResetErrors()

    const register = async e => {
        e.preventDefault()
        const credentials = {
            email: email.current.value,
            code: code.current.value,
            password: password.current.value,
            password_repeat: password_repeat.current.value,
        }

        const data = await dispatch(restPasswordValidate(credentials))
        if(data){
            setShowNewPasswordSuccess(!showNewPasswordSuccess)
            setTimeout(() => {
                history.push(ROUTE_HOME)
            }, 2500)
        }
    }

    return <AuthenticationContainer>
        <PasswordResetValidationForm>
            {showNewPasswordSuccess && <NewPasswordSuccess/>}
            <Title>Create New Password</Title>
            <ResetPasswordValidationInput
                type='text'
                name='email'
                placeholder='email'
                ref={email}
            />
            {error && <ErrorMessage>{error.email}</ErrorMessage>}
            <ResetPasswordValidationInput
                type='text'
                name='code'
                placeholder='code'
                ref={code}
            />
            {error && <ErrorMessage>{error.code}</ErrorMessage>}
            <ResetPasswordValidationInput
                type={showHidePassword ? 'text' : 'password'}
                name='password'
                placeholder='password'
                ref={password}
            />
            {error && <ErrorMessage>{error.password}</ErrorMessage>}

            <ResetPasswordValidationInput
                type={showHidePassword ? 'text' : 'password'}
                name='password_repeat'
                placeholder='password repeat'
                ref={password_repeat}
            />
            {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
            {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
            <ShowPasswordWrapper>
                <input type='checkbox'
                       onClick={() => setShowHidePassword(!showHidePassword)}
                />
                {showHidePassword ? 'Hide Passwords' : 'Show Passwords'}
            </ShowPasswordWrapper>
            <BaseButton onClick={register}>Reset Password</BaseButton>
            <LinkBase to='/password-reset'>I don't have the code yet!</LinkBase>
        </PasswordResetValidationForm>
    </AuthenticationContainer>
}

const mapStateToProps = ({errorReducer: {error}}) => ({
    error
})

export default withRouter(connect(mapStateToProps)(PasswordResetValidation))

