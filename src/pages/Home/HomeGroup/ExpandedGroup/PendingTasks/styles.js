import styled from 'styled-components/macro'
import {TableDataRow} from '../../../../../style/tables'


export const NoTasksDisplay = styled.div`
    width: 100%;
    height: 115px;
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NoTasksText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`

export const PendingTaskTableRow = styled(TableDataRow)`
    ${props => {
        if (props.pastDue) {
            return `background: ${props.theme.redLight};`
            }
        }
    }
`
