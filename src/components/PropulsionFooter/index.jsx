import React from 'react'
import styled from 'styled-components/macro'
import propulsion_logo from '../../assets/logos/propulsion_logo_horizontal_white.png'


const PropulsionFooterLogoContainer = styled.a`
  height: ${props => props.credentials ? '56px' : '90px'};
  width: 100%;
  display: flex;
  justify-content: ${props => props.credentials ? 'flex-end' : 'space-between'};
  align-items: center;
  flex-direction: ${props => props.credentials ? 'row' : 'column'};
  padding: ${props => props.credentials ? '0 20px 0 0' : '5% 0'};
  background: ${props => props.credentials ? 'none' : 'rgba(0,0,0,0.06)'};
  color: ${props => props.credentials ? '#1d1d1d' : '#ffffff'};
  border: none;
  text-decoration: none;
  position: ${props => props.credentials ? 'absolute' : ''};
  right: ${props => props.credentials ? '1%' : ''};
  bottom: ${props => props.credentials ? '0' : ''};
  
  
  img {
    width: ${props => props.credentials ? '100px' : '110px'};
    margin-right: ${props => props.credentials ? '10px' : ''};
  }
  p {
    font-size: ${props => props.credentials ? '11px' : '8px'};
    align-self: ${props => props.credentials ? 'flex-end' : ''};
    margin-bottom: ${props => props.credentials ? '17px' : ''};
    margin-right: ${props => props.landing ? '8%' : ''};
  }
  :hover {
    cursor: pointer;
    background: ${props => props.credentials ? 'none' : 'rgba(216,15,25,0.13)'};
  }
  
`


const PropulsionFooter = () => {
    return (
        <PropulsionFooterLogoContainer
            href='https://propulsion.academy/'
            rel="noreferrer"
            target='_blank'
        >
            <img
                alt="propulsion-academy-logo"
                src={propulsion_logo}
            />
            <p>© 2020 Propulsion Academy. All rights reserved.</p>
        </PropulsionFooterLogoContainer>)
}

export default PropulsionFooter
