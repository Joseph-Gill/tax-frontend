import React from 'react'
import {AddEntityLinkButton, RemoveEntityLinkButton, StepChartButtonsContainer, StepChartSaveButton} from './styles'


const StepChartButtons = ({setShowAddEntity, setShowAddLink, setShowRemoveLink}) => {
    return (
        <StepChartButtonsContainer>
            <AddEntityLinkButton onClick={() => setShowAddEntity(true)}>Add Entity</AddEntityLinkButton>
            <AddEntityLinkButton onClick={() => setShowAddLink(true)}>Add Link</AddEntityLinkButton>
            <RemoveEntityLinkButton onClick={() => setShowRemoveLink(true)}>Remove Link</RemoveEntityLinkButton>
            <RemoveEntityLinkButton>Remove Entity</RemoveEntityLinkButton>
            <StepChartSaveButton>Save</StepChartSaveButton>
        </StepChartButtonsContainer>
    )
}

export default StepChartButtons
