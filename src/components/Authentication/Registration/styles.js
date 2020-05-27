import styled from 'styled-components/macro';
import {BaseInput} from "../../../style/inputs";

export const ErrorMessage = styled.span`
    font-size: 14px;
    color: ${props => props.theme.colorFail};
    position: absolute;
    top: 60%;
`;

export const RegistrationInput = styled(BaseInput)`
   width: 75%;
  :hover,
  :active,
  :focus {
    width: 78%;
  }

`;


export const CheckboxWrapper = styled.div`
  font-size: 12px;
  width: 100%;
`;

export const TermsAndConditionsWrapper = styled.div`
  margin-top: 10px;
  width: 75%;
  color: rgba(0,0,0,0.82);
  font-size: 12px;
  height: 25%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  flex-direction: column;
    label {
    color: ${props => props.theme.accentColor};
    cursor: pointer;
    :hover {
        text-decoration: underline;
        color: #c47010;
    }
 
`;

export const CheckboxInput = styled.input`

`;
