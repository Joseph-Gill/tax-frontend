import React from 'react'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import save from '../../../assets/icons/stark_step_save_icon.svg'
import {DisplayStepButtonText, DisplayStepImage, DisplayStepImageButtonContainer, DisplayStepSectionTitle, DisplayStepTitleContainer} from '../styles'
import {CardInfoText} from '../../../style/text'
import {
    StepInfoCancelButton,
    StepInfoContainer,
    StepInfoDescriptionContainer,
    StepInfoSaveButton,
    StepInfoSaveImage,
    StepInfoTextArea
} from './styles'


const StepInfo = ({description, editStatus, saveNewStepHandler, setDescription, setEditStatus, statusOption, step, updateExistingStepHandler}) => {
    return (
        <StepInfoContainer>
            <DisplayStepTitleContainer>
                <DisplayStepSectionTitle>Step Description</DisplayStepSectionTitle>
                {!editStatus ? (
                    <DisplayStepImageButtonContainer onClick={() => setEditStatus(true)}>
                        <DisplayStepImage alt='edit' src={pencil} />
                        <DisplayStepButtonText>Edit</DisplayStepButtonText>
                    </DisplayStepImageButtonContainer>) : (
                        <DisplayStepImageButtonContainer>
                            <StepInfoCancelButton onClick={() => setEditStatus(false)}>Cancel</StepInfoCancelButton>
                            <DisplayStepImageButtonContainer>
                                <StepInfoSaveImage alt='save' src={save} />
                                {step.id ?
                                    <StepInfoSaveButton onClick={updateExistingStepHandler}>Save</StepInfoSaveButton> :
                                    <StepInfoSaveButton onClick={saveNewStepHandler}>Save</StepInfoSaveButton>}
                            </DisplayStepImageButtonContainer>
                        </DisplayStepImageButtonContainer>)}
            </DisplayStepTitleContainer>
            {!editStatus ? (
                <StepInfoDescriptionContainer>
                    <CardInfoText>{step.description ? step.description : "No Step Description to display, please edit and enter a Step Description."}</CardInfoText>
                </StepInfoDescriptionContainer>) : (
                    <StepInfoTextArea
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Write your step description...'
                        value={description}
                    />)}
        </StepInfoContainer>
    )
}

export default StepInfo
