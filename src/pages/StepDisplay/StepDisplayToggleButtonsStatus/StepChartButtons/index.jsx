import React from 'react'
import {AddEntityLinkButton, RemoveEntityLinkButton, StepChartButtonsContainer} from './styles'


const StepChartButtons = ({currentStepEntities, indexOfStepToDisplay, setShowAddEntity, setShowAddLink,
                              setShowRemoveEntity, setShowRemoveLink, steps}) => {
    return (
        <StepChartButtonsContainer>
            <AddEntityLinkButton
                disabled={!currentStepEntities.length || !steps[indexOfStepToDisplay].id}
                onClick={() => setShowAddEntity(true)}
            >Add Entity
            </AddEntityLinkButton>
            <AddEntityLinkButton
                disabled={!currentStepEntities.length || !steps[indexOfStepToDisplay].id}
                onClick={() => setShowAddLink(true)}
            >Add Link
            </AddEntityLinkButton>
            <RemoveEntityLinkButton
                disabled={!currentStepEntities.length || !steps[indexOfStepToDisplay].id}
                onClick={() => setShowRemoveLink(true)}
            >Remove Link
            </RemoveEntityLinkButton>
            <RemoveEntityLinkButton
                disabled={!currentStepEntities.length || !steps[indexOfStepToDisplay].id}
                onClick={() => setShowRemoveEntity(true)}
            >Remove Entity
            </RemoveEntityLinkButton>
        </StepChartButtonsContainer>
    )
}

export default StepChartButtons
