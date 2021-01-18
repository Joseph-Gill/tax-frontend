import styled from 'styled-components/macro'
import {BaseButton, DeleteButton, SaveButton} from '../../../../style/buttons'


export const AddEntityLinkButton = styled(BaseButton)`
    width: 100px;
    height: 26px;
`

export const RemoveEntityLinkButton = styled(DeleteButton)`
    width: 120px;
    height: 26px;
`

export const StepChartSaveButton = styled(SaveButton)`
    height: 26px;
`

export const StepChartButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    align-items: center;
`
