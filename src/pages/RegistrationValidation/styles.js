import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {ErrorMessageContainer} from '../../style/containers'


export const PasswordErrorMessageContainer = styled.div`
    height: 12px;
`

export const RegistrationValidationTitle = styled.h2`
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
        width: 60px;
        height: 4px;
        background: ${props => props.theme.white};
    }
`

export const RegistrationValidationButton = styled(BaseButton)`
    width: 100px;
    height: 40px;
`

export const PhoneErrorMessageContainer = styled(ErrorMessageContainer)`
    margin-top: 10px;
`
