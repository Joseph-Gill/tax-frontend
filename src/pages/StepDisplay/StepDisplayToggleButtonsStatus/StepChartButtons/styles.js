import styled from 'styled-components/macro'
import {TableButton, WireFrameDeleteButton} from '../../../../style/buttons'


export const AddEntityLinkButton = styled(TableButton)`
    width: 110px;
    height: 26px;

    :disabled {
        box-shadow: none;
    }
`

export const RemoveEntityLinkButton = styled(WireFrameDeleteButton)`
    width: 130px;
    height: 26px;

    :disabled {
        box-shadow: none;
    }
`

export const StepChartButtonsContainer = styled.div`
    width: 540px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
