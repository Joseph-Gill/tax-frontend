import React from 'react'
import styled from 'styled-components/macro'
import {LinkBase} from '../../style/links'


const LandingPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`

const LandingPage = () => {

    return <LandingPageContainer>
        Landing Page
        <LinkBase to='/login'>Login</LinkBase>
    </LandingPageContainer>

}

export default LandingPage
