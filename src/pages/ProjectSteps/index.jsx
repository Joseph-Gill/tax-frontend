import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer, NoFilterResultsContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import {GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {BaseButton} from '../../style/buttons'
import noMembers from '../../assets/icons/stark_no_invited_members.jpg'
import {CardTitleText} from '../../style/text'


const BeginningStructureButton = styled(BaseButton)`
    width: 180px;
    height: 32px;
`

const NoStepsContainer = styled(NoFilterResultsContainer)`
    margin-top: 21px;
`

const NoStepsButton = styled(BaseButton)`
    width: 108px;
    height: 32px;
    margin-top: 25px;
`


const ProjectSteps = () => {
    const project = useSelector(state => state.projectReducer.project)
    const steps = useSelector(state => state.projectReducer.project.steps)
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
            {!steps.length ? (
                <NoStepsContainer>
                    <img alt='no members' src={noMembers} />
                    <CardTitleText>Your project has no steps yet</CardTitleText>
                    <NoStepsButton>Add step</NoStepsButton>
                </NoStepsContainer>
            ) : null}
        </AuthenticatedPageContainer>
    )
}

export default ProjectSteps
