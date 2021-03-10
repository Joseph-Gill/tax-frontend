import styled from 'styled-components/macro'
import {DropdownContent, DropdownContentContainer} from '../../style/dropdowns'
import dropdownArrowDown from '../../assets/icons/stark_dropdown_arrow_gray_downward.svg'
import dropdownArrowUpward from '../../assets/icons/stark_dropdown_arrow_gray_upwards.svg'
import {BaseInput} from '../../style/inputs'


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
    height: 34px;
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

export const ModalDropdownButton = styled.button`
    width: 302px;
    height: 42px;
    margin: 0;
    padding-left: 20px;
    background: url(${dropdownArrowDown}) no-repeat right, ${props => props.theme.graySix};
    background-position-x: 92%;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: start;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 167ms;
    }

    :focus {
        outline: none;
        transition: 167ms;
        background: url(${dropdownArrowUpward}) no-repeat right, ${props => props.theme.graySix};
        background-position-x: 92%;
    }

    :disabled {
        background-color: ${props => props.theme.grayFour};
        border: 1px solid ${props => props.theme.grayThree};
    }
`

export const ModalDropdownContent = styled.div`
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12px;
    cursor: pointer;
    z-index: 2;

    :hover {
        text-decoration: underline;
        background-color: ${props => props.theme.grayFive};
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 10px;
        line-height: 16px;
    }
`

export const ModalDropdownContentContainer = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    border-top-right-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    position: absolute;
    margin-top: 2px;
    background-color: ${props => props.theme.white};
    width: 302px;
    max-height: 304px;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 2;

    ${ModalDropdownContent}:first-child {
        border-top-right-radius: ${props => props.theme.borderRadius};
    }

    ${ModalDropdownContent}:last-child {
        border-bottom-right-radius: ${props => props.theme.borderRadius};
        border-bottom-left-radius: ${props => props.theme.borderRadius};
    }
`

export const ModalDropdownSearchContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 302px;
    height: 36px;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    background-color: ${props => props.theme.white};

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
    }
`

export const ModalDropdownSearchInput = styled(BaseInput)`
    width: 202px;
    height: 34px;
    border: none;
    background: ${props => props.theme.white};
    padding: 10px 0 10px 5px;

    :hover {
        filter: none;
    }

    :focus {
        border: none;
    }
`
