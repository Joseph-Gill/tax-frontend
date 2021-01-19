import styled from 'styled-components/macro'
import {BaseButton, DeleteButton} from '../../../../style/buttons'


export const AddEntityLinkButton = styled(BaseButton)`
    width: 100px;
    height: 26px;

    :disabled {
        box-shadow: none;
    }
`

export const RemoveEntityLinkButton = styled(DeleteButton)`
    width: 120px;
    height: 26px;

    :disabled {
        background: #D3D3D3;
        box-shadow: none;
    }
`

export const StepChartButtonsContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
