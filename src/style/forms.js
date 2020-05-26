import styled from 'styled-components/macro'

export const FormBase = styled.form`
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,0.66);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: -6px 8px 21px -4px rgba(142,142,142,0.73);
    position: relative;
    color: black;
`

export const LoginForm = styled(FormBase)``
export const RegistrationForm = styled(FormBase)``
export const ResetPasswordForm = styled(FormBase)``
export const PasswordResetValidationForm = styled(FormBase)`
    
`
export const RegistrationValidationForm = styled(FormBase)`
  height: 600px;
`