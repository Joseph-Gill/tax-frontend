import React from 'react'
import {ProjectDisplayColorText, ProjectDisplayColorTextBackground, ProjectDisplayColorTextContainer, ProjectDisplayInfoBox, ProjectDisplayStatusesContainer, ViewItemLink, ViewItemLinkContainer} from '../styles'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import rightArrow from '../../../assets/icons/stark_right_facing_arrow.svg'
import {GROUPS, PROJECTS, TASKS} from '../../../routes/paths'


const TasksCard = ({history, steps}) => {
    return (
        <ProjectDisplayInfoBox>
            <AddEditProjectSectionTitles>Tasks</AddEditProjectSectionTitles>
            <ProjectDisplayStatusesContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Ongoing / Planned'>5</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Ongoing / Planned'>Ongoing / Planned</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Completed'>2</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Completed'>Completed</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Not Started'>2</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Not Started'>Not Started</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
            </ProjectDisplayStatusesContainer>
            <ViewItemLinkContainer onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}`)}>
                <ViewItemLink>View Tasks</ViewItemLink>
                <img alt="tasks" src={rightArrow} />
            </ViewItemLinkContainer>
        </ProjectDisplayInfoBox>
    )
}

export default TasksCard
