import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import DateInput from '../../components/DateInput'
import BreadCrumb from '../../components/BreadCrumb'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import StepDisplayToggle from './StepDisplayToggle'
import StepChart from './StepChart'
import StepDetails from './StepDetails'
import Spinner from '../../components/Spinner'
import StepToolTip from './StepToolTip'
import DeleteStepModal from '../../components/Modals/DeleteStepModal'
import StepDisplayFooterV2 from '../../components/StepDisplayFooterV2'
import {setTaskFilterStepNumber} from '../../store/task/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {addNewStep, createNewStepAction, deleteStepAction, getStepsForProjectAction, removeNewStep, skipToSpecifiedStep, updateStepAction} from '../../store/step/actions'
import {convertDate} from '../../helpers'
import tooltipAnchor from '../../assets/icons/stark_tooltip_anchor.png'
import {ErrorMessage} from '../../style/messages'
import {DateInputLabelText} from '../../style/text'
import {WireFrameDeleteButton} from '../../style/buttons'
import {AuthenticatedPageTitle} from '../../style/titles'
import {BEGINNING, DISPLAY_STEP, GROUPS, HOME, PROJECTS, STEPS, TASKS} from '../../routes/paths'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import {ButtonsStatusContainer, DateInputAddStepButtonContainer, DisabledDateInput, DisabledDateLabelContainer, StepChartDetailsContainer, StepDetailsOption,
    StepDetailsStatus, StepDetailsTasklistButton, StepDisplayAddStepButton, StepDisplayErrorContainer, StepTooltipAnchor, ToggleButtonsStatusContainer} from './styles'


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
                    {indexOfStepToDisplay + 1 === steps.length ? (
                        <StepPageTitleWithButtonContainer>
                            <AuthenticatedPageTitle>Step {steps[indexOfStepToDisplay].number}</AuthenticatedPageTitle>
                            <DateInputAddStepButtonContainer>
                                {editStatus ? (
                                    <DateInput date={date} label setDate={setDate} />) : (
                                        <>
                                            <DateInputLabelText>Effective Date:</DateInputLabelText>
                                            <DisabledDateInput
                                                disabled
                                                type='text'
                                                value={steps[indexOfStepToDisplay].effective_date ? steps[indexOfStepToDisplay].effective_date : 'None'}
                                            />
                                        </>)}
                                {indexOfStepToDisplay + 1 === steps.length && steps[indexOfStepToDisplay].id ?
                                    <StepDisplayAddStepButton onClick={addNewStepHandler}>Add New Step</StepDisplayAddStepButton> : null}
                            </DateInputAddStepButtonContainer>
                        </StepPageTitleWithButtonContainer>) : (
                            <StepPageTitleWithButtonContainer>
                                <AuthenticatedPageTitle>Step {indexOfStepToDisplay + 1}</AuthenticatedPageTitle>
                                {editStatus ? (
                                    <DateInput
                                        date={date}
                                        label
                                        setDate={setDate}
                                    />) : (
                                        <DisabledDateLabelContainer>
                                            <DateInputLabelText>Effective Date:</DateInputLabelText>
                                            <DisabledDateInput
                                                disabled
                                                type='text'
                                                value={steps[indexOfStepToDisplay].effective_date ? steps[indexOfStepToDisplay].effective_date : 'None'}
                                            />
                                        </DisabledDateLabelContainer>)}
                            </StepPageTitleWithButtonContainer>)}

                    <ToggleButtonsStatusContainer>
                        <StepDisplayToggle
                            setStepDetailStatus={setStepDetailStatus}
                            stepDetailStatus={stepDetailStatus}
                        />
                        <ButtonsStatusContainer>
                            {indexOfStepToDisplay + 1 === steps.length ? <WireFrameDeleteButton onClick={() => setShowConfirmation(true)}>Delete</WireFrameDeleteButton> : null}
                            <StepDetailsTasklistButton onClick={tasklistButtonClickHandler}>Tasklist</StepDetailsTasklistButton>
                            {!editStatus ? (
                                <StepDetailsStatus disabled onChange={(e) => setStepStatus(e.target.value)} value={stepStatus}>
                                    <StepDetailsOption value={steps[indexOfStepToDisplay].status}>{steps[indexOfStepToDisplay].status}</StepDetailsOption>
                                </StepDetailsStatus>
                                ) : (
                                    <StepDetailsStatus defaultValue={steps[indexOfStepToDisplay].status} onChange={(e) => setStepStatus(e.target.value)} value={stepStatus}>
                                        <StepDetailsOption disabled value=''>Status</StepDetailsOption>
                                        <StepDetailsOption value='Not Started'>Not Started</StepDetailsOption>
                                        <StepDetailsOption value='Ongoing'>Ongoing</StepDetailsOption>
                                        {ableToComplete ?
                                            <StepDetailsOption value='Completed'>Completed</StepDetailsOption> :
                                            <StepDetailsOption disabled value='Completed'>Completed</StepDetailsOption>}
                                    </StepDetailsStatus>
                            )}
                            {!ableToComplete ? (
                                <>
                                    <StepTooltipAnchor>
                                        <img alt='tooltip' data-for='complete' data-tip src={tooltipAnchor} />
                                    </StepTooltipAnchor>
                                    <StepToolTip anchorId='complete' />
                                </>) : null}
                        </ButtonsStatusContainer>
                    </ToggleButtonsStatusContainer>
                    <StepDisplayErrorContainer>
                        {error && <ErrorMessage>{error.status}</ErrorMessage>}
                    </StepDisplayErrorContainer>
                    <StepChartDetailsContainer>
                        {!stepDetailStatus ?
                            <StepChart
                                entities={entities}
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
