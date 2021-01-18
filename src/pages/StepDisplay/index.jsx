import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import StepChart from './StepChart'
import StepDetails from './StepDetails'
import Spinner from '../../components/Spinner'
import DeleteStepModal from '../../components/Modals/DeleteStepModal'
import StepDisplayFooterV2 from '../../components/StepDisplayFooterV2'
import {setTaskFilterStepNumber} from '../../store/task/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {addNewStep, createNewStepAction, deleteStepAction, getStepsForProjectAction, removeNewStep,
    skipToSpecifiedStep, updateStepAction} from '../../store/step/actions'
import {convertDate} from '../../helpers'
import {ErrorMessage} from '../../style/messages'
import {BEGINNING, DISPLAY_STEP, GROUPS, HOME, PROJECTS, STEPS, TASKS} from '../../routes/paths'
import {AuthenticatedPageContainer} from '../../style/containers'
import {StepChartDetailsContainer, StepDisplayErrorContainer} from './styles'
import StepDisplayToggleButtonsStatus from './StepDisplayToggleButtonsStatus'
import StepDisplayTitle from './StepDisplayTitle'


const StepDisplay = ({history}) => {
    const dispatch = useDispatch()
    const indexOfStepToDisplay = useSelector(state => state.stepReducer.indexOfCurrentStepToDisplay)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.project)
    const error = useSelector(state => state.errorReducer.error)
    const entities = useSelector(state => state.groupReducer.group.entities)
    const [editStatus, setEditStatus] = useState(false)
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('')
    const [stepDetailStatus, setStepDetailStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const [stepStatus, setStepStatus] = useState('')
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [ableToComplete, setAbleToComplete] = useState(false)
    const [showAddEntity, setShowAddEntity] = useState(false)
    const [showAddLink, setShowAddLink] = useState(false)
    const [showRemoveLink, setShowRemoveLink] = useState(false)
    const [showRemoveEntity, setShowRemoveEntity] = useState(false)


    useEffect(() => {
        if (!stepsLoaded || !projectLoaded) {
            history.push(`${HOME}`)
        } else {
            if (!steps[indexOfStepToDisplay].id) {
                setEditStatus(true)
            }
            const checkIfStepCanComplete = () => {
                for (let i = 0; i < indexOfStepToDisplay; i++) {
                    if (steps[i].status !== 'Completed') {
                        return false
                    }
                }
                return true
            }
            setDescription(steps[indexOfStepToDisplay].description)
            setStepStatus(steps[indexOfStepToDisplay].status)
            setAbleToComplete(checkIfStepCanComplete())
        }
    }, [history, indexOfStepToDisplay, projectLoaded, steps, stepsLoaded])

    const saveNewStepHandler = async () => {
        dispatch(resetErrors())
        const newStepData = {
            description: description,
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
            description: description,
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
        setDescription('')
        dispatch(addNewStep(indexOfStepToDisplay + 2))
        dispatch(skipToSpecifiedStep(indexOfStepToDisplay + 1))
    }

    const deleteStepHandler = async () => {
        if (steps[indexOfStepToDisplay].id) {
            setLoading(true)
            const response = await dispatch(deleteStepAction(steps[indexOfStepToDisplay].id))
            if (response.status === 204) {
                if (indexOfStepToDisplay) {
                    dispatch(skipToSpecifiedStep(indexOfStepToDisplay - 1))
                    const response = await dispatch(getStepsForProjectAction(project.id))
                    if (response) {
                        setShowConfirmation(false)
                        setLoading(false)
                    }
                } else {
                    history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
                }
            }
        } else {
            const stepData = [...steps]
            stepData.pop()
            dispatch(removeNewStep(stepData))
            if (indexOfStepToDisplay) {
                dispatch(skipToSpecifiedStep(indexOfStepToDisplay - 1))
                setShowConfirmation(false)
                setEditStatus(false)
            } else {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
            }
        }
    }

    const tasklistButtonClickHandler = () => {
        dispatch(setTaskFilterStepNumber(steps[indexOfStepToDisplay].number))
        history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}/`)
    }

    return (
        <AuthenticatedPageContainer>
            {!stepsLoaded || !projectLoaded ? <Spinner /> : (
                <>
                    {loading ? <Spinner /> : null}
                    {showConfirmation ?
                        <DeleteStepModal
                            deleteStepHandler={deleteStepHandler}
                            setShowConfirmation={setShowConfirmation}
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
                        editStatus={editStatus}
                        indexOfStepToDisplay={indexOfStepToDisplay}
                        setShowAddEntity={setShowAddEntity}
                        setShowAddLink={setShowAddLink}
                        setShowConfirmation={setShowConfirmation}
                        setShowRemoveEntity={setShowRemoveEntity}
                        setShowRemoveLink={setShowRemoveLink}
                        setStepDetailStatus={setStepDetailStatus}
                        setStepStatus={setStepStatus}
                        stepDetailStatus={stepDetailStatus}
                        stepStatus={stepStatus}
                        steps={steps}
                        tasklistButtonClickHandler={tasklistButtonClickHandler}
                    />
                    <StepDisplayErrorContainer>
                        {error && <ErrorMessage>{error.status}</ErrorMessage>}
                    </StepDisplayErrorContainer>
                    <StepChartDetailsContainer>
                        {!stepDetailStatus ?
                            <StepChart
                                entities={entities}
                                setShowAddEntity={setShowAddEntity}
                                setShowAddLink={setShowAddLink}
                                setShowRemoveEntity={setShowRemoveEntity}
                                setShowRemoveLink={setShowRemoveLink}
                                showAddEntity={showAddEntity}
                                showAddLink={showAddLink}
                                showRemoveEntity={showRemoveEntity}
                                showRemoveLink={showRemoveLink}
                            /> :
                            <StepDetails
                                description={description}
                                editStatus={editStatus}
                                saveNewStepHandler={saveNewStepHandler}
                                setDescription={setDescription}
                                setEditStatus={setEditStatus}
                                step={steps[indexOfStepToDisplay]}
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
