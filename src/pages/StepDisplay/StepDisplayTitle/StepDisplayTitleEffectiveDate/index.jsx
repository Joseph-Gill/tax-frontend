import React from 'react'
import DateInput from '../../../../components/DateInput'
import {DateInputLabelText} from '../../../../style/text'
import {DateInputAddStepButtonContainer, DisabledDateInput, StepDisplayAddStepButton} from './styles'


const StepDisplayTitleEffectiveDate = ({addNewStepHandler, date, editStatus, indexOfStepToDisplay, setDate, steps}) => {
    return (
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
    )
}

export default StepDisplayTitleEffectiveDate
