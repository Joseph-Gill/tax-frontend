import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ErrorMessage } from "../../style/messages"
import { BaseButton } from "../../style/buttons"
import { Title } from "../../style/titles"
import { useUrlQueryParams, useResetErrors } from "../../hooks"
import { restPasswordValidate } from "../../store/user/actions/authentication/resetPasswordAction"
import {BasePageContainer, LoginLogoContainer} from '../../style/containers'
import {PasswordResetValidationForm} from '../../style/forms'
import SignUpLink from "../../components/SignUpLink"
import SuccessMessage from "../../components/SuccessMessage"
import { BaseInput } from "../../style/inputs"
import {LOGIN} from '../../routes/paths'
import {InputLabel} from '../../style/labels'
import PasswordLink from '../../components/PasswordLink'
import LoginFooter from '../../components/LoginFooter'
import {LoginLogo} from '../../style/logos'
import {LogoPlaceholder} from '../../style'


const PasswordResetValidation = () => {
    const email = useUrlQueryParams("email")
    const code = useUrlQueryParams("code")
    let password = useRef("")
    let password_repeat = useRef("")
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
        if (data) setShowSuccess(!showSuccess)
    }

    return (
        <BasePageContainer>
            <PasswordResetValidationForm>
                <LoginLogoContainer>
                    <LoginLogo alt="logo" src={LogoPlaceholder} />
                </LoginLogoContainer>
                {showSuccess && (
                    <SuccessMessage
                        message="Your Password has been updated successfully!"
                        redirect={LOGIN}
                    />
                )}
                <Title>Create New Password</Title>
                <div>
                    <InputLabel>Password</InputLabel>
                    <BaseInput
                        name='password'
                        placeholder='Set a new password'
                        ref={password}
                        type='password'
                    />
                </div>
                {error && <ErrorMessage>{error.password}</ErrorMessage>}
                <div>
                    <InputLabel>Password</InputLabel>
                    <BaseInput
                        name='password_repeat'
                        placeholder='Retype new password'
                        ref={password_repeat}
                        type='password'
                    />
                </div>
                {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                <BaseButton onClick={register}>Reset Password</BaseButton>
                <PasswordLink />
                <SignUpLink />
                <LoginFooter />
            </PasswordResetValidationForm>
        </BasePageContainer>
    )
}

export default PasswordResetValidation
