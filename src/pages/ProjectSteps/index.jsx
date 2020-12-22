import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import {GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {BaseButton} from '../../style/buttons'


const BeginningStructureButton = styled(BaseButton)`
    width: 180px;
    height: 32px;
`


const ProjectSteps = () => {
    const project = useSelector(state => state.projectReducer.project)
    const steps = useSelector(state => state.projectReducer.steps)
    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'STEPS', to: `${GROUPS}${PROJECTS}${STEPS}`, active: true}
                ]}
            />
            <DisplayTitleWithButtonContainer>
                <AuthenticatedPageTitle>{project.name} - Steps</AuthenticatedPageTitle>
                <BeginningStructureButton>Beginning Structure</BeginningStructureButton>
            </DisplayTitleWithButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default ProjectSteps
