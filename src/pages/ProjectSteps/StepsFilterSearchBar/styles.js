import styled from 'styled-components/macro'
import {DropdownContentContainer} from '../../../style/dropdowns'


export const StepsFilterSearchContainer = styled.div`
    width: 500px;
    height: 36px;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    background: ${props => props.theme.white};
`

export const FilterDropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`

export const FilterDropdownContentContainer = styled(DropdownContentContainer)`
    width: 180px;
`
