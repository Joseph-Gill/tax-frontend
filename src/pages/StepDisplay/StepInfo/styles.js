import styled from 'styled-components/macro'
import {DisplayStepButtonText} from '../styles'
import {ProjectDescriptionTextArea} from '../../../style/textarea'
import {TableButton} from '../../../style/buttons'
import {StatusDropdown} from '../../../style/dropdowns'
import {DropdownOption} from '../../../style/options'


export const StepInfoContainer = styled.div`
    width: 343px;
    height: 438px;
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

export const StepInfoChartContainer = styled.div`
    width: 302px;
    height: 228px;
    margin-top: 20px;
    background: ${props => props.theme.graySix};
    border-radius: ${props => props.theme.borderRadius};
`

export const StepInfoStatusButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const StepInfoButtonsContainer = styled.div`
    display: flex;
`

export const StepInfoTasklistButton = styled(TableButton)`
    width: 78px;
    height: 26px;
    margin-right: 10px;
`

export const StepInfoStatus = styled(StatusDropdown)`
    width: 102px;
    height: 26px;
    background-position-x: 84px;
    font-size: 12px;
    line-height: 16px;
`

export const StepInfoOption = styled(DropdownOption)`
    font-size: 10px;
    line-height: 14px;
`
