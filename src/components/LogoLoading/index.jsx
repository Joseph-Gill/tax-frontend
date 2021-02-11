import React from 'react'
import styled from 'styled-components/macro'
import taxCheetahLogo from '../../assets/logos/tax_cheetah_logo_blue_large.png'


const LogoLoadingContainer = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.grayFive};
    border-radius: 8px;
    padding-left: 200px;
    -webkit-animation: fadeinout 167ms linear forwards;
    animation: fadeinout 167ms linear forwards;

    @-webkit-keyframes fadeinout {
        0%, 50% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes fadeinout {
        0%, 50% { opacity: 0; }
        100% { opacity: 1; }
    }
`

const LogoImage = styled.img`
    width: 500px;
    height: 300px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const Loader = styled.div`
    width: 160px;
    height: 2px;
    position: absolute;
    margin: auto;
    top: 110px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.grayFour};
    border-radius: 2px;
    overflow: hidden;

    ::after{
        content: '';
        width: 80px;
        height: 2px;
        position: absolute;
        background-color: ${props => props.theme.primaryBlue};
        border-radius: 2px;
        animation: loading 1.5s infinite ease;
    }

    @keyframes loading {
        0%, 100% {
            transform: translateX(-33px);
        }
        50% {
            transform: translateX(120px);
        }
    }
`

const LogoLoading = () => {
    return (
        <LogoLoadingContainer>
            <LogoImage alt='logo' src={taxCheetahLogo} />
            <Loader />
        </LogoLoadingContainer>
    )
}

export default LogoLoading
