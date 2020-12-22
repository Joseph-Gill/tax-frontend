import React, {useState} from 'react'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import {BEGINNING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import noMembers from '../../assets/icons/stark_no_invited_members.jpg'
import {CardTitleText} from '../../style/text'
import {StatusLegendFilterDropdownContainer} from '../ProjectTasks/styles'
import StepStatusLegendEntry from './StepStatusLegendEntry'
import {BeginningStructureButton, NoStepsButton, NoStepsContainer, StepStatusLegendContainer} from './styles'
import StepFilterDropdown from './StepsFilterDropdown'
import StepCard from './StepCard'


const ProjectSteps = ({history}) => {
    const project = useSelector(state => state.projectReducer.project)
    const steps = useSelector(state => state.projectReducer.project.steps)
    const [filterString, setFilterString] = useState('')

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
                <BeginningStructureButton onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)}>Beginning Structure</BeginningStructureButton>
            </DisplayTitleWithButtonContainer>
            <StatusLegendFilterDropdownContainer>
                <StepStatusLegendContainer>
                    <StepStatusLegendEntry status='Ongoing / Not Started' />
                    <StepStatusLegendEntry status='Completed' />
                </StepStatusLegendContainer>
                <StepFilterDropdown filterString={filterString} setFilterString={setFilterString} />
            </StatusLegendFilterDropdownContainer>
            {!steps.length ? (
                <NoStepsContainer>
                    <img alt='no members' src={noMembers} />
                    <CardTitleText>Your project has no steps yet</CardTitleText>
                    <NoStepsButton>Add step</NoStepsButton>
                </NoStepsContainer>
            ) : null}
            {/*<StepCard history={history} number={1} project={project} step={placeholderStep} />*/}
        </AuthenticatedPageContainer>
    )
}

export default ProjectSteps
