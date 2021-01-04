import styled from 'styled-components/macro'
import {AddNewStepButton, TableButton} from '../../style/buttons'
import {NavbarTitle} from '../../style/titles'
import {BaseInput} from '../../style/inputs'
import {StatusDropdown} from '../../style/dropdowns'
import {DropdownOption} from '../../style/options'


export const DateInputAddStepButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StepDisplayAddStepButton = styled(AddNewStepButton)`
    margin-left: 40px;
`

export const StepInfoText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
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

export const DisabledDateInput = styled(BaseInput)`
    width: 128px;
    height: 32px;
`

export const DisabledDateLabelContainer = styled.div`
    display: flex;
    align-items: center;
`

export const ToggleButtonsStatusContainer = styled.div`
    width: 860px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

export const ButtonsStatusContainer = styled.div`
    display: flex;
`

export const StepChartDetailsContainer = styled.div`
    width: 860px;
    height: 400px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StepDetailsTasklistButton = styled(TableButton)`
    width: 78px;
    height: 26px;
    margin-left: 20px;
`

export const StepDetailsStatus = styled(StatusDropdown)`
    width: 102px;
    height: 26px;
    background-color: ${props => props.theme.white};
    background-position-x: 84px;
    font-size: 12px;
    line-height: 16px;
    margin-left: 20px;
`

export const StepDetailsOption = styled(DropdownOption)`
    font-size: 10px;
    line-height: 14px;
`

export const StepDisplayErrorContainer = styled.div`
    width: 860px;
    height: 10px;
    display: flex;
    justify-content: flex-end;
`
