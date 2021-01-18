import React from 'react'
import StepDisplayToggle from './StepDisplayToggle'
import tooltipAnchor from '../../../assets/icons/stark_tooltip_anchor.png'
import {WireFrameDeleteButton} from '../../../style/buttons'
import {ToggleButtonsStatusContainer} from './styles'
import StepDetailsButtonsStatus from './StepDetailsButtonsStatus'


const StepDisplayToggleButtonsStatus = ({ableToComplete, editStatus, indexOfStepToDisplay, setShowConfirmation, setStepDetailStatus,
                                            stepDetailStatus, setStepStatus, steps, stepStatus, tasklistButtonClickHandler}) => {
    return (
        <ToggleButtonsStatusContainer>
            <StepDisplayToggle
                setStepDetailStatus={setStepDetailStatus}
                stepDetailStatus={stepDetailStatus}
            />
            {!stepDetailStatus ? null : (
                <StepDetailsButtonsStatus
                    ableToComplete={ableToComplete}
                    editStatus={editStatus}
                    indexOfStepToDisplay={indexOfStepToDisplay}
                    setShowConfirmation={setShowConfirmation}
                    setStepStatus={setStepStatus}
                    stepStatus={stepStatus}
                    steps={steps}
                    tasklistButtonClickHandler={tasklistButtonClickHandler}
                />)}
        </ToggleButtonsStatusContainer>
    )
}

export default StepDisplayToggleButtonsStatus
