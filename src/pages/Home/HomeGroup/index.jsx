import React, {useState} from 'react'
import OpenComments from './OpenComments'
import ReviewComments from './ReviewComments'
import TasksOverdue from './OverdueTasks'
import expandCollapse from '../../../assets/icons/stark_group_expand.svg'
import {BottomRowContainer, GroupTitle, HomeGroupButton, HomeGroupContainer, MiddleRowContainer, ProjectTitle, UpperRowContainer} from './styles'
import {CollapseImage, ExpandImage} from '../../../style/images'
import ExpandedGroup from './ExpandedGroup'
import {HomeExpandCollapseContainer} from '../../../style/containers'
import {ExpandCollapseText} from '../../../style/text'
import {useSpring} from 'react-spring'
import {GROUPS, PROJECTS} from '../../../routes/paths'


const HomeGroup = ({groupName, history, project}) => {
    const [expandStatus, setExpandStatus] = useState(false)
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <HomeGroupContainer style={props}>
            <UpperRowContainer>
                <GroupTitle>{`Group: ${groupName}`}</GroupTitle>
                <TasksOverdue number={5} />
            </UpperRowContainer>
            <MiddleRowContainer>
                <ProjectTitle>{`Project: ${project.name}`}</ProjectTitle>
            </MiddleRowContainer>
            {expandStatus ? <ExpandedGroup /> : null}
            <BottomRowContainer>
                <HomeGroupButton onClick={() => history.push(`${GROUPS}${PROJECTS}/${project.id}/`)}>Go to Project</HomeGroupButton>
                <OpenComments number={2} />
                <ReviewComments number={3} />
                {expandStatus ? (
                    <HomeExpandCollapseContainer onClick={() => setExpandStatus(false)}>
                        <ExpandCollapseText>Collapse</ExpandCollapseText>
                        <CollapseImage alt='expand' src={expandCollapse} />
                    </HomeExpandCollapseContainer> ) : (
                        <HomeExpandCollapseContainer onClick={() => setExpandStatus(true)}>
                            <ExpandCollapseText>View More</ExpandCollapseText>
                            <ExpandImage alt='expand' src={expandCollapse} />
                        </HomeExpandCollapseContainer> )}
            </BottomRowContainer>
        </HomeGroupContainer>
    )
}

export default HomeGroup
