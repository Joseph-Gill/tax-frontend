import React, {useState} from 'react'
import OpenComments from './OpenComments'
import ReviewComments from './ReviewComments'
import TasksOverdue from './OverdueTasks'
import expandCollapse from '../../../assets/icons/stark_group_expand.svg'
import {BottomRowContainer, GroupTitle, HomeGroupButton, HomeGroupContainer, MiddleRowContainer, UpperRowContainer, UpperRowRightContainer} from './styles'
import {CollapseImage, ExpandImage} from '../../../style/images'
import ExpandedGroup from './ExpandedGroup'
import {HomeExpandCollapseContainer} from '../../../style/containers'
import {ExpandCollapseText} from '../../../style/text'


const HomeGroup = ({groupName, project}) => {

    const [expandStatus, setExpandStatus] = useState(false)

    return (
        <HomeGroupContainer>
            <UpperRowContainer>
                <GroupTitle>{`Group ${groupName} - Project: ${project.name}`}</GroupTitle>
                <UpperRowRightContainer>
                    <OpenComments number={2} />
                    <ReviewComments number={3} />
                    <TasksOverdue number={5} />
                </UpperRowRightContainer>
            </UpperRowContainer>
            <MiddleRowContainer>
                <HomeGroupButton>Go to Project</HomeGroupButton>
                {!expandStatus ? (
                    <HomeExpandCollapseContainer onClick={() => setExpandStatus(true)}>
                        <ExpandCollapseText>View More</ExpandCollapseText>
                        <ExpandImage alt='expand' src={expandCollapse} />
                    </HomeExpandCollapseContainer>) : null}
            </MiddleRowContainer>
            {expandStatus ? <ExpandedGroup /> : null}
            {expandStatus ? (
                <BottomRowContainer>
                    <HomeExpandCollapseContainer onClick={() => setExpandStatus(false)}>
                        <ExpandCollapseText>Collapse</ExpandCollapseText>
                        <CollapseImage alt='expand' src={expandCollapse} />
                    </HomeExpandCollapseContainer>
                </BottomRowContainer>) : null}
        </HomeGroupContainer>
    )
}

export default HomeGroup
