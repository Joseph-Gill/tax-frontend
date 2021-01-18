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

export const TaxRateTableInput = styled(NameTableInput)`
    width: 186px;
`
