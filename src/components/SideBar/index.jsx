import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import NavigationMenu from './NavigationMenu'
import Logo from './Logo'
import {useHistory, useLocation} from 'react-router-dom'
import PropulsionFooter from '../PropulsionFooter'
import styled from 'styled-components/macro'
import Feedback from '../Feedback'
import stark from '../../assets/logos/stark-login-sidebar.png'


const SideBarContainer = styled.div`
    height: 100vh;
    background: #004972;
    width: 200px;
    display: ${props => props.hidden ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 999;
    margin: 0;
    border-radius: 0 4px 4px 0;
    animation: expand 1s;
    @keyframes expand {
      from {width: 100px;} to {width: 200px;}
    }
`

const SideBarLoginContainer = styled.div`
    padding: 60px;
    height: 100%;
    width: 49.33%;
    max-width: 592px;
    //display: ${props => props.hidden ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    float: left;
    position: fixed;
    z-index: 999;
    opacity: 0.8;
    background-image: url(${stark}), linear-gradient(#00709F, #00709F);
    background-blend-mode: multiply;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 4px 0px 10px rgba(0, 112, 159, 0.24);
    //left: 0px;
    //top: 0px;
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

const SideBar = ({children}) => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    // const history = useHistory()

    let location = useLocation()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <>
            {
                authenticated
                    ?
                        <SideBarContainer hidden={currentPath === '/'}>
                            <Logo />
                            <NavigationMenu />
                            <Feedback />
                            <PropulsionFooter />
                        </SideBarContainer>
                    :
                        <SideBarLoginContainer hidden={currentPath === '/'}>
                            <h1>Swiss Tax Automated Reorganization Kit</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a type specimen book.
                            </p>
                            {/*<img*/}
                            {/*    alt="propulsion-logo"*/}
                            {/*    onClick={() => history.push('/')}*/}
                            {/*    src={propulsion}*/}
                            {/*/>*/}
                        </SideBarLoginContainer>
            }
            {children}
        </>
    )
}

export default SideBar

