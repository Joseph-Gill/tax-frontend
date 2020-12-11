import styled from 'styled-components/macro'
import arrow from '../assets/icons/stark_dropdown_arrow_blue.svg'
import dropdownArrow from '../assets/icons/stark_dropdown_arrow_grey.png'


export const FilterDropDown = styled.select`
    width: 170px;
    height: 34px;
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: ${props => props.theme.borderRadius};
    background: url(${arrow}) no-repeat right;
    -webkit-appearance: none;
    background-position-x: 146px;
`

export const StatusDropdown = styled.select`
    width: 302px;
    height: 42px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    font-size: 14px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    color: ${props => props.theme.grayOne};
    background: url(${dropdownArrow}) no-repeat right;
    padding-left: 13px;
    -webkit-appearance: none;
    background-position-x: 278px;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 0.5s;
    }

    :focus {
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 1s;
    }
`
