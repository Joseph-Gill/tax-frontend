import React from 'react'
import StepToolTip from '../StepToolTip'
import StepDetailsStatusDropdown from '../../../../components/Dropdowns/StepDetailsStatusDropdown'
import tooltipAnchor from '../../../../assets/icons/stark_tooltip_anchor.png'
import {StepTooltipAnchor} from '../../../../style/anchors'
import {WireFrameDeleteButton} from '../../../../style/buttons'
import {ButtonsStatusContainer, StepDetailsTasklistButton} from './styles'


const StepDetailsButtonsStatus = ({ableToComplete, editStatus, handleStepStatusSelectChange, indexOfStepToDisplay,
                                  setShowConfirmation, setShowStepStatusSelect, showStepStatusSelect, stepStatus,
                                  steps, tasklistButtonClickHandler}) => {

    return (
        <ButtonsStatusContainer>
            {indexOfStepToDisplay + 1 === steps.length ? <WireFrameDeleteButton onClick={() => setShowConfirmation(true)}>Delete</WireFrameDeleteButton> : null}
            <StepDetailsTasklistButton onClick={tasklistButtonClickHandler}>Tasklist</StepDetailsTasklistButton>
            <StepDetailsStatusDropdown
                ableToComplete={ableToComplete}
                disabled={!editStatus}
                handleStepStatusSelectChange={handleStepStatusSelectChange}
                setShowStepStatusSelect={setShowStepStatusSelect}
                showStepStatusSelect={showStepStatusSelect}
                stepStatus={stepStatus}
            />
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
