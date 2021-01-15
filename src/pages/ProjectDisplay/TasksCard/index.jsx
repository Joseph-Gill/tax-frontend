import React from 'react'
import {GROUPS, PROJECTS, TASKS} from '../../../routes/paths'
import rightArrow from '../../../assets/icons/stark_right_facing_arrow.svg'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {ProjectDisplayColorText, ProjectDisplayColorTextBackground, ProjectDisplayColorTextContainer, ProjectDisplayInfoBox, ProjectDisplayStatusesContainer, ViewItemLink, ViewItemLinkContainer} from '../styles'


const TasksCard = ({history, project, tasksStatuses}) => {
    return (
        <ProjectDisplayInfoBox>
            <AddEditProjectSectionTitles>Tasks</AddEditProjectSectionTitles>
            <ProjectDisplayStatusesContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Ongoing / Planned'>{tasksStatuses['Ongoing'] + tasksStatuses['Planned']}</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Ongoing / Planned'>Ongoing / Planned</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Completed'>{tasksStatuses['Completed']}</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Completed'>Completed</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Not Started'>{tasksStatuses['Not Started']}</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Not Started'>Not Started</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
            </ProjectDisplayStatusesContainer>
            <ViewItemLinkContainer onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}/`)}>
                <ViewItemLink>View Tasks</ViewItemLink>
                <img alt="tasks" src={rightArrow} />
            </ViewItemLinkContainer>
        </ProjectDisplayInfoBox>
    )
}

export default TasksCard
