import styled from 'styled-components/macro'
import {BaseButton} from '../../../../style/buttons'


export const CompleteStepButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const SaveStepButton = styled(BaseButton)`
    height: 32px;
    width: 92px;
    background: ${props => props.theme.green};

    :hover {
        background: ${props => props.theme.greenDark};
    }
`
