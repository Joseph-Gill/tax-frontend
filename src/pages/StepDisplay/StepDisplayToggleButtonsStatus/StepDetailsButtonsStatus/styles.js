import styled from 'styled-components/macro'
import {TableButton} from '../../../../style/buttons'
import {StatusDropdown} from '../../../../style/dropdowns'
import {DropdownOption} from '../../../../style/options'


export const ButtonsStatusContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StepDetailsTasklistButton = styled(TableButton)`
    width: 78px;
    height: 26px;
    margin-left: 20px;
`

export const StepDetailsStatus = styled(StatusDropdown)`
    width: 107px;
    height: 26px;
    background-color: ${props => props.theme.white};
    font-size: 12px;
    line-height: 16px;
    margin-left: 20px;
`

export const StepDetailsOption = styled(DropdownOption)`
    font-size: 10px;
    line-height: 14px;
`

export const StepTooltipAnchor = styled.a`
    margin-left: 10px;
`
