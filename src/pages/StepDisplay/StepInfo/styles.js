import styled from 'styled-components/macro'
import {DisplayStepButtonText} from '../styles'
import {ProjectDescriptionTextArea} from '../../../style/textarea'


export const StepInfoContainer = styled.div`
    width: 343px;
    height: 408px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px 21px 24px 20px;
`

export const StepInfoCancelButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.grayTwo};
    margin-right: 19px;
`

export const StepInfoSaveButton = styled(DisplayStepButtonText)`
    color: ${props => props.theme.green};
`

export const StepInfoSaveImage = styled.img`
    margin-right: 9px;
`

export const StepInfoDescriptionContainer = styled.div`
    margin-top: 7px;
    height: 80px;
    max-height: 80px;
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
    width: 302px;
    height: 78px;
    margin-top: 5px;
    padding: 7px;
`
