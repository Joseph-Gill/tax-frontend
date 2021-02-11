import styled from 'styled-components/macro'
import {FilterSearchInput} from '../../../style/dropdowns'


export const TasksFilterSearchContainer = styled.div`
    width: 400px;
    height: 36px;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    background: ${props => props.theme.white};

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
    }
`

export const TaskFilterSearchInput = styled(FilterSearchInput)`
    width: 160px;
`
