import React from 'react'
import {AddEntityLinkButton, RemoveEntityLinkButton} from '../../../../style/buttons'
import {StepChartButtonsContainer} from './styles'


const StepChartButtons = ({currentStepEntities, indexOfStepToDisplay, setShowAddEntity, setShowAddLink,
                              setShowRemoveEntity, setShowRemoveLink, steps}) => {
    return (
        <StepChartButtonsContainer>
            <AddEntityLinkButton
                disabled={!steps[indexOfStepToDisplay].id ? true : !currentStepEntities.length}
                onClick={() => setShowAddEntity(true)}
            >Add Entity
            </AddEntityLinkButton>
            <AddEntityLinkButton
                disabled={!steps[indexOfStepToDisplay].id ? true : !currentStepEntities.length}
                onClick={() => setShowAddLink(true)}
            >Add Link
            </AddEntityLinkButton>
            <RemoveEntityLinkButton
                disabled={!steps[indexOfStepToDisplay].id ? true : !currentStepEntities.length}
                onClick={() => setShowRemoveLink(true)}
            >Remove Link
            </RemoveEntityLinkButton>
            <RemoveEntityLinkButton
                disabled={!steps[indexOfStepToDisplay].id ? true : !currentStepEntities.length}
                onClick={() => setShowRemoveEntity(true)}
            >Remove Entity
            </RemoveEntityLinkButton>
        </StepChartButtonsContainer>
    )
}

export default StepChartButtons
