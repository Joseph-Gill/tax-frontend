import styled from 'styled-components/macro'
import {TableHeader} from '../../../style/tables'

export const TaskStatusTableHeader = styled(TableHeader)`
    width: 43px;
`

export const NoFilteredTasksContainer = styled.div`
    width: 860px;
    height: 202px;
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`
