import React, {useState, useEffect} from 'react'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import {AuthenticatedPageTitle} from '../../style/titles'
import DateInput from '../../components/DateInput'
import {
    ButtonsStatusContainer,
    DateInputAddStepButtonContainer,
    DisabledDateInput,
    DisabledDateLabelContainer,
    StepChartDetailsContainer, StepDetailsOption,
    StepDetailsStatus,
    StepDetailsTasklistButton,
    StepDisplayAddStepButton,
    ToggleButtonsStatusContainer
} from './styles'
import {DateInputLabelText} from '../../style/text'
import {convertDate} from '../../helpers'
import StepDisplayFooter from '../../components/StepDisplayFooter'
import {addNewStep, createNewStepAction, getStepsForProjectAction, skipToSpecifiedStep, updateStepAction} from '../../store/step/actions'
import StepDisplayToggle from './StepDisplayToggle'
import StepChart from './StepChart'
import {WireFrameDeleteButton} from '../../style/buttons'
import StepDetails from './StepDetails'
import Spinner from '../../components/Spinner'


const StepDisplay = ({history}) => {
    const dispatch = useDispatch()
    const indexOfStepToDisplay = useSelector(state => state.stepReducer.indexOfCurrentStepToDisplay)
    const steps = useSelector(state => state.stepReducer.steps)
    const project = useSelector(state => state.projectReducer.project)
    const [editStatus, setEditStatus] = useState(false)
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('')
    const [stepDetailStatus, setStepDetailStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const [stepStatus, setStepStatus] = useState('')

    useEffect(() => {
        if (!steps[indexOfStepToDisplay].id) {
            setEditStatus(true)
        }
        setDescription(steps[indexOfStepToDisplay].description)
        setStepStatus(steps[indexOfStepToDisplay].status)
    }, [steps, indexOfStepToDisplay])


    const saveNewStepHandler = async () => {
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
        }
    }

    const updateExistingStepHandler = async () => {
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
    }

    const addNewStepHandler = () => {
        setDescription('')
        dispatch(addNewStep(indexOfStepToDisplay + 2))
        dispatch(skipToSpecifiedStep(indexOfStepToDisplay + 1))
    }

    return (
        <AuthenticatedPageContainer>
            {loading ? <Spinner /> : null}
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
                            <DateInput
                                date={date}
                                label
                                setDate={setDate}
                            />) : (
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
                    {indexOfStepToDisplay + 1 === steps.length ? <WireFrameDeleteButton>Delete</WireFrameDeleteButton> : null}
                    <StepDetailsTasklistButton>Tasklist</StepDetailsTasklistButton>
                    {!editStatus ? (
                        <StepDetailsStatus disabled onChange={(e) => setStepStatus(e.target.value)} value={stepStatus}>
                            <StepDetailsOption value={steps[indexOfStepToDisplay].status}>{steps[indexOfStepToDisplay].status}</StepDetailsOption>
                        </StepDetailsStatus>
                        ) : (
                            <StepDetailsStatus defaultValue={steps[indexOfStepToDisplay].status} onChange={(e) => setStepStatus(e.target.value)} value={stepStatus}>
                                <StepDetailsOption disabled value=''>Status</StepDetailsOption>
                                <StepDetailsOption value='Not Started'>Not Started</StepDetailsOption>
                                <StepDetailsOption value='Ongoing'>Ongoing</StepDetailsOption>
                                <StepDetailsOption value='Completed'>Completed</StepDetailsOption>
                            </StepDetailsStatus>
                    )}
                </ButtonsStatusContainer>
            </ToggleButtonsStatusContainer>
            <StepChartDetailsContainer>
                {!stepDetailStatus ?
                    <StepChart /> :
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
            <StepDisplayFooter
                endingActive={0}
                history={history}
                indexOfStepToDisplay={indexOfStepToDisplay}
                steps={steps}
            />
        </AuthenticatedPageContainer>
    )
}

export default StepDisplay
