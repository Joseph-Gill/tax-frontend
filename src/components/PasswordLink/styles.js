import styled from 'styled-components/macro'
import {LinkContainer} from '../../style/containers'
import {PASSWORD_RESET, PASSWORD_RESET_VALIDATION} from '../../routes/paths'


export const PasswordLinkContainer = styled(LinkContainer)`
    width: ${props => props.currentPath === PASSWORD_RESET || props.currentPath === PASSWORD_RESET_VALIDATION ? '270px' : '227px'};
    margin-left: ${props => props.currentPath === PASSWORD_RESET || props.currentPath === PASSWORD_RESET_VALIDATION ? '11px' : '37.5px'};
    margin-top: 10px;
`
