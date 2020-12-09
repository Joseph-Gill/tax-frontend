import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../../style/titles'
import {TableContainer} from '../../../style/containers'
import {BaseInput} from '../../../style/inputs'


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
    max-height: 338px;
`

export const TableFooterInputContainer = styled.td`
    width: 100%;
    border: 1px solid ${props => props.theme.grayFour};
`

export const EntityTitleRow = styled.tr`
    height: 48px;
`

export const NameTableInput = styled(BaseInput)`
    width: 140px;
    height: 34px;
    font-size: 10px;
    line-height: 16px;
    margin: 17px 10px;

    ::placeholder {
        font-size: 10px;
        line-height: 16px;
    }
`

export const TaxRateTableInput = styled(NameTableInput)`
    width: 186px;
`

export const EntityLegalFormSelect = styled.select`
    width: 157px;
    height: 34px;
    margin: 17px 10px;
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;
    color: ${props => props.theme.grayOne};

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

export const EntityParentSelect = styled(EntityLegalFormSelect)`
    width: 98px;
`

export const EntityOption = styled.option`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;
    color: ${props => props.theme.grayOne};
`

export const EntitiesTable = styled.table`
    border-collapse: collapse;
`

export const EntitiesTableHeader = styled.thead`
    border-left: 1px solid ${props => props.theme.grayFour};
`
