import React, {useState, useRef, useEffect} from 'react'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import {AuthenticatedPageTitle} from '../../style/titles'
import DateInput from '../../components/DateInput'
import {DateInputAddStepButtonContainer, DisabledDateInput, StepDisplayAddStepButton, StepInfoTaxConsequencesContainer} from './styles'
import StepInfo from './StepInfo'
import TaxInfo from './TaxInfo'
import {DateInputLabelText} from '../../style/text'
import {convertDate} from '../../helpers'


const StepDisplay = () => {
    let description = useRef('')
    let statusOption = useRef('')
    const indexOfStepToDisplay = useSelector(state => state.stepReducer.indexOfCurrentStepToDisplay)
    const steps = useSelector(state => state.projectReducer.project.steps)
    const project = useSelector(state => state.projectReducer.project)
    const [editStatus, setEditStatus] = useState(false)
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (!steps[indexOfStepToDisplay].id){
            setEditStatus(true)
        }
    }, [indexOfStepToDisplay, steps])

    const saveNewStepHandler = () => {
        const newStepData = {
            description: description.current.value,
            status: statusOption.current.value,
            effective_date: convertDate(date)
        }
        console.log(newStepData)
    }

    return (
        <AuthenticatedPageContainer>
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
                next={steps.length > indexOfStepToDisplay + 1 ? 1 : 0}
                previous={1}
            />
            {indexOfStepToDisplay + 1 === steps.length ? (
                <StepPageTitleWithButtonContainer>
                    <AuthenticatedPageTitle>Step {indexOfStepToDisplay + 1}</AuthenticatedPageTitle>
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
                        {!indexOfStepToDisplay + 1 === steps.length ?
                            <StepDisplayAddStepButton>Add New Step</StepDisplayAddStepButton> : null}
                    </DateInputAddStepButtonContainer>
                </StepPageTitleWithButtonContainer>) : (
                    <StepPageTitleWithButtonContainer>
                        <AuthenticatedPageTitle>Step {indexOfStepToDisplay + 1}</AuthenticatedPageTitle>
                        <DateInput
                            date={date}
                            label
                            setDate={setDate}
                        />
                    </StepPageTitleWithButtonContainer>)}
            <StepInfoTaxConsequencesContainer>
                <StepInfo
                    description={description}
                    editStatus={editStatus}
                    saveNewStepHandler={saveNewStepHandler}
                    setEditStatus={setEditStatus}
                    statusOption={statusOption}
                    step={steps[indexOfStepToDisplay]}
                />
                <TaxInfo />
            </StepInfoTaxConsequencesContainer>
        </AuthenticatedPageContainer>
    )
}

export default StepDisplay
