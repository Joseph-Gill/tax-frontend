import styled from 'styled-components/macro'
import {StepInfoText} from '../styles'
import {ProjectDescriptionTextArea} from '../../../style/textarea'


export const StepDetailsContainer = styled.div`
    width: 860px;
    height: 400px;
    padding: 15px 20px 10px 20px;
`

export const StepDescriptionTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StepDescriptionTaxTitleContainer = styled(StepDescriptionTitleContainer)`
    margin-top: 20px;
`

export const DisplayStepImageButtonContainer = styled.div`
    display: flex;
    align-items: center;

    : hover {
      cursor: pointer;
    }
`

export const DisplayStepImage = styled.img`
    margin-right: 9px;
`

export const DisplayStepButtonText = styled(StepInfoText)`
    font-weight: bold;
    color: ${props => props.theme.primaryBlue};
`

export const StepInfoCancelButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.grayTwo};
    margin-right: 19px;
`

export const StepInfoSaveImage = styled.img`
    margin-right: 9px;
`

export const StepInfoSaveButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.green};
`

export const StepInfoDescriptionContainer = styled.div`
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

export const StepInfoTextArea = styled(ProjectDescriptionTextArea)`
    width: 820px;
    height: 68px;
    margin-top: 5px;
    padding: 7px;
`

export const TaxConsequencesContainer = styled.div`
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
