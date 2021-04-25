import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {EditorState} from 'draft-js'
import BreadCrumb from '../../components/BreadCrumb'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import StepChart from './StepChart'
import StepDetails from './StepDetails'
import Loading from '../../components/Loading'
import StepDisplayTitle from './StepDisplayTitle'
import DeleteStepModal from '../../components/Modals/DeleteStepModal'
import StepDisplayFooterV2 from '../../components/StepDisplayFooterV2'
import StepDisplayToggleButtonsStatus from './StepDisplayToggleButtonsStatus'
import LogoLoading from '../../components/LogoLoading'
import {setTaskFilterStepNumber} from '../../store/task/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {addNewStep, createNewStepAction, deleteStepAction, getStepsForProjectAction, removeNewStep,
    skipToSpecifiedStep, updateStepAction} from '../../store/step/actions'
import {getChartForStepAction} from '../../store/chart/actions'
import {getProfileAction} from '../../store/profile/actions'
import {convertContentToHTML, convertDate, getEntitiesWithTags} from '../../helpers'
import {ErrorMessage} from '../../style/messages'
import {BEGINNING, DISPLAY_STEP, GROUPS, HOME, PROJECTS, STEPS, TASKS} from '../../routes/paths'
import {AuthenticatedPageContainer} from '../../style/containers'
import {StepChartDetailsContainer, StepDisplayErrorContainer} from './styles'


const StepDisplay = ({history}) => {
    const dispatch = useDispatch()
    const indexOfStepToDisplay = useSelector(state => state.stepReducer.indexOfCurrentStepToDisplay)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.project)
    const error = useSelector(state => state.errorReducer.error)
    const entities = useSelector(state => state.groupReducer.group.entities)
    const profile = useSelector(state => state.profileReducer.profile)
    const profileLoaded = useSelector(state => state.profileReducer.loaded)
    const [editStatus, setEditStatus] = useState(false)
    const [date, setDate] = useState(new Date())
    const [descriptionState, setDescriptionState] = useState(() => EditorState.createEmpty())
    const [stepDetailStatus, setStepDetailStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const [stepStatus, setStepStatus] = useState('')
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [ableToComplete, setAbleToComplete] = useState(false)
    const [showAddEntity, setShowAddEntity] = useState(false)
    const [showAddLink, setShowAddLink] = useState(false)
    const [showEditEntity, setShowEditEntity] = useState(false)
    const [showEditLink, setShowEditLink] = useState(false)
    const [showRemoveLink, setShowRemoveLink] = useState(false)
    const [showRemoveEntity, setShowRemoveEntity] = useState(false)
    const [showPredefinedChangeLegalForm, setShowPredefinedChangeLegalForm] = useState(false)
    const [showPredefinedContribution, setShowPredefinedContribution] = useState(false)
    const [showPredefinedDistribution, setShowPredefinedDistribution] = useState(false)
    const [showPredefinedIncorporate, setShowPredefinedIncorporate] = useState(false)
    const [showPredefinedIntercompanySale, setShowPredefinedIntercompanySale] = useState(false)
    const [showPredefinedLiquidation, setShowPredefinedLiquidation] = useState(false)
    const [showPredefinedMerger, setShowPredefinedMerger] = useState(false)
    const [showStepStatusSelect, setShowStepStatusSelect] = useState(false)
    const [currentStepEntities, setCurrentStepEntities] = useState([])
    const [clinks, setClinks] = useState([])
    const [slinks, setSlinks] = useState([])
    const [chartLoading, setChartLoading] = useState(true)
    const [stepChartExists, setStepChartExists] = useState(false)

    useEffect(() => {
        if (!profileLoaded) {
                dispatch(getProfileAction())
            }
    }, [profileLoaded, dispatch])

    useEffect(() => {
        //Used to prevent user from setting the status of a step to completed if all previous steps aren't complete
        const checkIfStepCanComplete = () => {
            for (let i = 0; i < indexOfStepToDisplay; i++) {
                if (steps[i].status !== 'Completed') {
                    return false
                }
            }
            return true
        }
        //Checks to see if the currently displayed Step has a StepChart
        const checkForCurrentStepChart = async () => {
            //If the currently step is Step Number 1...
            if (indexOfStepToDisplay === 0) {
                //If this step has a step chart, loads its nodes, clinks, and slinks into state
                const response = await dispatch(getChartForStepAction(project.id, indexOfStepToDisplay + 1))
                if (response.status === 200) {
                    setCurrentStepEntities([...getEntitiesWithTags(JSON.parse(response.data.nodes), true)])
                    setSlinks([...JSON.parse(response.data.slinks)])
                    setClinks([...JSON.parse(response.data.clinks)])
                    //Used in action call of StepChart to decide if it is post or patch
                    setStepChartExists(true)
                } else {
                    //If the user is on Step 1 and it has no chart created yet, the Chart will display
                    //the current Group's org chart entities as its chart
                    setCurrentStepEntities([...getEntitiesWithTags(entities, false)])
                }
            //If the step is not Step Number 1...
            } else {
                //If this step has a step chart, loads its nodes, clinks, and slinks into state
                const response = await dispatch(getChartForStepAction(project.id, indexOfStepToDisplay + 1))
                if (response.status === 200) {
                    setCurrentStepEntities([...getEntitiesWithTags(JSON.parse(response.data.nodes), true)])
                    setSlinks([...JSON.parse(response.data.slinks)])
                    setClinks([...JSON.parse(response.data.clinks)])
                    //Used in action call of StepChart to decide if it is post or patch
                    setStepChartExists(true)
                //If this step does not have a step chart, tries to get the step chart for the previous step
                //loading its nodes, clinks, and slinks into state
                } else {
                    const response = await dispatch(getChartForStepAction(project.id, indexOfStepToDisplay))
                        if (response.status === 200) {
                            setCurrentStepEntities([...getEntitiesWithTags(JSON.parse(response.data.nodes), false)])
                            setSlinks([...JSON.parse(response.data.slinks)])
                            //SLinks should show from previous StepCharts, CLinks should not show from previous StepCharts
                            setClinks([])
                        //If the previous chart has no steps, an empty array is loaded into state
                        } else {
                            setCurrentStepEntities([])
                        }
                }
            }
        }
        setChartLoading(true)
        setStepChartExists(false)
        //Pushes to Home if steps or project are not loaded due to page refresh
        if (!stepsLoaded || !projectLoaded) {
            history.push(`${HOME}`)
        } else {
            //If a step has no id, it was created by "Add New Step" StepDisplay then set to the detail tab with edit active
            if (!steps[indexOfStepToDisplay].id) {
                setEditStatus(true)
                setStepDetailStatus(true)
            }
            //Sets the status input to the current steps values
            setStepStatus(steps[indexOfStepToDisplay].status)
            //Checks if the step is allowed to be completed status
            setAbleToComplete(checkIfStepCanComplete())
            //Used to track if StepChart buttons should be active
            checkForCurrentStepChart()
                .then(() => {
                    setChartLoading(false)
                })
        }
    }, [dispatch, entities, indexOfStepToDisplay, project.id, stepsLoaded, projectLoaded, steps, history])

    const saveNewStepHandler = async () => {
        dispatch(resetErrors())
        setLoading(true)
        const newStepData = {
            description: convertContentToHTML(descriptionState),
            effective_date: convertDate(date),
            number: indexOfStepToDisplay + 1,
            status: stepStatus
        }
        const response = await dispatch(createNewStepAction(newStepData, project.id))
        if (response.status === 201) {
            const response = await dispatch(getStepsForProjectAction(project.id))
            if (response) {
                setEditStatus(false)
                setLoading(false)
            }
        } else {
           setLoading(false)
        }
    }

    const updateExistingStepHandler = async () => {
        dispatch(resetErrors())
        setLoading(true)
        const updatedStepData = {
            description: convertContentToHTML(descriptionState),
            effective_date: convertDate(date),
            number: indexOfStepToDisplay + 1,
            status: stepStatus
        }
        const response = await dispatch(updateStepAction(updatedStepData, steps[indexOfStepToDisplay].id))
        if (response.status === 200) {
            const response = await dispatch(getStepsForProjectAction(project.id))
            if (response) {
                setEditStatus(false)
                setLoading(false)
            }
        }
        else {
            setLoading(false)
        }
    }

    const addNewStepHandler = () => {
        // setDescription('')
        setDescriptionState(() => EditorState.createEmpty())
        //Creates a new blank Step with the next appropriate Step Number
        dispatch(addNewStep(indexOfStepToDisplay + 2))
        //Pushes StepDisplay to display the next Step
        dispatch(skipToSpecifiedStep(indexOfStepToDisplay + 1))
    }

    const deleteStepHandler = async () => {
        //If the step being deleted is not a newly created and not saved Step..
        if (steps[indexOfStepToDisplay].id) {
            setLoading(true)
            const response = await dispatch(deleteStepAction(steps[indexOfStepToDisplay].id))
            if (response.status === 204) {
                //If the Step deleted is not the first step, pushes StepDisplay to show the previous Step
                if (indexOfStepToDisplay) {
                    dispatch(skipToSpecifiedStep(indexOfStepToDisplay - 1))
                    const response = await dispatch(getStepsForProjectAction(project.id))
                    if (response) {
                        setShowConfirmation(false)
                        setLoading(false)
                    }
                //If the Step deleted is the first step, pushes the user to ProjectSteps
                } else {
                    history.push(`${GROUPS}${PROJECTS}${STEPS}/${project.id}/`)
                }
            }
        //If the step being deleted is a newly created step it only exists in local state
        } else {
            const stepData = [...steps]
            //Removes the unsaved step from the end of Steps array
            stepData.pop()
            dispatch(removeNewStep(stepData))
            //If the Step deleted is not the first step, pushes StepDisplay to show the previous Step
            if (indexOfStepToDisplay) {
                dispatch(skipToSpecifiedStep(indexOfStepToDisplay - 1))
                setShowConfirmation(false)
                setEditStatus(false)
            //If the Step deleted is the first step, pushes the user to StepBeginning
            } else {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
            }
        }
    }

    //Used by Go To Task button, sets Task Step Filter and pushes to ProjectTasks with appropriate
    //Step number filter in place
    const tasklistButtonClickHandler = () => {
        dispatch(setTaskFilterStepNumber(steps[indexOfStepToDisplay].number))
        history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}/`)
    }

    const handleStepStatusSelectChange = stepStatus => {
        setStepStatus(stepStatus)
        setShowStepStatusSelect(false)
    }

    return (
        <AuthenticatedPageContainer>
            {!stepsLoaded || !projectLoaded ? <LogoLoading /> : (
                <>
                    {loading ? <LogoLoading /> : null}
                    {showConfirmation ?
                        <DeleteStepModal
                            deleteStepHandler={deleteStepHandler}
                            setShowConfirmation={setShowConfirmation}
                            showConfirmation={showConfirmation}
                        /> : null}
                    <BreadCrumb
                        breadCrumbArray={[
                            {display: 'GROUPS', to: GROUPS, active: false},
                            {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                            {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                            {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                            {display: 'STEPS', to: `${GROUPS}${PROJECTS}${STEPS}/${project.id}/`, active: false},
                            {display: `STEP ${indexOfStepToDisplay + 1}`, to: `${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`, active: true},
                        ]}
                    />
                    <PreviousNextStepHeader
                        indexOfStepToDisplay={indexOfStepToDisplay}
                        next={1}
                        previous={1}
                    />
                    <StepDisplayTitle
                        addNewStepHandler={addNewStepHandler}
                        date={date}
                        editStatus={editStatus}
                        indexOfStepToDisplay={indexOfStepToDisplay}
                        setDate={setDate}
                        steps={steps}
                    />
                    <StepDisplayToggleButtonsStatus
                        ableToComplete={ableToComplete}
                        currentStepEntities={currentStepEntities}
                        editStatus={editStatus}
                        handleStepStatusSelectChange={handleStepStatusSelectChange}
                        indexOfStepToDisplay={indexOfStepToDisplay}
                        setShowAddEntity={setShowAddEntity}
                        setShowAddLink={setShowAddLink}
                        setShowConfirmation={setShowConfirmation}
                        setShowEditEntity={setShowEditEntity}
                        setShowEditLink={setShowEditLink}
                        setShowPredefinedChangeLegalForm={setShowPredefinedChangeLegalForm}
                        setShowPredefinedContribution={setShowPredefinedContribution}
                        setShowPredefinedDistribution={setShowPredefinedDistribution}
                        setShowPredefinedIncorporate={setShowPredefinedIncorporate}
                        setShowPredefinedIntercompanySale={setShowPredefinedIntercompanySale}
                        setShowPredefinedLiquidation={setShowPredefinedLiquidation}
                        setShowPredefinedMerger={setShowPredefinedMerger}
                        setShowRemoveEntity={setShowRemoveEntity}
                        setShowRemoveLink={setShowRemoveLink}
                        setShowStepStatusSelect={setShowStepStatusSelect}
                        setStepDetailStatus={setStepDetailStatus}
                        showStepStatusSelect={showStepStatusSelect}
                        stepDetailStatus={stepDetailStatus}
                        stepStatus={stepStatus}
                        steps={steps}
                        tasklistButtonClickHandler={tasklistButtonClickHandler}
                    />
                    <StepDisplayErrorContainer>
                        {error && <ErrorMessage>{error.status}</ErrorMessage>}
                    </StepDisplayErrorContainer>
                    <StepChartDetailsContainer>
                        {chartLoading ?
                            <Loading /> :
                            !stepDetailStatus ?
                                <StepChart
                                    clinks={clinks}
                                    entities={currentStepEntities}
                                    indexOfStepToDisplay={indexOfStepToDisplay}
                                    profile={profile}
                                    project={project}
                                    setClinks={setClinks}
                                    setShowAddEntity={setShowAddEntity}
                                    setShowAddLink={setShowAddLink}
                                    setShowEditEntity={setShowEditEntity}
                                    setShowEditLink={setShowEditLink}
                                    setShowPredefinedChangeLegalForm={setShowPredefinedChangeLegalForm}
                                    setShowPredefinedContribution={setShowPredefinedContribution}
                                    setShowPredefinedDistribution={setShowPredefinedDistribution}
                                    setShowPredefinedIncorporate={setShowPredefinedIncorporate}
                                    setShowPredefinedIntercompanySale={setShowPredefinedIntercompanySale}
                                    setShowPredefinedLiquidation={setShowPredefinedLiquidation}
                                    setShowPredefinedMerger={setShowPredefinedMerger}
                                    setShowRemoveEntity={setShowRemoveEntity}
                                    setShowRemoveLink={setShowRemoveLink}
                                    setSlinks={setSlinks}
                                    setStepChartExists={setStepChartExists}
                                    showAddEntity={showAddEntity}
                                    showAddLink={showAddLink}
                                    showEditEntity={showEditEntity}
                                    showEditLink={showEditLink}
                                    showPredefinedChangeLegalForm={showPredefinedChangeLegalForm}
                                    showPredefinedContribution={showPredefinedContribution}
                                    showPredefinedDistribution={showPredefinedDistribution}
                                    showPredefinedIncorporate={showPredefinedIncorporate}
                                    showPredefinedIntercompanySale={showPredefinedIntercompanySale}
                                    showPredefinedLiquidation={showPredefinedLiquidation}
                                    showPredefinedMerger={showPredefinedMerger}
                                    showRemoveEntity={showRemoveEntity}
                                    showRemoveLink={showRemoveLink}
                                    slinks={slinks}
                                    stepChartExists={stepChartExists}
                                    steps={steps}
                                /> :
                                <StepDetails
                                    descriptionState={descriptionState}
                                    editStatus={editStatus}
                                    saveNewStepHandler={saveNewStepHandler}
                                    setDescriptionState={setDescriptionState}
                                    setEditStatus={setEditStatus}
                                    step={steps[indexOfStepToDisplay]}
                                    steps={steps}
                                    updateExistingStepHandler={updateExistingStepHandler}
                                />}
                    </StepChartDetailsContainer>
                    <StepDisplayFooterV2
                        endingNode={0}
                        history={history}
                        indexOfStepToDisplay={indexOfStepToDisplay}
                        steps={steps}
                    />
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default StepDisplay
