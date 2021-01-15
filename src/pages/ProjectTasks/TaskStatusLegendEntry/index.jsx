import React from 'react'
import {StatusEntryContainer} from '../../../style/containers'
import {StatusEntryText} from '../../../style/text'
import {TaskStatusEntryColor} from './styles'


const TaskStatusLegendEntry = ({status}) => {
    return (
        <StatusEntryContainer>
            <TaskStatusEntryColor status={status} />
            <StatusEntryText>{status}</StatusEntryText>
        </StatusEntryContainer>
    )
}

export default TaskStatusLegendEntry
