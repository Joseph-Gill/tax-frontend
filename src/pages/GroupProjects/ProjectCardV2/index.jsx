import React from 'react'
import {useSpring} from 'react-spring'
import {StatusText} from '../../../style/text'
import {GROUPS, PROJECTS} from '../../../routes/paths'
import {ProjectCardNameStatusContainer, ProjectCardNameText, ProjectCardV2Container, ProjectNameTextContainer} from './styles'
import {ProjectCardMembersContainer} from '../ProjectCard/styles'


//New version of Project Cards for Grid based display
const ProjectCardV2 = ({project, history}) => {

    //From react-spring, causes component to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <ProjectCardV2Container onClick={() => history.push(`${GROUPS}${PROJECTS}/${project.id}/`)} status={project.status} style={props}>
            <ProjectCardNameStatusContainer>
                <ProjectNameTextContainer status={project.status}>
                    <ProjectCardNameText>{project.name}</ProjectCardNameText>
                </ProjectNameTextContainer>
            </ProjectCardNameStatusContainer>
            <ProjectCardMembersContainer>
                <StatusText status={project.status}>{project.status}</StatusText>
            </ProjectCardMembersContainer>
        </ProjectCardV2Container>
    )
}

export default ProjectCardV2
