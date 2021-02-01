import styled from 'styled-components/macro'
import {TableContainer} from '../../style/containers'


export const EntityTableContainer = styled(TableContainer)`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: 0;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 0;
    min-height: 0;
    max-height: 271.6px;
`

export const EntitiesTable = styled.table`
    border-collapse: collapse;
`

export const EntitiesTableHeader = styled.thead`
    border-left: 1px solid ${props => props.theme.grayFour};
`
