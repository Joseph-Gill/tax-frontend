import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
import StepStatusLegendEntry from './StepStatusLegendEntry'
import StepFilterDropdown from './StepsFilterDropdown'
import StepCard from './StepCard'
import Spinner from '../../components/Spinner'
import JumpToStepDropdown from '../../components/Dropdowns/JumpToStepDropdown'
import {getProjectAction} from '../../store/project/actions'
import {getGroupOfProjectAction} from '../../store/group/actions'
import {addNewStep, getStepsForProjectAction, skipToSpecifiedStep} from '../../store/step/actions'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import noSteps from '../../assets/icons/stark_no_steps.svg'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CardTitleText, NoFilterResultText} from '../../style/text'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer, NoFilteredTasksStepsContainer, NoFilterTextContainer} from '../../style/containers'
import {StatusLegendFilterDropdownContainer} from '../ProjectTasks/styles'
import {NoStepsButton, NoStepsContainer, StepStatusLegendContainer} from './styles'


const ProjectSteps = ({history}) => {
    const dispatch = useDispatch()
    const match = useRouteMatch()
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const [filterString, setFilterString] = useState('')
    const [filterOption, setFilterOption] = useState([
        {isChecked: true, type: 'status'},
        {isChecked: false, type: 'location'},
        {isChecked: false, type: 'description'}
    ])

    useEffect(() => {
        //Gets project matching match.params.projectId
        dispatch(getProjectAction(match.params.projectId))
        //Gets steps for project matching match.params.projectId
        dispatch(getStepsForProjectAction(match.params.projectId))
    }, [dispatch, match.params.projectId])

    useEffect(() => {
        //If group is not loaded due to page refresh, get group for project matching match.params.projectId
        if (!groupLoaded) {
            dispatch(getGroupOfProjectAction(match.params.projectId))
        }
    }, [dispatch, groupLoaded, match.params.projectId])

    //Used by Add New Step button if no steps exist for project
    const addNewStepHandler = () => {
        dispatch(addNewStep(1))
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

    //Used by StepCard Go To Step button to push to StepDisplay with index of step set
    const stepCardClickHandler = indexOfStep => {
        dispatch(skipToSpecifiedStep(indexOfStep))
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

    //Used by StepsFilterDropdown to filter steps per filter input
    const filteredSteps = () => {
        const selectedFilterOption = filterOption.filter(option => option.isChecked)[0]
        switch (selectedFilterOption.type) {
            case 'location':
                if (filterString) {
                    return steps.filter(step => step.tax_consequences.filter(tax => tax.location.toLowerCase().indexOf(filterString.toLowerCase()) !== -1).length > 0)
                } else {
                    return steps
                }
            default:
                return steps.filter(step => step[selectedFilterOption.type].toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
        }
    }

    //Renders each step of the project matching filter, or No Steps match this filter if no matches found
    const renderSteps = array => {
        if (!array.length) {
            return (
                <NoFilteredTasksStepsContainer>
                    No steps for this project match these filters
                </NoFilteredTasksStepsContainer>
            )
        } else {
            return array.map(step => (
                <StepCard
                    history={history}
                    key={step.id}
                    number={step.number}
                    project={project}
                    step={step}
                    stepCardClickHandler={stepCardClickHandler}
                />
            ))
        }
    }

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !stepsLoaded || !groupLoaded ? <Spinner /> : (
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
                        <JumpToStepDropdown
                            history={history}
                            stepCardClickHandler={stepCardClickHandler}
                            steps={steps}
                        />
                    </DisplayTitleWithButtonContainer>
                    <StatusLegendFilterDropdownContainer>
                        <StepStatusLegendContainer>
                            <StepStatusLegendEntry status='Ongoing / Not Started' />
                            <StepStatusLegendEntry status='Completed' />
                        </StepStatusLegendContainer>
                        <StepFilterDropdown
                            filterOption={filterOption}
                            filterString={filterString}
                            setFilterOption={setFilterOption}
                            setFilterString={setFilterString}
                        />
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
                    ) : renderSteps(filteredSteps())}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectSteps
