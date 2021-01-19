import React from 'react'
import {AddEntityLinkButton, RemoveEntityLinkButton, StepChartButtonsContainer} from './styles'


const StepChartButtons = ({currentStepEntities, setShowAddEntity, setShowAddLink, setShowRemoveEntity, setShowRemoveLink}) => {
    return (
        <StepChartButtonsContainer>
            <AddEntityLinkButton
                disabled={!currentStepEntities.length}
                onClick={() => setShowAddEntity(true)}
            >Add Entity
            </AddEntityLinkButton>
            <AddEntityLinkButton
                disabled={!currentStepEntities.length}
                onClick={() => setShowAddLink(true)}
            >Add Link
            </AddEntityLinkButton>
            <RemoveEntityLinkButton
                disabled={!currentStepEntities.length}
                onClick={() => setShowRemoveLink(true)}
            >Remove Link
            </RemoveEntityLinkButton>
            <RemoveEntityLinkButton
                disabled={!currentStepEntities.length}
                onClick={() => setShowRemoveEntity(true)}
            >Remove Entity
            </RemoveEntityLinkButton>
        </StepChartButtonsContainer>
    )
}

export default StepChartButtons
