import React from 'react'
import styled from 'styled-components/macro'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import save from '../../../assets/icons/stark_step_save_icon.svg'
import {DisplayStepButtonText, DisplayStepImage, DisplayStepImageButtonContainer, DisplayStepSectionTitle, DisplayStepTitleContainer} from '../styles'
import {CardInfoText} from '../../../style/text'
import {ProjectDescriptionTextArea} from '../../../style/textarea'
import {StepChartPlaceholder} from '../../../style'


const StepInfoContainer = styled.div`
    width: 343px;
    height: 438px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px 21px 24px 20px;
`

const StepInfoCancelButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.grayTwo};
    margin-right: 19px;
`

const StepInfoSaveButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.green};
`

const StepInfoSaveImage = styled.img`
    margin-right: 9px;
`

const StepInfoDescriptionContainer = styled.div`
    margin-top: 10px;
    height: 78px;
    max-height: 78px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.grayTwo};
    }
`

const StepInfoTextArea = styled(ProjectDescriptionTextArea)`
    width: 302px;
    height: 78px;
    margin-top: 10px;
`

const StepInfoChartContainer = styled.div`
    width: 302px;
    height: 228px;
    margin-top: 20px;
`

const StepInfo = ({description, editStatus, setEditStatus, step}) => {
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
                    <CardInfoText>{step.description ? step.description : "No Description to display, please edit and enter one."}</CardInfoText>
                </StepInfoDescriptionContainer>) : (
                        <StepInfoTextArea
                            placeholder='Write your step description...'
                            ref={description}
                        />)}
            <StepInfoChartContainer>
                <img alt='chart' src={StepChartPlaceholder} />
            </StepInfoChartContainer>
        </StepInfoContainer>
    )
}

export default StepInfo
