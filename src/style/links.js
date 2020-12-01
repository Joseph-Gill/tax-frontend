import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const LinkBase = styled(Link)`
    cursor: pointer;
    padding-left: 10px;
    text-decoration: none;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 700;
    color: ${props => props.theme.accentColor};

    :hover {
      font-weight: bold;
      color: dodgerblue;
    }
`

export const FooterLink = styled(Link)`
    cursor: pointer;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: ${props => props.theme.footerFontColor};
    text-decoration: none;
`

export const LogOutLink = styled(Link)`
  font-family: ${props => props.theme.nunitoFontFamily};
  text-decoration: none;
  color: ${props => props.theme.navigationBarInactiveColor};
`
