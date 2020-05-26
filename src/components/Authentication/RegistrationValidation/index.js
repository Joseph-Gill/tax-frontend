import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {ShowPasswordWrapper} from '../../../style/wrappers'
import {BaseButton} from '../../../style/buttons'
import ValidationSuccess from './ValidationSucess'
import {ErrorMessage} from '../../../style/messages'
import {ValidationInput} from './styles'
import {useResetErrors} from '../../../hooks'
import {registrationValidationAction} from '../../../store/user/actions/authentication/userRegistrationAction'
import {ROUTE_HOME} from '../../../routes'
import {Title} from '../../../style/titles'
import {LinkBase} from '../../../style/links'
import {AuthenticationContainer} from '../../../style/containers'
import {RegistrationValidationForm} from '../../../style/forms'


const RegistrationValidation = ({dispatch, history, error, showRegister, setShowRegister, showValidation, setShowValidation}) => {
    let email = useRef('')
    let code = useRef('')
    let password = useRef('')
    let password_repeat = useRef('')
    let first_name = useRef('')
    let last_name = useRef('')
    const [showPassword, setShowPassword] = useState(false)
    const [showValidationSuccess, setShowValidationSuccess] = useState(false)
    useResetErrors()

    const ValidationHandler = async e => {
        e.preventDefault()
        const credentials = {
            email: email.current.value,
            code: code.current.value,
            password: password.current.value,
            password_repeat: password_repeat.current.value,
            first_name: first_name.current.value,
            last_name: last_name.current.value,
        }

        const data = await dispatch(registrationValidationAction(credentials))
        if (data) {
            setShowValidationSuccess(!showValidationSuccess)
            setTimeout(() => {
                history.push(ROUTE_HOME)
            }, 2000)
        }
    }

    return <AuthenticationContainer>
        <RegistrationValidationForm>
            {showValidationSuccess && <ValidationSuccess/>}
            <Title>Create Your Account</Title>
            <ValidationInput
                type='text'
                name='email'
                placeholder='email'
                ref={email}
            />
            {error && <ErrorMessage>{error.email}</ErrorMessage>}

            <ValidationInput
                type='text'
                name='code'
                placeholder='code'
                ref={code}
            />
            {error && <ErrorMessage>{error.code}</ErrorMessage>}

            <ValidationInput
                type='text'
                name='first_name'
                placeholder='first name'
                ref={first_name}
            />
            {error && <ErrorMessage>{error.first_name}</ErrorMessage>}

            <ValidationInput
                type='text'
                name='last_name'
                placeholder='last name'
                ref={last_name}
            />
            {error && <ErrorMessage>{error.last_name}</ErrorMessage>}

            <ValidationInput
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='password'
                ref={password}
            />
            {error && <ErrorMessage>{error.password}</ErrorMessage>}
            <ValidationInput
                type={showPassword ? 'text' : 'password'}
                name='password_repeat'
                placeholder='password repeat'
                ref={password_repeat}
            />
            {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}

            {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}


            <ShowPasswordWrapper>
                <input
                    type='checkbox'
                    onClick={() => setShowPassword(!showPassword)}
                />
                {showPassword ? 'Hide Password' : 'Show Password'}
            </ShowPasswordWrapper>
            <BaseButton onClick={ValidationHandler}>Register</BaseButton>
            <LinkBase to='/login'>Registered already? login here!</LinkBase>
        </RegistrationValidationForm>
    </AuthenticationContainer>
}

const mapStateToProps = ({errorReducer: {error}}) => ({
    error
})

export default withRouter(connect(mapStateToProps)(RegistrationValidation))

