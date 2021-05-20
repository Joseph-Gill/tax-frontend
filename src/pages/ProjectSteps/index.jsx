import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import StepCardV2 from './StepCardV2'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import StepsFilterSearchBar from './StepsFilterSearchBar'
import StepStatusLegendEntry from './StepStatusLegendEntry'
import {getProjectAction} from '../../store/project/actions'
import StepsGoToDropdown from '../../components/Dropdowns/StepsGoToDropdown'
import TooltipAnchorText from '../../components/Tooltips/TooltipComponents/TooltipAnchorText'
import {getGroupOfProjectAction} from '../../store/group/actions'
import {addNewStep, getStepsForProjectAction, skipToSpecifiedStep} from '../../store/step/actions'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import noSteps from '../../assets/icons/stark_no_steps.svg'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CardTitleText, NoFilterResultText} from '../../style/text'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer, NoFilteredTasksStepsContainer, NoFilterTextContainer} from '../../style/containers'
import {StatusLegendFilterDropdownContainer} from '../ProjectTasks/styles'
import {NoStepsButton, NoStepsContainer, StepCardListContainer, StepStatusLegendContainer} from './styles'
import ReactTooltip from 'react-tooltip'


const ProjectSteps = ({history}) => {
    const match = useRouteMatch()
    const dispatch = useDispatch()
    let filterString = useRef('')
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const [showFilterDropdown, setShowFilterDropdown] = useState(false)
    const [showGoToDropdown, setShowGoToDropdown] = useState(false)
    const [stepsToDisplay, setStepsToDisplay] = useState([])
    const [filterOption, setFilterOption] = useState([
        {isChecked: true, type: 'status'},
        {isChecked: false, type: 'location'},
        {isChecked: false, type: 'description'}
    ])

    useEffect(() => {
        const getStepsSetDisplay = async () => {
            //Gets steps for project matching match.params.projectId
            return await dispatch(getStepsForProjectAction(match.params.projectId))
        }
        getStepsSetDisplay()
            .then((response) => {
                setStepsToDisplay(response)
                dispatch(getProjectAction(match.params.projectId))
            })
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
                    return steps.filter(step => step.tax_consequences.filter(tax => tax.location.toLowerCase().indexOf(filterString.current.value.toLowerCase()) !== -1).length > 0)
                } else {
                    return steps
                }
            default:
                return steps.filter(step => step[selectedFilterOption.type].toLowerCase().indexOf(filterString.current.value.toLowerCase()) !== -1)
        }
    }

    //Used by search bar to filter by enter keypress in search bar
    const filterByKeypressChangeHandler = (e) => {
        if (e.key === 'Enter') {
            setStepsToDisplay(filteredSteps())
        }
    }

    //Used by search bar to filter by clicking search image
    const filterByClickChangeHandler = () => {
        setStepsToDisplay(filteredSteps())
    }

    //Used by search bar to reset the search bar text
    const resetFilterChangeHandler = () => {
        filterString.current.value = ''
        setStepsToDisplay([...steps])
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
            return (
                <StepCardListContainer numCards={array.length}>
                    {array.map(step => (
                        <StepCardV2
                            dispatch={dispatch}
                            history={history}
                            key={step.id}
                            project={project}
                            step={step}
                            stepCardClickHandler={stepCardClickHandler}
                        />))}
                </StepCardListContainer>
            )
        }
    }

    //Used by Go To... dropdown, toggles it open/close, closing the Filter dropdown
    const toggleGoToCloseFilterSearch = () => {
        setShowGoToDropdown(!showGoToDropdown)
        setShowFilterDropdown(false)
    }

    //Used by Filter dropdown, toggles it open/close, closing the Go To... dropdown
    const toggleFilterSearchCloseGoTo = () => {
        setShowFilterDropdown(!showFilterDropdown)
        setShowGoToDropdown(false)
    }

    // Projects can only add a step if they are Ongoing status
    const notAbleToAddStep = () => project.status !== 'Ongoing'

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !stepsLoaded || !groupLoaded ? <LogoLoading /> : (
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
                        <StepsGoToDropdown
                            history={history}
                            setShowGoToDropdown={setShowGoToDropdown}
                            showGoToDropdown={showGoToDropdown}
                            stepCardClickHandler={stepCardClickHandler}
                            steps={steps}
                            toggleGoToCloseFilterSearch={toggleGoToCloseFilterSearch}
                        />
                    </DisplayTitleWithButtonContainer>
                    <StatusLegendFilterDropdownContainer>
                        <StepStatusLegendContainer>
                            <StepStatusLegendEntry status='Ongoing / Not Started' />
                            <StepStatusLegendEntry status='Completed' />
                        </StepStatusLegendContainer>
                        <StepsFilterSearchBar
                            filterByClickChangeHandler={filterByClickChangeHandler}
                            filterByKeypressChangeHandler={filterByKeypressChangeHandler}
                            filterOption={filterOption}
                            filterString={filterString}
                            resetFilterChangeHandler={resetFilterChangeHandler}
                            setFilterOption={setFilterOption}
                            setShowFilterDropdown={setShowFilterDropdown}
                            showFilterDropdown={showFilterDropdown}
                            toggleFilterSearchCloseGoTo={toggleFilterSearchCloseGoTo}
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
                            <div data-for='addStep' data-tip>
                                <NoStepsButton
                                    disabled={notAbleToAddStep()}
                                    onClick={addNewStepHandler}
                                >
                                    Add New Step
                                </NoStepsButton>
                            </div>
                            {notAbleToAddStep() &&
                                <ReactTooltip
                                    backgroundColor='#FFDB99'
                                    effect="float"
                                    id='addStep'
                                    place="bottom"
                                >
                                    <TooltipAnchorText
                                        displayEllipse={false}
                                        tooltipText='You can only add Steps to a project with status Ongoing'
                                    />
                                </ReactTooltip>}
                        </NoStepsContainer>
                    ) : renderSteps(stepsToDisplay)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectSteps
