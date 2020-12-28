import styled from 'styled-components/macro'
import {AddNewStepButton, BaseButton} from '../../style/buttons'
import {NoFilterResultsContainer, StatusLegendContainer} from '../../style/containers'


export const BeginningStructureButton = styled(BaseButton)`
    width: 180px;
    height: 32px;
`

export const NoStepsContainer = styled(NoFilterResultsContainer)`
`

export const NoStepsButton = styled(AddNewStepButton)`
    margin-top: 25px;
`

export const StepStatusLegendContainer = styled(StatusLegendContainer)`
    width: 303px;
`
