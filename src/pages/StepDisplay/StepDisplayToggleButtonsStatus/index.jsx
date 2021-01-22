import React from 'react'
import StepChartButtons from './StepChartButtons'
import StepDisplayToggle from './StepDisplayToggle'
import StepDetailsButtonsStatus from './StepDetailsButtonsStatus'
import {ToggleButtonsStatusContainer} from './styles'


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
                    indexOfStepToDisplay={indexOfStepToDisplay}
                    setShowAddEntity={setShowAddEntity}
                    setShowAddLink={setShowAddLink}
                    setShowRemoveEntity={setShowRemoveEntity}
                    setShowRemoveLink={setShowRemoveLink}
                    steps={steps}
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
