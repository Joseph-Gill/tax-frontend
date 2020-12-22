import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {NoFilterResultsContainer, StatusLegendContainer} from '../../style/containers'


export const BeginningStructureButton = styled(BaseButton)`
    width: 180px;
    height: 32px;
`

export const NoStepsContainer = styled(NoFilterResultsContainer)`
    margin-top: 21px;
`

export const NoStepsButton = styled(BaseButton)`
    width: 108px;
    height: 32px;
    margin-top: 25px;
`

export const StepStatusLegendContainer = styled(StatusLegendContainer)`
    width: 303px;
`
