import React, {useState, useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {getProjectAction, resetProject} from '../../store/project/actions'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer, NoFilterTextContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {BEGINNING, DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import noSteps from '../../assets/icons/stark_no_steps.svg'
import {CardTitleText, NoFilterResultText} from '../../style/text'
import {StatusLegendFilterDropdownContainer} from '../ProjectTasks/styles'
import StepStatusLegendEntry from './StepStatusLegendEntry'
import {BeginningStructureButton, NoStepsButton, NoStepsContainer, StepStatusLegendContainer} from './styles'
import StepFilterDropdown from './StepsFilterDropdown'
import StepCard from './StepCard'
import Spinner from '../../components/Spinner'
import {addNewStep} from '../../store/step/actions'


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

    const addNewStepHandler = () => {
        dispatch(addNewStep())
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

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
                            <img alt='no steps' src={noSteps} />
                            <CardTitleText>No Steps found</CardTitleText>
                            <NoFilterTextContainer>
                                <NoFilterResultText>You haven&apos;t created any steps for</NoFilterResultText>
                                <NoFilterResultText>this project.</NoFilterResultText>
                            </NoFilterTextContainer>
                            <NoStepsButton onClick={addNewStepHandler}>Add New Step</NoStepsButton>
                        </NoStepsContainer>
                    ) : steps.map(step => (
                        <StepCard
                            key={step.id}
                            number={step.number}
                            project={project}
                            step={step}
                        />))}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectSteps
