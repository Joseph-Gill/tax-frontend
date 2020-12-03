import styled from 'styled-components/macro'


export const FormBase = styled.form`
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,0.66);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 600px;
    align-items: center;
`
export const LoginForm = styled(FormBase)``
export const RegistrationForm = styled(FormBase)`
    height: 287px;
`
export const ResetPasswordForm = styled(FormBase)`
    height: 287px;
`
export const PasswordResetValidationForm = styled(FormBase)`
    height: 350px;
`
export const EditProfileForm = styled(FormBase)`
  background: white;
  height: 500px;
  width: 500px;
`
export const RegistrationValidationForm = styled(FormBase)`
  height: 500px;
`
