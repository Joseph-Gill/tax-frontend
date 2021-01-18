import styled from 'styled-components/macro'
import {BaseButton, DeleteButton} from '../../../style/buttons'


export const StepChartAndButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: ${props => props.theme.boxShadow};
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AddEntityLinkButton = styled(BaseButton)`
    width: 100px;
    height: 32px;
`

export const RemoveEntityLinkButton = styled(DeleteButton)`
    width: 120px;
    height: 32px;
`
