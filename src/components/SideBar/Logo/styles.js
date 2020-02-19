import styled from 'styled-components/macro';
import {Link} from "react-router-dom";


export const LogoContainer = styled(Link)`
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
`;

export const PropulsionLogo = styled.img`
  width: 40px;
  position: absolute;
  align-self: flex-start;
  
`;

export const Title = styled.h1`
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
`;

export const Beta = styled.span`
  font-size: 13px;
  font-style: italic;
  color: #ff7828;
  display: flex;
  margin-top: 20px;
  align-self: flex-end;
  font-weight: bold;
`;
