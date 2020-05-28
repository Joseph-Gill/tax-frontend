import React from 'react'
import propulsion from '../../../assets/logos/Propulsion_only_Rocket.png'
import {useSelector} from 'react-redux'
import {HOME, LOGIN} from '../../../routes/paths'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


const LogoContainer = styled(Link)`
  text-decoration: none;
  height: 130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.09);
  justify-content: center;
  border-radius: 4px;
  padding: 0 18px;
  position: relative;
  
  img {
    width: 40px;
    position: absolute;
    align-self: flex-start;
  }
    
  h1 {
    @import url('https://fonts.googleapis.com/css?family=Khand&display=swap');
      color: #ffffff;
      font-size: 27px;
      font-family: Khand, sans-serif;
      position: absolute;
      align-self: flex-end;
      animation: fade 1.2s;
      @keyframes fade {
        from {
        opacity: 0;
        }  to {
        opacity: 1;
        }
      }
  }
`

const Logo = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    return <LogoContainer to={authenticated ? HOME : LOGIN}>
        <img src={propulsion} alt="propulsion-logo"/>
        <h1>Project</h1>
    </LogoContainer>
}

export default Logo
