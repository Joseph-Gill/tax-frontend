import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextRed, OverdueTaskNumber} from './styles'


const TasksOverdue = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <OverdueTaskNumber>{number}</OverdueTaskNumber>
            <HomeGroupTextRed>Tasks Overdue</HomeGroupTextRed>
        </GroupCommentTaskContainer>
    )
}

export default TasksOverdue
