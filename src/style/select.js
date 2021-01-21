import styled from 'styled-components/macro'
import dropdownArrowDown from '../assets/icons/stark_dropdown_arrow_gray_downward.svg'
import dropdownArrowUpward from '../assets/icons/stark_dropdown_arrow_gray_upwards.svg'


export const EntityLegalFormSelect = styled.select`
    width: ${props => props.callingComponent === 'AddEntityModal' ? '302px' : '157px'};
    height: ${props => props.callingComponent === 'AddEntityModal' ? '42px' : '34px'};
    margin: ${props => props.callingComponent === 'AddEntityModal' ? '0' : '17px 10px'};
    padding-left: ${props => props.callingComponent === 'AddEntityModal' ? '7px' : '12px'};
    background: url(${dropdownArrowDown}) no-repeat right, ${props => props.theme.graySix};
    background-position-x: 92%;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: ${props => props.callingComponent === 'AddEntityModal' ? '14px' : '10px'};
    line-height: ${props => props.callingComponent === 'AddEntityModal' ? '19px' : '16px'};
    color: ${props => props.theme.grayOne};
    /* for Firefox */
    -moz-appearance: none;
    /* for Safari, Chrome, Opera */
    -webkit-appearance: none;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 167ms;
    }

    :focus {
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 167ms;
        background: url(${dropdownArrowUpward}) no-repeat right, ${props => props.theme.graySix};
        background-position-x: 92%;
    }
`

export const EntityParentSelect = styled(EntityLegalFormSelect)`
    width: ${props => props.callingComponent === 'AddEntityModal' ? '302px' : '98px'};
`
