import styled from 'styled-components/macro';
import {FormWrapper} from "../../../style/wrappers";
import {BaseInput} from "../../../style/inputs";


export const PasswordValidationForm = styled(FormWrapper)`
  position: absolute;
  background: white;
  height: 100%;
  border-radius: 10px;
  justify-content: space-around;
  padding: 20px;
  z-index: 2;
  top : 0;
  left: 0;
  right: 0;
  bottom: 0;
  
`;

export const ResetPasswordValidationInput = styled(BaseInput)`
  width: 75%;
  :hover,
  :active,
  :focus {
    width: 78%;
  }
`;
