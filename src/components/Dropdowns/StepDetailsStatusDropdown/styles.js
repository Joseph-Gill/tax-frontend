import styled from 'styled-components/macro'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../styles'
import dropdownArrowDown from '../../../assets/icons/stark_dropdown_arrow_gray_downward.svg'
import dropdownArrowUpward from '../../../assets/icons/stark_dropdown_arrow_gray_upwards.svg'


export const StepStatusDropdownButton = styled(ModalDropdownButton)`
    height: 26px;
    width: 107px;
    margin: 0 0 0 20px;
    padding-left: 15px;
    font-size: 12px;
    line-height: 16px;
    background: url(${dropdownArrowUpward}) no-repeat right, ${props => props.theme.white};
    background-position-x: 92%;

    :focus {
        outline: none;
        transition: 167ms;
        background: url(${dropdownArrowDown}) no-repeat right, ${props => props.theme.white};
        background-position-x: 92%;
`

export const StepStatusDropdownContentContainer = styled(ModalDropdownContentContainer)`
    margin-left: 20px;
    width: 107px;
`
