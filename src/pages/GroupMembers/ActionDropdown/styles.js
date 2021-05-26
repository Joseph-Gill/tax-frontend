import styled from 'styled-components/macro'
import {DropdownContainer, DropdownContent, DropdownContentContainer} from '../../../style/dropdowns'


export const ActionImageButton = styled.div`
    width: 37px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: 100%;
    background: ${props => props.theme.white};
    margin-left: 30px;

    :hover {
        background: ${props => props.theme.iconHoverBackground};
        cursor: pointer;
    }
`

export const ActionDropdownContent = styled(DropdownContent)`
    justify-content: flex-start;
`

export const ActionDropdownContainer = styled(DropdownContainer)`
    margin-left: 30px;
`

export const ActionDropdownContentContainer = styled(DropdownContentContainer)`
    margin-left: 30px;
`
