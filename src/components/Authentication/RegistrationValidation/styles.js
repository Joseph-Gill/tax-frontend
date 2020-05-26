import styled from 'styled-components/macro';
import {CredentialsWrapper, FormWrapper} from "../../../style/wrappers";
import {BaseInput} from "../../../style/inputs";
import {Link} from 'react-router-dom'


export const ValidationFormWrapper = styled(FormWrapper)`
     height: 90%;
     width: 90%;
`;

export const ValidationContainer = styled(CredentialsWrapper)`
    width: 450px;
    background: white;
`;



export const ValidationInput = styled(BaseInput)`
   width: 75%;
  :hover,
  :active,
  :focus {
    width: 78%;
  }

`;
