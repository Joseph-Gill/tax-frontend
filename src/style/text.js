import styled from 'styled-components/macro'


export const AuthenticatedText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    font-style: normal;
    font-weight: normal;
    color: ${props => props.theme.grayOne};
`

export const ModalText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.grayOne};
`

export const HomePageText = styled.p`
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.grayTwo};
`

export const HomeGroupText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
`

export const CardTitleText = styled(HomePageText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
    margin-top: 16px;
`

export const CardInfoText = styled(HomeGroupText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
`

export const StatusText = styled(CardInfoText)`
    color: ${props => props.theme.white};
    font-weight: 800;
`

export const DefaultDropdownText = styled.label`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: ${props => props.theme.grayOne};
    margin-left: 10px;

    :hover {
        transition: 167ms;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const RedDropdownText = styled(DefaultDropdownText)`
    color: ${props => props.theme.red};
`

export const BlueDropdownText = styled(DefaultDropdownText)`
    color: ${props => props.theme.primaryBlue};
`

export const NoFilterResultText = styled(CardInfoText)`
    color: ${props => props.theme.grayTwo}
`

export const StatusEntryText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.grayTwo};
`

export const DateInputLabelText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: ${props => props.theme.grayOne};
    margin-right: 10px;
`

export const TooltipRowText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    color: ${props => props.theme.grayOne};
    margin-left: 13px;
`

export const DocumentUploadAreaText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`

export const EntryResponsibleText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.taskResponsibleText};
`

export const DateText = styled(ModalText)`
    color: ${props => props.theme.grayTwo};
    line-height: 19px;
`

export const NoTasksOrTaxConsequencesText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`

export const CardDescriptionText = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};

    ul, li {
        list-style-position: inside;
    }
`

export const MenuItemText = styled.span`
    font-size: 14px;
    font-weight: 600;
    font-family: ${props => props.theme.nunitoFontFamily};
    line-height: 19px;
    text-decoration: none;
    color: ${props => props.theme.primaryShadeOne};
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
`
