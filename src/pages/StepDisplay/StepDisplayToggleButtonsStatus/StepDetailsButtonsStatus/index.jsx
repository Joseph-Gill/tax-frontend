import React from 'react'
import {WireFrameDeleteButton} from '../../../../style/buttons'
import tooltipAnchor from '../../../../assets/icons/stark_tooltip_anchor.png'
import {ButtonsStatusContainer, StepDetailsOption, StepDetailsStatus, StepDetailsTasklistButton, StepTooltipAnchor} from './styles'
import StepToolTip from '../StepToolTip'


const StepDetailsButtonsStatus = ({ableToComplete, editStatus, indexOfStepToDisplay, setShowConfirmation,
                                  setStepStatus, stepStatus, steps, tasklistButtonClickHandler}) => {
    return (
        <ButtonsStatusContainer>
            {indexOfStepToDisplay + 1 === steps.length ? <WireFrameDeleteButton onClick={() => setShowConfirmation(true)}>Delete</WireFrameDeleteButton> : null}
            <StepDetailsTasklistButton onClick={tasklistButtonClickHandler}>Tasklist</StepDetailsTasklistButton>
            {!editStatus ? (
                <StepDetailsStatus disabled onChange={(e) => setStepStatus(e.target.value)} value={stepStatus}>
                    <StepDetailsOption value={steps[indexOfStepToDisplay].status}>{steps[indexOfStepToDisplay].status}</StepDetailsOption>
                </StepDetailsStatus>
                ) : (
                    <StepDetailsStatus defaultValue={steps[indexOfStepToDisplay].status} onChange={(e) => setStepStatus(e.target.value)} value={stepStatus}>
                        <StepDetailsOption disabled value=''>Select status</StepDetailsOption>
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
    )
}

export default StepDetailsButtonsStatus
