import styled from 'styled-components/macro'
import {GreenLargeButton} from '../../style/buttons'
import {device as devices} from '../../style/devices'


export const EndingStructurePlaceholder = styled.div`
    width: 860px;
    height: 405px;
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    margin-top: 30px;

    @media ${devices.laptopL} {
        width: 1160px;
        height: 657px;
    }
`

export const CompleteProjectButton = styled(GreenLargeButton)`
    width: 168px;

    :disabled {
        box-shadow: none;
        border: 1px solid ${props => props.theme.grayTwo};
        background: ${props => props.theme.grayTwo};
    }
`
