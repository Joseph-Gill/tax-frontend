import React from 'react'
import styled from 'styled-components/macro';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  a  {
    font-size: 20px;
  }
`

const LandingPage = () => {

    return <Wrapper>
        Landing Page
        <a href='/login'>Login</a>
    </Wrapper>

}

export default LandingPage
