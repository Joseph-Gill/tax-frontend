import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const LinkBase = styled(Link)`
    cursor: pointer;
    padding-left: 10px;
    text-decoration: none;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 700;
    color: ${props => props.theme.primaryBlue};

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
    text-decoration: none;
`

export const FooterSpan = styled.span`
    cursor: pointer;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    text-decoration: none;
`

export const LogOutLink = styled(Link)`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 800;
    text-decoration: none;
    color: ${props => props.theme.primaryShadeOne};
    margin-left: 5px;
    animation: fadein 1s;
    -moz-animation: fadein 1s; /* Firefox */
    -webkit-animation: fadein 1s; /* Safari and Chrome */
    -o-animation: fadein 1s; /* Opera */

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }

    :hover {
        text-decoration: underline;
    }
`

export const TaskDocumentLink = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.primaryBlue};
    text-decoration: none;

    :hover {
        transition: 167ms;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const LandingDisplayCardLink = styled(Link)`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 16px;
    color: ${props => props.theme.primaryBlue};
    margin-top: 8px;
`
