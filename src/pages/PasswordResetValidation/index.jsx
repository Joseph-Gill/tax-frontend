import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SignUpLink from "../../components/SignUpLink"
import SuccessMessage from "../../components/SuccessMessage"
import PasswordLink from '../../components/PasswordLink'
import LoginFooter from '../../components/LoginFooter'
import { useUrlQueryParams, useResetErrors } from "../../hooks"
import { restPasswordValidate } from "../../store/user/actions/authentication/resetPasswordAction"
import {LOGIN} from '../../routes/paths'
import { Title } from "../../style/titles"
import {LoginLogo} from '../../style/logos'
import { BaseInput } from "../../style/inputs"
import { BaseButton } from "../../style/buttons"
import {ActiveInputLabel} from '../../style/labels'
import { ErrorMessage } from "../../style/messages"
import {PasswordResetValidationForm} from '../../style/forms'
import {LogoPlaceholder} from '../../style'
import {BasePageContainer, ErrorMessageContainer, LoginLogoContainer} from '../../style/containers'


const PasswordResetValidation = () => {
    const dispatch = useDispatch()
    const email = useUrlQueryParams("email")
    const code = useUrlQueryParams("code")
    let password = useRef("")
    let password_repeat = useRef("")
    const error = useSelector(state => state.errorReducer.error)
    const [showSuccess, setShowSuccess] = useState(false)

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
                    <ActiveInputLabel>Password</ActiveInputLabel>
                    <BaseInput
                        name='password'
                        placeholder='Set a new password'
                        ref={password}
                        type='password'
                    />
                </div>
                <ErrorMessageContainer>
                    {error && <ErrorMessage>{error.password}</ErrorMessage>}
                </ErrorMessageContainer>
                <div>
                    <ActiveInputLabel>Password</ActiveInputLabel>
                    <BaseInput
                        name='password_repeat'
                        placeholder='Retype new password'
                        ref={password_repeat}
                        type='password'
                    />
                </div>
                <ErrorMessageContainer>
                    {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                    {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                </ErrorMessageContainer>
                <BaseButton onClick={register}>Reset Password</BaseButton>
                <PasswordLink />
                <SignUpLink />
                <LoginFooter />
            </PasswordResetValidationForm>
        </BasePageContainer>
    )
}

export default PasswordResetValidation
