import React from 'react'
import StepToolTip from './StepToolTip'
import StepDisplayToggle from './StepDisplayToggle'
import tooltipAnchor from '../../../assets/icons/stark_tooltip_anchor.png'
import {WireFrameDeleteButton} from '../../../style/buttons'
import {ButtonsStatusContainer, StepDetailsOption, StepDetailsStatus, StepDetailsTasklistButton, StepTooltipAnchor, ToggleButtonsStatusContainer} from './styles'


const StepDisplayToggleButtonsStatus = ({ableToComplete, editStatus, indexOfStepToDisplay, setShowConfirmation, setStepDetailStatus,
                                            stepDetailStatus, setStepStatus, steps, stepStatus, tasklistButtonClickHandler}) => {
    return (
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
    )
}

export default StepDisplayToggleButtonsStatus
