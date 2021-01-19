import styled from 'styled-components/macro'
import {BaseButton, DeleteButton} from '../../../../style/buttons'


export const AddEntityLinkButton = styled(BaseButton)`
    width: 100px;
    height: 26px;
`

export const RemoveEntityLinkButton = styled(DeleteButton)`
    width: 120px;
    height: 26px;
`

export const StepChartButtonsContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
