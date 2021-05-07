import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'


export const RegistrationTitle = styled.h2`
    position: relative;
    color: ${props => props.theme.white};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: ${props => props.theme.spartanFontFamily};
    margin-bottom: 40px;

    :before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 80px;
        height: 4px;
        background: ${props => props.theme.white};
    }
`

export const RegistrationButton = styled(BaseButton)`
    width: 110px;
    height: 40px;
    margin-bottom: 20px;
`
