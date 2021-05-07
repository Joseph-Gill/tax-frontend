import styled from 'styled-components/macro'


export const FormBase = styled.form`
    position: relative;
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 48px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
`
export const LoginForm = styled(FormBase)`
    height: 400px;
`

export const RegistrationForm = styled(FormBase)`
    height: 325px;
`

export const ResetPasswordForm = styled(FormBase)`
    height: 355px;
`

export const PasswordResetValidationForm = styled(FormBase)`
    height: 427px;
`

export const RegistrationValidationForm = styled(FormBase)`
    height: 500px;
    justify-content: space-between;
`
