import styled from 'styled-components/macro'
import arrow from '../assets/icons/stark_dropdown_arrow_blue.svg'
import dropdownArrow from '../assets/icons/stark_dropdown_arrow_grey.png'
import filterImage from '../assets/icons/stark_filter.svg'
import actionImage from '../assets/icons/stark_action.svg'


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

export const DropdownOptions = styled.div`
    display: none;
    position: absolute;
    background: ${props => props.theme.white};
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
    border-radius: ${props => props.theme.borderRadius};
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
