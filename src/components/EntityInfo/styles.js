import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../style/titles'
import {TableContainer} from '../../style/containers'


export const EntityTitle = styled(AuthenticatedPageSectionTitle)`
    margin-top: 0;
    padding-left: 16px;
    padding-bottom: 10px;
`

export const EntityTableContainer = styled(TableContainer)`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: 0;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 10px;
    max-height: 250px;
`

export const EntitiesTable = styled.table`
    border-collapse: collapse;
`

export const EntitiesTableHeader = styled.thead`
    border-left: 1px solid ${props => props.theme.grayFour};
`
