import React from 'react'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import save from '../../../assets/icons/stark_step_save_icon.svg'
import {DisplayStepButtonText, DisplayStepImage, DisplayStepImageButtonContainer, DisplayStepSectionTitle, DisplayStepTitleContainer} from '../styles'
import {CardInfoText} from '../../../style/text'
import {WireFrameDeleteButton} from '../../../style/buttons'
import {
    StepInfoButtonsContainer,
    StepInfoCancelButton,
    StepInfoChartContainer,
    StepInfoContainer,
    StepInfoDescriptionContainer, StepInfoOption,
    StepInfoSaveButton,
    StepInfoSaveImage,
    StepInfoStatus,
    StepInfoStatusButtonsContainer,
    StepInfoTasklistButton,
    StepInfoTextArea
} from './styles'


const StepInfo = ({description, editStatus, setEditStatus, statusOption, step}) => {
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
                                <StepInfoSaveButton>Save</StepInfoSaveButton>
                            </DisplayStepImageButtonContainer>
                        </DisplayStepImageButtonContainer>)}
            </DisplayStepTitleContainer>
            {!editStatus ? (
                <StepInfoDescriptionContainer>
                    <CardInfoText>{step.description ? step.description : "No Step Description to display, please edit and enter a Step Description."}</CardInfoText>
                </StepInfoDescriptionContainer>) : (
                    <StepInfoTextArea
                        placeholder='Write your step description...'
                        ref={description}
                    />)}
            <StepInfoChartContainer>
                {/*<img alt='chart' src={StepChartPlaceholder} />*/}
            </StepInfoChartContainer>
            <StepInfoStatusButtonsContainer>
                {!editStatus ? (
                    <StepInfoStatus defaultValue={step.status} disabled ref={statusOption}>
                        {step.status ?
                            <StepInfoOption value={step.status}>{step.status}</StepInfoOption> :
                            <StepInfoOption value='None'>None</StepInfoOption>}
                    </StepInfoStatus>
                    ) : (
                        <StepInfoStatus defaultValue={step.status} ref={statusOption}>
                            <StepInfoOption disabled value=''>Status</StepInfoOption>
                            <StepInfoOption value='Not Started'>Not Started</StepInfoOption>
                            <StepInfoOption value='Ongoing'>Ongoing</StepInfoOption>
                            <StepInfoOption value='Completed'>Completed</StepInfoOption>
                        </StepInfoStatus>
                )}
                <StepInfoButtonsContainer>
                    <StepInfoTasklistButton>Tasklist</StepInfoTasklistButton>
                    <WireFrameDeleteButton>Delete</WireFrameDeleteButton>
                </StepInfoButtonsContainer>
            </StepInfoStatusButtonsContainer>
        </StepInfoContainer>
    )
}

export default StepInfo
