import React from 'react'
import {NavbarTitle} from '../../../style/titles'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import addConsequence from '../../../assets/icons/stark_add_country_consequence_icon.svg'
import save from '../../../assets/icons/stark_step_save_icon.svg'
import {CardInfoText} from '../../../style/text'
import {
    DisplayStepButtonText,
    DisplayStepImage,
    DisplayStepImageButtonContainer, StepDescriptionTaxTitleContainer,
    StepDescriptionTitleContainer,
    StepDetailsContainer,
    StepInfoCancelButton,
    StepInfoDescriptionContainer,
    StepInfoSaveButton,
    StepInfoSaveImage,
    StepInfoTextArea, TaxConsequencesContainer
} from './styles'
import TaxConsequenceCard from './TaxConsequnceCard'



const StepDetails = ({description, editStatus, saveNewStepHandler, setDescription, setEditStatus, step, updateExistingStepHandler}) => {
    return (
        <StepDetailsContainer>
            <StepDescriptionTitleContainer>
                <NavbarTitle>Step Description</NavbarTitle>
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
            </StepDescriptionTitleContainer>
            {!editStatus ? (
                <StepInfoDescriptionContainer>
                    <CardInfoText>{step.description ? step.description : "No Step Description to display, please edit and enter a Step Description."}</CardInfoText>
                </StepInfoDescriptionContainer>) : (
                    <StepInfoTextArea
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Write your step description...'
                        value={description}
                    />)}
            <StepDescriptionTaxTitleContainer>
                <NavbarTitle>Tax Consequences</NavbarTitle>
                <DisplayStepImageButtonContainer>
                    <DisplayStepImage alt='add country consequence' src={addConsequence} />
                    <DisplayStepButtonText>Add Country Consequence</DisplayStepButtonText>
                </DisplayStepImageButtonContainer>
            </StepDescriptionTaxTitleContainer>
            <TaxConsequencesContainer>
                <TaxConsequenceCard />
            </TaxConsequencesContainer>
        </StepDetailsContainer>
    )
}

export default StepDetails
