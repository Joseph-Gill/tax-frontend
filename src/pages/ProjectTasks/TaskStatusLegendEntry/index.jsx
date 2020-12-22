import React from 'react'
import {TaskStatusEntryColor} from './styles'
import {StatusEntryContainer} from '../../../style/containers'
import {StatusEntryText} from '../../../style/text'


const TaskStatusLegendEntry = ({status}) => {
    return (
        <StatusEntryContainer>
            <TaskStatusEntryColor status={status} />
            <StatusEntryText>{status}</StatusEntryText>
        </StatusEntryContainer>
    )
}

export default TaskStatusLegendEntry
