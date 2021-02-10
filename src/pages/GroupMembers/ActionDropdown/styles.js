import styled from 'styled-components/macro'
import {DropdownContent} from '../../../style/dropdowns'


export const ActionImageButton = styled.div`
    width: 37px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: 100%;
    background: ${props => props.theme.white};

    :hover {
        background: ${props => props.theme.iconHoverBackground};
        cursor: pointer;
    }
`

export const ActionDropdownContent = styled(DropdownContent)`
    justify-content: flex-start;
`
