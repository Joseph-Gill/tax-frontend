import React from 'react'
import {StepPageTitleWithButtonContainer} from '../../../style/containers'
import {AuthenticatedPageTitle} from '../../../style/titles'
import StepDisplayTitleEffectiveDate from './StepDisplayTitleEffectiveDate'


const StepDisplayTitle = ({addNewStepHandler, date, editStatus, indexOfStepToDisplay, setDate, steps}) => {
    return (
        <StepPageTitleWithButtonContainer>
            <AuthenticatedPageTitle>Step {steps[indexOfStepToDisplay].number}</AuthenticatedPageTitle>
            <StepDisplayTitleEffectiveDate
                addNewStepHandler={addNewStepHandler}
                date={date}
                editStatus={editStatus}
                indexOfStepToDisplay={indexOfStepToDisplay}
                setDate={setDate}
                steps={steps}
            />
        </StepPageTitleWithButtonContainer>
    )
}

export default StepDisplayTitle