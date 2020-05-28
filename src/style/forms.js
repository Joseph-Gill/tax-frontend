import styled from 'styled-components/macro'


export const FormBase = styled.form`
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,0.66);
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: ${props => props.theme.boxShadow};
`
export const LoginForm = styled(FormBase)``
export const RegistrationForm = styled(FormBase)``
export const ResetPasswordForm = styled(FormBase)``
export const PasswordResetValidationForm = styled(FormBase)``
export const EditProfileForm = styled(FormBase)`
  background: white;
  height: 500px;
  width: 500px;
`
export const RegistrationValidationForm = styled(FormBase)`
  height: 600px;
`