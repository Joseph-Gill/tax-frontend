import React from 'react'
import StepChartButtons from './StepChartButtons'
import StepDisplayToggle from './StepDisplayToggle'
import StepDetailsButtonsStatus from './StepDetailsButtonsStatus'
import {ToggleButtonsStatusContainer} from './styles'


const StepDisplayToggleButtonsStatus = ({ableToComplete, currentStepEntities, editStatus, handleStepStatusSelectChange, indexOfStepToDisplay,
                                            setShowConfirmation, setStepDetailStatus, stepDetailStatus, setShowAddEntity, setShowAddLink,
                                            setShowEditEntity, setShowEditLink, setShowPredefinedChangeLegalForm, setShowPredefinedContribution,
                                            setShowPredefinedDistribution, setShowPredefinedIncorporate, setShowPredefinedIntercompanySale,
                                            setShowPredefinedLiquidation, setShowPredefinedMerger, setShowRemoveEntity, setShowRemoveLink,
                                            setShowStepStatusSelect, showStepStatusSelect, steps, stepStatus, tasklistButtonClickHandler}) => {
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
                    setShowEditEntity={setShowEditEntity}
                    setShowEditLink={setShowEditLink}
                    setShowPredefinedChangeLegalForm={setShowPredefinedChangeLegalForm}
                    setShowPredefinedContribution={setShowPredefinedContribution}
                    setShowPredefinedDistribution={setShowPredefinedDistribution}
                    setShowPredefinedIncorporate={setShowPredefinedIncorporate}
                    setShowPredefinedIntercompanySale={setShowPredefinedIntercompanySale}
                    setShowPredefinedLiquidation={setShowPredefinedLiquidation}
                    setShowPredefinedMerger={setShowPredefinedMerger}
                    setShowRemoveEntity={setShowRemoveEntity}
                    setShowRemoveLink={setShowRemoveLink}
                    steps={steps}
                /> : (
                    <StepDetailsButtonsStatus
                        ableToComplete={ableToComplete}
                        editStatus={editStatus}
                        handleStepStatusSelectChange={handleStepStatusSelectChange}
                        indexOfStepToDisplay={indexOfStepToDisplay}
                        setShowConfirmation={setShowConfirmation}
                        setShowStepStatusSelect={setShowStepStatusSelect}
                        showStepStatusSelect={showStepStatusSelect}
                        stepStatus={stepStatus}
                        steps={steps}
                        tasklistButtonClickHandler={tasklistButtonClickHandler}
                    />)}
        </ToggleButtonsStatusContainer>
    )
}

export default StepDisplayToggleButtonsStatus
