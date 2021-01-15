import styled from 'styled-components/macro'
import {BaseInput} from '../../../style/inputs'


export const TableFooterInputContainer = styled.td`
    width: 100%;
    border: 1px solid ${props => props.theme.grayFour};
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

export const TaxRateTableInput = styled(NameTableInput)`
    width: 186px;
`
