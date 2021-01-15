import React from 'react'
import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'


// Currently not used in the Project, leftover from the Template

export const SocialLoginContainer = styled(BaseButton)`
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    color: black;
    box-shadow: ${props => props.theme.boxShadow};
`

export const SocialLoginIcon = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`

const SocialLoginButton = ({onClick, icon, alt, text}) => {
    return (
        <SocialLoginContainer onClick={onClick}>
            <SocialLoginIcon alt={alt} src={icon} />
            {text}
        </SocialLoginContainer>
    )
}

export default SocialLoginButton
