import React from 'react'
import styled from 'styled-components/macro'
import {NavbarTitle} from '../../../style/titles'
import {StepInfoText} from '../styles'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import addConsequence from '../../../assets/icons/stark_add_country_consequence_icon.svg'
import save from '../../../assets/icons/stark_step_save_icon.svg'
import {ProjectDescriptionTextArea} from '../../../style/textarea'
import {CardInfoText} from '../../../style/text'

const StepDetailsContainer = styled.div`
    width: 860px;
    height: 400px;
    padding: 15px 20px 10px 20px;
`

const StepDescriptionTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StepDescriptionTaxTitleContainer = styled(StepDescriptionTitleContainer)`
    margin-top: 20px;
`

const DisplayStepImageButtonContainer = styled.div`
    display: flex;
    align-items: center;

    : hover {
      cursor: pointer;
    }
`

const DisplayStepImage = styled.img`
    margin-right: 9px;
`

const DisplayStepButtonText = styled(StepInfoText)`
    font-weight: bold;
    color: ${props => props.theme.primaryBlue};
`

const StepInfoCancelButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.grayTwo};
    margin-right: 19px;
`

const StepInfoSaveImage = styled.img`
    margin-right: 9px;
`

const StepInfoSaveButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.green};
`

const StepInfoDescriptionContainer = styled.div`
    margin-top: 7px;
    height: 70px;
    max-height: 70px;
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
    width: 820px;
    height: 78px;
    margin-top: 5px;
    padding: 7px;
`

const TaxConsequencesContainer = styled.div`
    width: 820px;
    height: 230px;
    max-height: 230px;
    margin-top: 10px;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
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

            </TaxConsequencesContainer>
        </StepDetailsContainer>
    )
}

export default StepDetails
