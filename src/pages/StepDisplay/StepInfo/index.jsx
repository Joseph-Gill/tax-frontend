import React from 'react'
import styled from 'styled-components/macro'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import {DisplayStepButtonText, DisplayStepImage, DisplayStepImageButtonContainer, DisplayStepSectionTitle, DisplayStepTitleContainer} from '../styles'


const StepInfoContainer = styled.div`
    width: 343px;
    height: 438px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px 21px 24px 20px;
`

const StepInfo = () => {
    return (
        <StepInfoContainer>
            <DisplayStepTitleContainer>
                <DisplayStepSectionTitle>Step Description</DisplayStepSectionTitle>
                <DisplayStepImageButtonContainer>
                    <DisplayStepImage alt='edit' src={pencil} />
                    <DisplayStepButtonText>Edit</DisplayStepButtonText>
                </DisplayStepImageButtonContainer>
            </DisplayStepTitleContainer>
        </StepInfoContainer>
    )
}

export default StepInfo
