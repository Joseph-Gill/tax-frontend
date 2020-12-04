import React from 'react'
import {AuthenticatedText} from '../../../../style/text'
import {CommentsContainer, DateText, ExpandedGroupContainer, GroupSectionTitle, NextStepContainer, TaskContainer} from './styles'
import PendingComments from './PendingComments'


const ExpandedGroup = ({group}) => {

    return (
        <ExpandedGroupContainer>
            <NextStepContainer>
                <GroupSectionTitle>Account Information</GroupSectionTitle>
                <div>
                    <AuthenticatedText>Step 10: Contribution of x to c - </AuthenticatedText>
                    <DateText>10 October 2020</DateText>
                </div>
            </NextStepContainer>
            <CommentsContainer>
                <GroupSectionTitle>Pending Comments</GroupSectionTitle>
                <PendingComments />
            </CommentsContainer>
            <TaskContainer>
                <GroupSectionTitle>Upcoming Tasks</GroupSectionTitle>
            </TaskContainer>
        </ExpandedGroupContainer>
    )
}

export default ExpandedGroup
