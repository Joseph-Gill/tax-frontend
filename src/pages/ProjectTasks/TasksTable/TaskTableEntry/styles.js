import styled from 'styled-components/macro'
import {TableData, TableDataRow} from '../../../../style/tables'


export const TaskStatusColorIndicator = styled.div`
    width: 11px;
    height: 11px;
    border-radius: 50%;

    ${props => {
        if (props.status === 'Ongoing' || props.status === 'Planned') {
            return `
                    background: ${props.theme.yellow};
                    `
            }
        }
    };

    ${props => {
        if (props.status === 'Completed') {
            return `
                    background: ${props.theme.green};
                    `
            }
        }
    };

    ${props => {
        if (props.status === 'Not Started') {
            return `
                    background: ${props.theme.red};
                    `
            }
        }
    };
`

export const TaskTableRow = styled(TableDataRow)`
    height: 67px;
`

export const TitleTableData = styled(TableData)`
    max-width: 198px;
`

export const DateTableData = styled(TableData)`
    width: 101px;
`
