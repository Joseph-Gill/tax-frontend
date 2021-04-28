import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextRed, OverdueTaskNumber} from './styles'


const OverdueTasks = ({number, setShowViewMoreModal}) => {
    return (
        <GroupCommentTaskContainer onClick={() => setShowViewMoreModal(true)}>
            <HomeGroupTextRed>Tasks Overdue</HomeGroupTextRed>
            <OverdueTaskNumber>{number}</OverdueTaskNumber>
        </GroupCommentTaskContainer>
    )
}

export default OverdueTasks
