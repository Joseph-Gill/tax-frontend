import React from 'react'
import StepDisplayToggle from './StepDisplayToggle'
import {ToggleButtonsStatusContainer} from './styles'
import StepDetailsButtonsStatus from './StepDetailsButtonsStatus'
import StepChartButtons from './StepChartButtons'


const StepDisplayToggleButtonsStatus = ({ableToComplete, editStatus, indexOfStepToDisplay, setShowConfirmation, setStepDetailStatus,
                                            stepDetailStatus, setShowAddEntity, setShowAddLink, setStepStatus, steps, stepStatus,
                                            tasklistButtonClickHandler}) => {
    return (
        <ToggleButtonsStatusContainer>
            <StepDisplayToggle
                setStepDetailStatus={setStepDetailStatus}
                stepDetailStatus={stepDetailStatus}
            />
            {!stepDetailStatus ?
                <StepChartButtons
                    setShowAddEntity={setShowAddEntity}
                    setShowAddLink={setShowAddLink}
                /> : (
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
