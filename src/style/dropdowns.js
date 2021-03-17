import styled from 'styled-components/macro'
import arrow from '../assets/icons/stark_dropdown_arrow_blue.svg'
import dropdownArrowDownward from '../assets/icons/stark_dropdown_arrow_blue_downward.svg'
import dropdownArrowUpward from '../assets/icons/stark_dropdown_arrow_blue_upwards.svg'
import dropdownArrowDownwardGray from '../assets/icons/stark_dropdown_arrow_gray_downward.svg'
import dropdownArrowUpwardGray from '../assets/icons/stark_dropdown_arrow_gray_upwards.svg'
import filterImage from '../assets/icons/stark_filter.svg'
import actionImage from '../assets/icons/stark_action.svg'
import {BaseInput} from './inputs'


export const StatusDropdown = styled.select`
    width: 302px;
    height: 42px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    font-size: 14px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    color: ${props => props.theme.grayOne};
    background: url(${dropdownArrowDownwardGray}) no-repeat right;
    padding-left: 13px;
    -webkit-appearance: none;
    background-position-x: 92%;

    :disabled {
        background-color: ${props => props.theme.grayFour};
        border: 1px solid ${props => props.theme.grayThree};
    }

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 167ms;
    }

    :focus {
        background: url(${dropdownArrowUpwardGray}) no-repeat right;
        background-position-x: 92%;
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 167ms;
    }
`

export const DropdownOptions = styled.div`
    display: none;
    position: absolute;
    min-width: 170px;
    box-shadow: ${props => props.theme.boxShadow};
    z-index: 1;
    padding-top: 5px;
    background: ${props => props.theme.grayFive};
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s; /* Firefox */
    -webkit-animation: fadein 0.5s; /* Safari and Chrome */
    -o-animation: fadein 0.5s; /* Opera */

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

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 30px;

    :hover {
        ${DropdownOptions} {
            display: block;
        }
    }
`

export const DropdownButton = styled.button`
    width: 170px;
    height: 34px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.buttonBorderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.primaryBlue};
    padding: 0 14px 0 12px;
    font-size: 14px;
    border: 1px solid ${props => props.theme.primaryBlue};
    background-image: url(${actionImage}), url(${arrow});
    background-position: 6%, 94%;
    background-repeat: no-repeat;

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

export const FilterDropdownButton = styled(DropdownButton)`
    background-image: url(${filterImage}), url(${arrow});
`

export const TaskStepFilterSelect = styled(StatusDropdown)`
    width: 110px;
    height: 34px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.buttonBorderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.primaryBlue};
    font-size: 14px;
    border: 1px solid ${props => props.theme.primaryBlue};
    background-image: url(${dropdownArrowDownward});
    background-position: 92%;
    background-repeat: no-repeat;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 167ms;
    }

    :focus {
        transition: 167ms;
        outline: none;
        background: url(${dropdownArrowUpward}) no-repeat right, ${props => props.theme.graySix};
        background-position-x: 92%;
    }
`

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`

export const DropdownContent = styled.div`
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    cursor: pointer;

    :hover {
        text-decoration: underline;
        background-color: ${props => props.theme.grayFive};
    }
`

export const DropdownContentContainer = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    border-top-right-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    position: absolute;
    margin-top: 2px;
    background-color: ${props => props.theme.white};
    width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;

    ${DropdownContent}:first-child {
        border-top-right-radius: ${props => props.theme.borderRadius};
    }

    ${DropdownContent}:last-child {
        border-bottom-right-radius: ${props => props.theme.borderRadius};
        border-bottom-left-radius: ${props => props.theme.borderRadius};
    }
`

export const FilterSearchButton = styled.div`
    width: 70px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: ${props => props.theme.inputBorderRadius};
    border-bottom-left-radius: ${props => props.theme.inputBorderRadius};
    background: ${props => props.theme.primaryBlue};
    color: ${props => props.theme.white};

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const FilterSearchText = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.white};
`

export const FilterLabelText = styled(FilterSearchText)`
    font-size: 10px;
`

export const FilterSelectionContainer = styled.div`
    width: 75px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    background: ${props => props.theme.grayThree};
    border-radius: ${props => props.theme.buttonBorderRadius};
`

export const FilterSearchInput = styled(BaseInput)`
    width: 260px;
    height: 34px;
    border: none;
    background: ${props => props.theme.white};
    padding: 10px 0 10px 10px;

    :hover {
        filter: none;
    }

    :focus {
        border: none;
    }
`

export const FilterDropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`

export const FilterDropdownContentContainer = styled(DropdownContentContainer)`
    width: 180px;
`
