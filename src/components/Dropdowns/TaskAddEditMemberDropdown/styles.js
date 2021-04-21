import styled from 'styled-components/macro'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../styles'
import {device as devices} from '../../../style/devices'


export const TaskMemberDropdownButton = styled(ModalDropdownButton)`
    margin-left: 124px;
`

export const TaskMemberDropdownContentContainer = styled(ModalDropdownContentContainer)`
    margin-left: 124px;
    top: -309px;

    @media ${devices.height1080p} {
        top: 42px;
    }
`
