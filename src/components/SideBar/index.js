import React from 'react'
import {useSelector} from 'react-redux'
import NavigationMenu from './NavigationMenu'
import Logo from './Logo'
import propulsion from '../../assets/logos/Propulsion_only_Rocket.png'
import {useHistory} from 'react-router-dom'
import PropulsionFooter from '../Shared/PropulsionFooter'
import styled from 'styled-components/macro'


const SideBarContainer = styled.div`
    height: 100vh;
    background: #004972;
    width: 200px;
    display: flex;
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

const SideBarNoAuthContainer = styled.div`
    padding: 20px;
    height: 100%;
    width: 100px;
    background: #004972;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 1;
    border-radius: 0 4px 4px 0;
    animation: shrink 1s;
    @keyframes shrink {
      from {width: 200px;} to {width: 100px;}
    }
    img {
      width: 45px;
      cursor: pointer;
      animation: opacityLogo 2s;
      @keyframes opacityLogo {
          from {opacity: 0;} to {opacity: 1;}
      }
    }
`

const SideBar = ({children}) => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    const history = useHistory()
    return <>
        {
            authenticated ?
                <SideBarContainer>
                    <Logo/>
                    <NavigationMenu/>
                    <PropulsionFooter/>
                </SideBarContainer>
                :
                <SideBarNoAuthContainer>
                    <img onClick={() => history.push('/')} src={propulsion} alt="propulsion-logo"/>
                </SideBarNoAuthContainer>
        }
        {children}
    </>
}

export default SideBar

