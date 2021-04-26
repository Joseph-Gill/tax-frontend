import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextRed, OverdueTaskNumber} from './styles'


const OverdueTasks = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <HomeGroupTextRed>Tasks Overdue</HomeGroupTextRed>
            <OverdueTaskNumber>{number}</OverdueTaskNumber>
        </GroupCommentTaskContainer>
    )
}

export default OverdueTasks
