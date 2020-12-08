import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../style/titles'


export const GroupDisplayContainer = styled.div`
    Width: 860px;
    background: ${props => props.theme.white};
    padding: 10px 20px 16px 20px;
    margin-top: 20px;
    margin-bottom: 87px;
    box-shadow: ${props => props.theme.boxShadow};
`

export const GroupGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 26px;
    grid-row-gap: 16px;
`

export const GroupsSectionTile = styled(AuthenticatedPageSectionTitle)`
    margin-top: 0;
    margin-bottom: 12px;
`
