import styled from 'styled-components/macro';
import {BaseInput} from "../../../style/inputs";
import {FormWrapper} from "../../../style/wrappers";


export const ResetPasswordForm = styled(FormWrapper)`
  position: absolute;
  background: white;
  height: 100%;
  border-radius: 10px;
  padding: 45px 20px 20px 20px;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ResetPasswordInput = styled(BaseInput)`
  width: 75%;
  :hover,
  :active,
  :focus {
    width: 78%;
  }
`;
