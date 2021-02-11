import styled from 'styled-components/macro'
import {DropdownContent, DropdownContentContainer} from '../../style/dropdowns'


export const DropdownContentImgContainer = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.grayTwo};
    border-radius: 100%;

    :hover {
        transition: 167ms;
        border: 3px solid ${props => props.theme.grayTwo};
    }
`

export const DropdownButtonContainer = styled.div`
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;

    :hover {
        transition: 167ms;
        background: ${props => props.theme.iconHoverBackground};
    }

    :focus {
        background: ${props => props.theme.iconHoverBackground};
    }
`

export const DropdownContentText = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    color: ${props => props.theme.grayOne};
`

export const GoToButtonContainer = styled.div`
    width: 110px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${props => props.theme.buttonBorderRadius};
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;

    :hover {
        text-decoration: underline;
        transition: 167ms;
    }

    span {
        color: ${props => props.theme.primaryBlue};
        margin-left: 20px;
    }
`

export const GoToIconContainer = styled.div`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    :hover {
        background-color: ${props => props.theme.iconHoverBackground};
    }
`

export const GoToContentContainer = styled(DropdownContentContainer)`
    width: 140px;
    max-height: 320px;
    overflow: auto;
    overflow-x: hidden;
`

export const GoToDropdownContent = styled(DropdownContent)`
    height: 45px;
`
