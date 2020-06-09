import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {useHistory} from 'react-router-dom'
import {Title} from '../../style/titles'
import {LinkBase} from '../../style/links'
import {ErrorMessage} from '../../style/messages'
import {useResetErrors} from '../../hooks'
import {userLoginAction} from '../../store/user/actions/authentication/userLoginAction'
import SignUpButton from '../../components/SignUpButton'
import {BasePageContainer} from '../../style/containers'
import {LoginForm} from '../../style/forms'
import {BaseInput} from '../../style/inputs'
import {HOME, PASSWORD_RESET} from '../../routes/paths'


const Login = () => {
    let email = useRef('')
    let password = useRef('')
    const [showPassword, setShowPassword] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const history = useHistory()
    const dispatch = useDispatch()
    useResetErrors()

    const login = async e => {
        e.preventDefault()
        const credentials = {
            email: email.current.value,
            password: password.current.value
        }
        const data = await dispatch(userLoginAction(credentials))
        if(data) history.push(HOME)
    }

    return (
        <BasePageContainer>
            <SignUpButton />
            <LoginForm>
                <Title>Login</Title>
                <BaseInput
                    name='email'
                    placeholder='Enter your email ...'
                    ref={email}
                    type='text'
                />
                <BaseInput
                    name='password'
                    placeholder='Enter your password ...'
                    ref={password}
                    type={showPassword ? 'text' : 'password'}
                />
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                <input
                    onClick={() => setShowPassword(!showPassword)}
                    type='checkbox'
                />
                {showPassword ? 'Hide Password' : 'Show Password'}
                <BaseButton onClick={login}>Login</BaseButton>
                <LinkBase to={PASSWORD_RESET}>Forgot your password?</LinkBase>
            </LoginForm>
        </BasePageContainer>
    )
}

export default Login


