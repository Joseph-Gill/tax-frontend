import styled from 'styled-components/macro'
import stark from '../../assets/logos/stark-login-sidebar.png'


export const SideBarContainer = styled.div`
    height: 100vh;
    width: 270px;
    background-color: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 400;
    margin: 0;
    box-shadow: 0 0 20px #D9D9D9;
    justify-content: space-between;
    padding: 14px;
`

export const SideBarLoginContainer = styled.div`
    padding: 60px;
    height: 100%;
    width: 49.33%;
    max-width: 592px;
    flex-direction: column;
    align-items: center;
    float: left;
    position: fixed;
    z-index: 400;
    opacity: 0.8;
    background-image: url(${stark}), linear-gradient(${props => props.theme.primaryBlue}, ${props => props.theme.primaryBlue});
    background-blend-mode: multiply;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 4px 0 10px rgba(0, 112, 159, 0.24);

    h1 {
        margin-top: 385px;
        margin-bottom: 15px;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #FFFFFF;
    }

    p {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #FFFFFF;
    }
    }
`
