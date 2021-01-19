import React from 'react'
import StepDisplayToggle from './StepDisplayToggle'
import {ToggleButtonsStatusContainer} from './styles'
import StepDetailsButtonsStatus from './StepDetailsButtonsStatus'
import StepChartButtons from './StepChartButtons'


const StepDisplayToggleButtonsStatus = ({ableToComplete, currentStepEntities, editStatus, indexOfStepToDisplay, setShowConfirmation,
                                            setStepDetailStatus, stepDetailStatus, setShowAddEntity, setShowAddLink, setShowRemoveEntity,
                                            setShowRemoveLink, setStepStatus, steps, stepStatus, tasklistButtonClickHandler}) => {
    return (
        <ToggleButtonsStatusContainer>
            <StepDisplayToggle
                setStepDetailStatus={setStepDetailStatus}
                stepDetailStatus={stepDetailStatus}
            />
            {!stepDetailStatus ?
                <StepChartButtons
                    currentStepEntities={currentStepEntities}
                    setShowAddEntity={setShowAddEntity}
                    setShowAddLink={setShowAddLink}
                    setShowRemoveEntity={setShowRemoveEntity}
                    setShowRemoveLink={setShowRemoveLink}
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
