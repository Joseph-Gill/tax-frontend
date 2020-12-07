import React from 'react'
import {AuthenticatedText} from '../../../../style/text'
import {CommentsContainer, DateText, ExpandedGroupContainer, GroupSectionTitle, NextStepContainer, TaskContainer} from './styles'
import PendingComments from './PendingComments'
import PendingTasks from './UpcomingTasks'
import styled from 'styled-components/macro'
import {TableButton} from '../../../../style/buttons'

const TaskButtonContainer = styled.div`
    width: 774px;
    display: flex;
    justify-content: flex-end;
`

const TaskTableButton = styled(TableButton)`
    width: 115px;
    height: 26px;

`

const ExpandedGroup = ({group}) => {

    return (
        <ExpandedGroupContainer>
            <NextStepContainer>
                <GroupSectionTitle>Account Information</GroupSectionTitle>
                <div>
                    <AuthenticatedText>Step 10: Contribution of x to c - </AuthenticatedText>
                    <DateText>10 October 2020</DateText>
                    <TableButton>Go to Step</TableButton>
                </div>
            </NextStepContainer>
            <CommentsContainer>
                <GroupSectionTitle>Pending Comments</GroupSectionTitle>
                <PendingComments />
            </CommentsContainer>
            <TaskContainer>
                <GroupSectionTitle>Upcoming Tasks</GroupSectionTitle>
                <PendingTasks />
                <TaskButtonContainer>
                    <TaskTableButton>Go to tasklist</TaskTableButton>
                </TaskButtonContainer>
            </TaskContainer>
        </ExpandedGroupContainer>
    )
}

export default ExpandedGroup
