import styled from 'styled-components/macro';


export const SideBarContainer = styled.div`
    height: 100vh;
    background: #004972;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 3000000;
    margin: 0;
    border-radius: 0 4px 4px 0;
    animation: growSideBar 1s;
    @keyframes growSideBar {
      from {width: 100px;} to {width: 200px;}
    }
`;

export const SideBarNoAuthContainer = styled.div`
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
      width: 55px;
      cursor: pointer;
      animation: opacityLogo 2s;
      @keyframes opacityLogo {
          from {opacity: 0;} to {opacity: 1;}
      }
    }
`;
