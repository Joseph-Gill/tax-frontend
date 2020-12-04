import React from 'react'
import styled from 'styled-components/macro'
import {HomeGroupText} from '../../../../style/text'
import {GroupCommentTaskContainer, GroupCommentTaskNumberContainer} from '../../../../style/containers'


const HomeGroupTextRed = styled(HomeGroupText)`
  color: ${props => props.theme.redDark};
`

const OverdueTaskNumber = styled(GroupCommentTaskNumberContainer)`
  color: ${props => props.theme.redDark};
  background: ${props => props.theme.redLight};
`

const TasksOverdue = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <OverdueTaskNumber>{number}</OverdueTaskNumber>
            <HomeGroupTextRed>Tasks Overdue</HomeGroupTextRed>
        </GroupCommentTaskContainer>
    )
}

export default TasksOverdue
