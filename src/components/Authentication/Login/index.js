import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {BaseButton} from '../../../style/buttons'
import {Title} from '../../../style/titles'
import {ShowPasswordWrapper} from '../../../style/wrappers'
import {LinkBase} from '../../../style/links'
import {ErrorMessage} from '../../../style/messages'
import {LoginInput} from './styles'
import {useResetErrors} from '../../../hooks'
import {userLoginAction} from '../../../store/user/actions/authentication/userLoginAction'
import SignUpButton from '../SignUpButton'
import {AuthenticationContainer} from '../../../style/containers'
import {LoginForm} from '../../../style/forms'


const Login = (({dispatch, history, error}) => {
    let email = useRef('')
    let password = useRef('')
    const [showPassword, setShowPassword] = useState(false)
    useResetErrors()

    const login = async e => {
        e.preventDefault()
        const credentials = {
            email: email.current.value,
            password: password.current.value
        }
        await dispatch(userLoginAction(credentials))
        history.push('/home')
    }

    return <AuthenticationContainer>
        <SignUpButton/>
        <LoginForm>
            <Title>Login</Title>
            <LoginInput
                type='text'
                name='email'
                placeholder='Enter your email ...'
                ref={email}
            />

            <LoginInput
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Enter your password ...'
                ref={password}
            />

            {error && <ErrorMessage>{error.detail}</ErrorMessage>}

            <ShowPasswordWrapper>
                <input
                    type='checkbox'
                    onClick={() => setShowPassword(!showPassword)}
                />
                {showPassword ? 'Hide Password' : 'Show Password'}
            </ShowPasswordWrapper>
            <BaseButton onClick={login}>Login</BaseButton>
            <LinkBase to='/password-reset'>Forgot your password?</LinkBase>
        </LoginForm>
    </AuthenticationContainer>
})

const mapStateToProps = ({errorReducer: {error}}) => ({
    error
})

export default withRouter(connect(mapStateToProps)(Login))


