import React from 'react'
import {AddEntityLinkButton, RemoveEntityLinkButton, StepChartButtonsContainer, StepChartSaveButton} from './styles'


const StepChartButtons = ({setShowAddEntity}) => {
    return (
        <StepChartButtonsContainer>
            <AddEntityLinkButton onClick={() => setShowAddEntity(true)}>Add Entity</AddEntityLinkButton>
            <AddEntityLinkButton>Add Link</AddEntityLinkButton>
            <RemoveEntityLinkButton>Remove Link</RemoveEntityLinkButton>
            <RemoveEntityLinkButton>Remove Entity</RemoveEntityLinkButton>
            <StepChartSaveButton>Save</StepChartSaveButton>
        </StepChartButtonsContainer>
    )
}

export default StepChartButtons
