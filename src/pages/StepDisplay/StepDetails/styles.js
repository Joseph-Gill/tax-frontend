import styled from 'styled-components/macro'
import {StepInfoText} from '../styles'
import {device as devices} from '../../../style/devices'


export const StepDetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 20px 10px 20px;

`

export const StepDescriptionTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StepDescriptionTaxTitleContainer = styled(StepDescriptionTitleContainer)`
    margin-top: 10px;
`

export const StepDetailErrorContainer = styled.div`
    height: 10px;
    display: flex;
    justify-content: center;
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

    :hover {
        text-decoration: underline;
    }
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
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    width: 100%;
    height: 70px;
    max-height: 70px;
    overflow: auto;
    color: ${props => props.theme.grayOne};
    font-weight: 600;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;

    ul, li {
        list-style-position: inside;
    }
`

export const TaxConsequencesContainer = styled.div`
    width: 100%;
    height: ${props => props.editStatus ? '70px' : '200px'};
    max-height: ${props => props.editStatus ? '70px' : '200px'};
    margin-top: 10px;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    overflow: auto;

    @media ${devices.laptopL} {
        height: ${props => props.editStatus ? '323px' : '452px'};
        max-height: ${props => props.editStatus ? '323px' : '452px'};
    }
`

export const NewStepNoTaxConsequencesContainer = styled.div`
    height: 99px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${devices.laptopL} {
        height: 468px;
    }

    p {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        line-height: 19px;
        color: ${props => props.theme.grayTwo};
    }
`
