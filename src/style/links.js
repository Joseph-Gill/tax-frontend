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
