import styled from 'styled-components/macro'
import {BaseButton} from '../../../../style/buttons'


export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`

export const GoToProjectButton = styled(BaseButton)`
    height: 32px;
    width: 115px;
    font-size: 12px;
    margin-left: 20px;
`
