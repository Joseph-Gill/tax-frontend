import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ErrorMessage} from '../../style/messages'
import {BaseButton} from '../../style/buttons'
import {Title} from '../../style/titles'
import {LinkBase} from '../../style/links'
import {useUrlQueryParams, useResetErrors} from '../../hooks'
import {restPasswordValidate} from '../../store/user/actions/authentication/resetPasswordAction'
import {BasePageContainer} from '../../style/containers'
import {PasswordResetValidationForm} from '../../style/forms'
import SignUpButton from '../../components/SignUpButton'
import SuccessMessage from '../../components/SuccessMessage'
import {BaseInput} from '../../style/inputs'


const PasswordResetValidation = () => {
    const email = useUrlQueryParams('email')
    const code = useUrlQueryParams('code')
    let password = useRef('')
    let password_repeat = useRef('')
    const [showHidePassword, setShowHidePassword] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    useResetErrors()

    const register = async e => {
        e.preventDefault()
        const credentials = {
            email: email,
            code: code,
            password: password.current.value,
            password_repeat: password_repeat.current.value,
        }
        const data = await dispatch(restPasswordValidate(credentials))
        if(data) setShowSuccess(!showSuccess)
    }

    return <BasePageContainer>
        <SignUpButton/>
        <PasswordResetValidationForm>
            {showSuccess && <SuccessMessage
                message={'You Password has been updated Successfully!'}
                redirect={'/login'}
            />}
            <Title>Create New Password</Title>
            <BaseInput
                type={showHidePassword ? 'text' : 'password'}
                name='password'
                placeholder='password'
                ref={password}
            />
            {error && <ErrorMessage>{error.password}</ErrorMessage>}

            <BaseInput
                type={showHidePassword ? 'text' : 'password'}
                name='password_repeat'
                placeholder='password repeat'
                ref={password_repeat}
            />
            {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
            {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
            <input type='checkbox'
                   onClick={() => setShowHidePassword(!showHidePassword)}
            />
            {showHidePassword ? 'Hide Passwords' : 'Show Passwords'}
            <BaseButton onClick={register}>Reset Password</BaseButton>
            <LinkBase to='/password-reset'>I don't have the code yet!</LinkBase>
        </PasswordResetValidationForm>
    </BasePageContainer>
}

export default PasswordResetValidation

