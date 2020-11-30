import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ErrorMessage } from "../../style/messages"
import { BaseButton } from "../../style/buttons"
import { Title } from "../../style/titles"
import {LinkBase} from '../../style/links'
import { useUrlQueryParams, useResetErrors } from "../../hooks"
import { restPasswordValidate } from "../../store/user/actions/authentication/resetPasswordAction"
import { BasePageContainer } from "../../style/containers"
import { PasswordResetValidationForm } from "../../style/forms"
import SignUpLink from "../../components/SignUpLink"
import SuccessMessage from "../../components/SuccessMessage"
import { BaseInput } from "../../style/inputs"
import {LOGIN} from '../../routes/paths'

const PasswordResetValidation = () => {
    const email = useUrlQueryParams("email")
    const code = useUrlQueryParams("code")
    let password = useRef("")
    let password_repeat = useRef("")
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
        if (data) setShowSuccess(!showSuccess)
    }

    return (
        <BasePageContainer>
            <SignUpLink />
            <PasswordResetValidationForm>
                {showSuccess && (
                    <SuccessMessage
                        message="Your Password has been updated successfully!"
                        redirect={LOGIN}
                    />
                )}
                <Title>Create New Password</Title>
                <BaseInput
                    name="password"
                    placeholder="password"
                    ref={password}
                    type={showHidePassword ? "text" : "password"}
                />
                {error && <ErrorMessage>{error.password}</ErrorMessage>}

                <BaseInput
                    name="password_repeat"
                    placeholder="password repeat"
                    ref={password_repeat}
                    type={showHidePassword ? "text" : "password"}
                />
                {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                <input
                    onClick={() => setShowHidePassword(!showHidePassword)}
                    type="checkbox"
                />
                {showHidePassword ? "Hide Passwords" : "Show Passwords"}
                <BaseButton onClick={register}>Reset Password</BaseButton>
                <LinkBase to={LOGIN}>Know your password? Login here!</LinkBase>
            </PasswordResetValidationForm>
        </BasePageContainer>
    )
}

export default PasswordResetValidation
