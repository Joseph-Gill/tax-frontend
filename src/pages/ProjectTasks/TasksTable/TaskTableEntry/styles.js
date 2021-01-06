import styled from 'styled-components/macro'
import {TableDataRow, TableHeader} from '../../../../style/tables'


export const TaskTableEntryContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TaskTableEntryExpandedContainer = styled.div`
    width: 860px;
    height: 219px;
    background: ${props => props.theme.graySix};
`

export const TaskStatusColorIndicator = styled.div`
    width: 11px;
    height: 11px;
    border-radius: 50%;

    ${props => {
        if (props.status === 'Ongoing / Planned') {
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

export const TaskStatusDisplayContainer = styled(TableHeader)`
    height: 67px;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TaskTableRow = styled(TableDataRow)`
    height: 67px;
`
