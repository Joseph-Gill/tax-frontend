import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../../style/buttons'
import {ErrorMessage} from '../../../style/messages'
import {useResetErrors} from '../../../hooks'
import {registrationValidationAction} from '../../../store/user/actions/authentication/userRegistrationAction'
import {Title} from '../../../style/titles'
import {LinkBase} from '../../../style/links'
import {BasePageContainer} from '../../../style/containers'
import {RegistrationValidationForm} from '../../../style/forms'
import SignUpButton from '../SignUpButton'
import SuccessMessage from '../../Shared/SuccessMessage'
import {BaseInput} from '../../../style/inputs'


const RegistrationValidation = () => {
    let email = useRef('')
    let code = useRef('')
    let password = useRef('')
    let password_repeat = useRef('')
    let first_name = useRef('')
    let last_name = useRef('')
    const [showPassword, setShowPassword] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
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
        if(data) setShowSuccess(!showSuccess)
    }

    return <BasePageContainer>
        <SignUpButton/>
        {showSuccess && <SuccessMessage
            message={'Congratulations! Your account was successfully created!'}
            redirect={'/login'}
        />}
        <RegistrationValidationForm>
            <Title>Create Your Account</Title>
            <BaseInput
                type='text'
                name='email'
                placeholder='email'
                ref={email}
            />
            {error && <ErrorMessage>{error.email}</ErrorMessage>}
            <BaseInput
                type='text'
                name='code'
                placeholder='code'
                ref={code}
            />
            {error && <ErrorMessage>{error.code}</ErrorMessage>}
            <BaseInput
                type='text'
                name='first_name'
                placeholder='first name'
                ref={first_name}
            />
            {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
            <BaseInput
                type='text'
                name='last_name'
                placeholder='last name'
                ref={last_name}
            />
            {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
            <BaseInput
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='password'
                ref={password}
            />
            {error && <ErrorMessage>{error.password}</ErrorMessage>}
            <BaseInput
                type={showPassword ? 'text' : 'password'}
                name='password_repeat'
                placeholder='password repeat'
                ref={password_repeat}
            />
            {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
            {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}

            <input
                type='checkbox'
                onClick={() => setShowPassword(!showPassword)}
            />
            {showPassword ? 'Hide Password' : 'Show Password'}

            <BaseButton onClick={ValidationHandler}>Register</BaseButton>
            <LinkBase to='/login'>Registered already? login here!</LinkBase>
        </RegistrationValidationForm>
    </BasePageContainer>
}


export default RegistrationValidation

