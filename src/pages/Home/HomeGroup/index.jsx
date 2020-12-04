import React from 'react'
import styled from 'styled-components/macro'
import OpenComments from './OpenComments'
import ReviewComments from './ReviewComments'
import TasksOverdue from './OverdueTasks'
import expandCollapse from '../../../assets/icons/stark_group_expand.svg'
import {ExpandCollapgeImage, ExpandCollapseText, GroupTitle, HomeGroupButton, HomeGroupContainer, LowerRowContainer, LowerRowRightContainer, UpperRowContainer, UpperRowRightContainer} from './styles'


const HomeGroup = ({group}) => {

    return (
        <HomeGroupContainer>
            <UpperRowContainer>
                <GroupTitle>Group A - Project: Placeholder</GroupTitle>
                <UpperRowRightContainer>
                    <OpenComments number={2} />
                    <ReviewComments number={3} />
                    <TasksOverdue number={5} />
                </UpperRowRightContainer>
            </UpperRowContainer>
            <LowerRowContainer>
                <HomeGroupButton>Go to Project</HomeGroupButton>
                <LowerRowRightContainer>
                    <ExpandCollapseText>View More</ExpandCollapseText>
                    <ExpandCollapgeImage alt='expand' src={expandCollapse} />
                </LowerRowRightContainer>
            </LowerRowContainer>

        </HomeGroupContainer>
    )

}


export default HomeGroup
