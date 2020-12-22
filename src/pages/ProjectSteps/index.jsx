import React, {useState, useEffect} from 'react'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
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
import Spinner from '../../components/Spinner'
import {getProjectAction, resetProject} from '../../store/project/actions'
import {useRouteMatch} from 'react-router-dom'


const ProjectSteps = ({history}) => {
    const dispatch = useDispatch()
    const match = useRouteMatch()
    const project = useSelector(state => state.projectReducer.project)
    const loaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.projectReducer.project.steps)
    const [filterString, setFilterString] = useState('')

    useEffect(() => {
        dispatch(resetProject())
        dispatch(getProjectAction(match.params.projectId))
    }, [dispatch, match.params.projectId])


    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb
                        breadCrumbArray={[
                            {display: 'GROUPS', to: GROUPS, active: false},
                            {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                            {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                            {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                            {display: 'STEPS', to: `${GROUPS}${PROJECTS}${STEPS}/${project.id}/`, active: true}
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
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectSteps
