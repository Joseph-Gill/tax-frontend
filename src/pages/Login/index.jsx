import React, {useRef} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import SignUpLink from '../../components/SignUpLink'
import PasswordLink from '../../components/PasswordLink'
import LoginFooter from '../../components/LoginFooter'
import LoginLogo from '../../components/LoginLogo'
import {useResetErrors} from '../../hooks'
import {userLoginAction} from '../../store/user/actions/authentication/userLoginAction'
import {HOME} from '../../routes/paths'
import {BaseButton} from '../../style/buttons'
import {Title} from '../../style/titles'
import {ErrorMessage} from '../../style/messages'
import {BasePageContainer, ErrorMessageContainer} from '../../style/containers'
import {LoginForm} from '../../style/forms'
import {BaseInput} from '../../style/inputs'
import {ActiveInputLabel} from '../../style/labels'


const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    let email = useRef('')
    let password = useRef('')
    const error = useSelector(state => state.errorReducer.error)
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
                {/*<LoginLogoContainer>*/}
                {/*    <LoginLogo alt="logo" src={LogoPlaceholder} />*/}
                {/*</LoginLogoContainer>*/}
                <LoginLogo />
                <Title>Login</Title>
                <div>
                    <ActiveInputLabel>Email</ActiveInputLabel>
                    <BaseInput
                        name='email'
                        placeholder='Enter your email'
                        ref={email}
                        type='text'
                    />
                </div>
                <div>
                    <ActiveInputLabel>Password</ActiveInputLabel>
                    <BaseInput
                        name='password'
                        placeholder='Enter your password'
                        ref={password}
                        type='password'
                    />
                </div>
                <ErrorMessageContainer>
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                </ErrorMessageContainer>
                <BaseButton onClick={login}>Log In</BaseButton>
                <PasswordLink />
                <SignUpLink />
                <LoginFooter />
            </LoginForm>
        </BasePageContainer>
    )
}

export default Login
