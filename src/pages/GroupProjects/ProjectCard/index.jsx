import React from 'react'
import {CardInfoText} from '../../../style/text'
import {ProjectCardContainer, ProjectCardMembersContainer, ProjectCardNameStatusContainer, ProjectCardNameText, StatusText} from './styles'


const ProjectCard = ({project}) => {
    return (
        <ProjectCardContainer status={project.status}>
            <ProjectCardNameStatusContainer>
                <ProjectCardNameText>{project.name}</ProjectCardNameText>
                <StatusText status={project.status}>{project.status}</StatusText>
            </ProjectCardNameStatusContainer>
            <CardInfoText>{project.description.length > 380 ? project.description.slice(0, 380).concat('... ') : project.description}</CardInfoText>
            <ProjectCardMembersContainer>
                <CardInfoText>{project.assigned_users_roles.length} {project.assigned_users_roles.length === 1 ? 'Member' : 'Members'}</CardInfoText>
            </ProjectCardMembersContainer>
        </ProjectCardContainer>
    )
}

export default ProjectCard
