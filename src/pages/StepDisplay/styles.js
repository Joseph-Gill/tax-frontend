import styled from 'styled-components/macro'
import {AddNewStepButton} from '../../style/buttons'
import {NavbarTitle} from '../../style/titles'
import {BaseInput} from '../../style/inputs'


export const DateInputAddStepButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StepDisplayAddStepButton = styled(AddNewStepButton)`
    margin-left: 40px;
`

export const StepInfoTaxConsequencesContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const StepInfoText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
`

export const DisplayStepButtonText = styled(StepInfoText)`
    font-weight: bold;
    color: ${props => props.theme.primaryBlue};
`

export const DisplayStepTitleContainer = styled.div`
    width: 100%;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DisplayStepSectionTitle = styled(NavbarTitle)`
    width: 113px;
`

export const DisplayStepImage = styled.img`
    margin-right: 9px;
`

export const DisplayStepImageButtonContainer = styled.div`
    display: flex;
    align-items: center;

    : hover {
      cursor: pointer;
    }
`

export const DisabledDateInput = styled(BaseInput)`
    width: 128px;
    height: 32px;
`
