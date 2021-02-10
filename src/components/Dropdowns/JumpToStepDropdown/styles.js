import styled from 'styled-components/macro'
import {DropdownContentContainer} from '../../../style/dropdowns'


export const JumpToButtonContainer = styled.div`
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

export const JumpToIconContainer = styled.div`
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

export const JumpToStepContentContainer = styled(DropdownContentContainer)`
    width: 140px;
    max-height: 320px;
    overflow: auto;
    overflow-x: hidden;
`
