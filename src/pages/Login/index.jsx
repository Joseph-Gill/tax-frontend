import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {useHistory} from 'react-router-dom'
import {Title} from '../../style/titles'
import {ErrorMessage} from '../../style/messages'
import {useResetErrors} from '../../hooks'
import {userLoginAction} from '../../store/user/actions/authentication/userLoginAction'
import SignUpLink from '../../components/SignUpLink'
import {BasePageContainer, LoginLogoContainer} from '../../style/containers'
import {LoginForm} from '../../style/forms'
import {BaseInput} from '../../style/inputs'
import {HOME} from '../../routes/paths'
import PasswordLink from '../../components/PasswordLink'
import {LoginLogo} from '../../style/logos'
import {LogoPlaceholder} from '../../style'
import LoginFooter from '../../components/LoginFooter'
import {InputLabel} from '../../style/labels'


const Login = () => {
    let email = useRef('')
    let password = useRef('')
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
            <LoginForm>
                <LoginLogoContainer>
                    <LoginLogo alt="logo" src={LogoPlaceholder} />
                </LoginLogoContainer>
                <Title>Login</Title>
                <div>
                    <InputLabel>Email</InputLabel>
                    <BaseInput
                        name='email'
                        placeholder='Enter your email'
                        ref={email}
                        type='text'
                    />
                </div>
                <div>
                    <InputLabel>Password</InputLabel>
                    <BaseInput
                        name='password'
                        placeholder='Enter your password'
                        ref={password}
                        type='password'
                    />
                </div>
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                <BaseButton onClick={login}>Log In</BaseButton>
                <PasswordLink />
                <SignUpLink />
                <LoginFooter />
            </LoginForm>
        </BasePageContainer>
)
}

export default Login


