import styled from 'styled-components/macro';
import {CredentialsWrapper, FormWrapper} from "../../../style/wrappers";
import {BaseInput} from "../../../style/inputs";


export const ValidationFormWrapper = styled(FormWrapper)`
     height: 90%;
     width: 90%;
`;

export const ValidationContainer = styled(CredentialsWrapper)`
    width: 450px;
    background: white;
`;

export const LoginLink = styled.p`
    font-size: 12px;
    bottom: 25px;
    right: 20px;
    color: rgba(0,0,0,0.85);
    text-decoration: none;
`;

export const ValidationInput = styled(BaseInput)`
   width: 75%;
  :hover,
  :active,
  :focus {
    width: 78%;
  }

`;
