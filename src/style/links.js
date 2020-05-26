import styled from 'styled-components/macro';
import {Link} from 'react-router-dom'

export const LinkBase = styled(Link)`
    font-size: 12px;
    bottom: 25px;
    right: 20px;
    color: rgba(0,0,0,0.85);
    text-decoration: none;
    cursor: pointer;
    
    :hover {
      font-size: 13px;
      color: rgb(0,0,0);
    }
`;


export const CredentialsLink = styled.p`
    font-size: 12px;
    align-self: flex-end;
    color: black;
    text-decoration: none;
    margin-right: 20px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
      color: #4252ff;
    }
`;
