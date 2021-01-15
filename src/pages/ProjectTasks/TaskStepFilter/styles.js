import styled from 'styled-components/macro'
import {StatusDropdown} from '../../../style/dropdowns'
import arrow from '../../../assets/icons/stark_dropdown_arrow_blue.svg'


export const TaskStepFilterSelect = styled(StatusDropdown)`
    width: 110px;
    height: 34px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.primaryBlue};
    font-size: 14px;
    border: 1px solid ${props => props.theme.primaryBlue};
    background-image: url(${arrow});
    background-position: 92%;
    background-repeat: no-repeat;
`
