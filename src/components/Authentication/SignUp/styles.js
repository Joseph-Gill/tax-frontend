import styled from 'styled-components/macro';
import {BaseButton} from "../../../style/buttons";


export const SignUpContainer = styled.div`
  height: 50px;
  width: 320px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 15px;
`;

export const SignUpButton = styled(BaseButton)`
  background: none;
  border:${props => props.theme.accentColor} solid 2px;
  color: ${props => props.theme.accentColor};
  font-weight: bold;
    
    :hover {
      background: ${props => props.theme.accentColor};;
      border:${props => props.theme.accentColor} solid 2px;
      color: white;
    }
    
`;
