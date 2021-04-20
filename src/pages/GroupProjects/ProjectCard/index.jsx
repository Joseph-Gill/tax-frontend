import React from 'react'
import {useSpring} from 'react-spring'
import {createSanitizedMarkup} from '../../../helpers'
import {GROUPS, PROJECTS} from '../../../routes/paths'
import {CardDescriptionText, CardInfoText, StatusText} from '../../../style/text'
import {ProjectCardContainer, ProjectCardMembersContainer, ProjectCardNameStatusContainer, ProjectCardNameText,
    ProjectNameTextContainer} from './styles'


//No longer used in current version, replaced with V2
const ProjectCard = ({project, history}) => {

    //From react-spring, causes component to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <ProjectCardContainer onClick={() => history.push(`${GROUPS}${PROJECTS}/${project.id}/`)} status={project.status} style={props}>
            <ProjectCardNameStatusContainer>
                <ProjectNameTextContainer status={project.status}>
                    <ProjectCardNameText>{project.name}</ProjectCardNameText>
                </ProjectNameTextContainer>
                <StatusText status={project.status}>{project.status}</StatusText>
            </ProjectCardNameStatusContainer>
            {/* eslint-disable-next-line react/no-danger */}
            <CardDescriptionText dangerouslySetInnerHTML={createSanitizedMarkup(project.description)} />
            <ProjectCardMembersContainer>
                <CardInfoText>{project.assigned_users_roles.length} {project.assigned_users_roles.length === 1 ? 'Member' : 'Members'}</CardInfoText>
            </ProjectCardMembersContainer>
        </ProjectCardContainer>
    )
}

export default ProjectCard
