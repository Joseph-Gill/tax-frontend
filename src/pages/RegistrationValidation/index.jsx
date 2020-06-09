import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {ErrorMessage} from '../../style/messages'
import {useUrlQueryParams, useResetErrors} from '../../hooks'
import {registrationValidationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import {Title} from '../../style/titles'
import {LinkBase} from '../../style/links'
import {BasePageContainer} from '../../style/containers'
import {RegistrationValidationForm} from '../../style/forms'
import SignUpButton from '../../components/SignUpButton'
import SuccessMessage from '../../components/SuccessMessage'
import {BaseInput} from '../../style/inputs'
import {LOGIN} from '../../routes/paths'


const RegistrationValidation = () => {
    const email = useUrlQueryParams('email')
    const code = useUrlQueryParams('code')
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
            email: email,
            code: code,
            password: password.current.value,
            password_repeat: password_repeat.current.value,
            first_name: first_name.current.value,
            last_name: last_name.current.value,
        }
        const data = await dispatch(registrationValidationAction(credentials))
        if(data) setShowSuccess(!showSuccess)
    }

    return (
        <BasePageContainer>
            <SignUpButton />
            {showSuccess && <SuccessMessage
                message="Congratulations! Your account was successfully created!"
                redirect={LOGIN}
                            />}
            <RegistrationValidationForm>
                <Title>Create Your Account</Title>
                <BaseInput
                    name='first_name'
                    placeholder='first name'
                    ref={first_name}
                    type='text'
                />
                {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
                <BaseInput
                    name='last_name'
                    placeholder='last name'
                    ref={last_name}
                    type='text'
                />
                {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
                <BaseInput
                    name='password'
                    placeholder='password'
                    ref={password}
                    type={showPassword ? 'text' : 'password'}
                />
                {error && <ErrorMessage>{error.password}</ErrorMessage>}
                <BaseInput
                    name='password_repeat'
                    placeholder='password repeat'
                    ref={password_repeat}
                    type={showPassword ? 'text' : 'password'}
                />
                {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}

                <input
                    onClick={() => setShowPassword(!showPassword)}
                    type='checkbox'
                />
                {showPassword ? 'Hide Password' : 'Show Password'}

                <BaseButton onClick={ValidationHandler}>Register</BaseButton>
                <LinkBase to={LOGIN}>Registered already? Login here!</LinkBase>
            </RegistrationValidationForm>
        </BasePageContainer>
    )
}


export default RegistrationValidation

