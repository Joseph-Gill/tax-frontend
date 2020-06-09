import React from 'react'
import styled from 'styled-components'
import {BaseButton} from '../../style/buttons'
import {useHistory} from 'react-router-dom'


const Container404 = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2018/08/16/19/47/landscape-3611227_1280.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  
  h1 {
    font-size: 100px;
    font-family: Helvetica,serif;
    opacity: 1;
    color: white;
  }
  
  h2 {
    font-size: 40px;
    font-family: Helvetica,serif;
    opacity: 1;
    color: white;
    margin-bottom: 10%;
  }
`

const Page404 = () => {
    const history = useHistory()
    return (
        <Container404>
            <h1>404</h1>
            <h2>Where am I?</h2>
            <BaseButton onClick={() => history.goBack()}>Take me out of here</BaseButton>
        </Container404>
    )
}

export default Page404
