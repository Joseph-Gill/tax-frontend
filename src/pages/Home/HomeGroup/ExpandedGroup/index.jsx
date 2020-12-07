import React from 'react'
import {AuthenticatedText} from '../../../../style/text'
import {AccountInfoContainer, CommentsContainer, DateText, ExpandedGroupContainer, GroupSectionTitle, NextStepContainer, TaskButtonContainer, TaskContainer, TaskTableButton} from './styles'
import PendingComments from './PendingComments'
import PendingTasks from './UpcomingTasks'
import {TableButton} from '../../../../style/buttons'


const ExpandedGroup = ({group}) => {

    return (
        <ExpandedGroupContainer>
            <NextStepContainer>
                <GroupSectionTitle>Account Information</GroupSectionTitle>
                <AccountInfoContainer>
                    <AuthenticatedText>Step 10: Contribution of x to c - </AuthenticatedText>
                    <DateText>10 October 2020</DateText>
                    <TableButton>Go to Step</TableButton>
                </AccountInfoContainer>
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
