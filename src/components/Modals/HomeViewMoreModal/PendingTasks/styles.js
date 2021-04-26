import styled from 'styled-components/macro'
import {TableData, TableDataRow, TableHeader} from '../../../../style/tables'


export const PendingTaskTableRow = styled(TableDataRow)`
    ${props => {
        if (props.pastDue) {
            return `background: ${props.theme.redLight};`
            }
        }
    }
`

export const PendingTaskTitleTableData = styled(TableData)`
    max-width: 180px;
`

export const PendingTaskCompleteDateTableHeader = styled(TableHeader)`
    max-width: 117px;
`
