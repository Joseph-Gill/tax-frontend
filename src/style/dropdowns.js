import styled from 'styled-components/macro'
import arrow from '../assets/icons/stark_dropdown_arrow.svg'


export const FilterDropDown = styled.select`
    width: 170px;
    height: 34px;
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: ${props => props.theme.borderRadius};
    background: url(${arrow}) no-repeat right;
    -webkit-appearance: none;
    background-position-x: 146px;
`
