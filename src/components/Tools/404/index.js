import React from 'react';
import styled from 'styled-components';
import {BaseButton} from "../../../style/buttons";
import {withRouter} from "react-router-dom";


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
  
  p {
  font-size: 100px;
  font-family: Helvetica,serif;
  opacity: 1;
  color: white;
  
  }
  
  span {
  font-size: 40px;
  font-family: Helvetica,serif;
  opacity: 1;
  color: white;
  margin-bottom: 10%;
  }

  
`;

const BackButton = styled(BaseButton)`
    background: none;
    color: ${props => props.theme.accentColor};
    border: ${props => props.theme.accentColor} 2px solid;
    :hover {
      background: ${props => props.theme.accentColor};
      color: white;
    }

`;

const Page404 = ({history}) => {
    return <Container404>
        <p>404</p>
        <span>Where am I?</span>
        <BackButton onClick={()=> history.goBack()}>Take me Back</BackButton>
    </Container404>
};

export default withRouter(Page404);