import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const NavigationContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const MenuItem = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 16px;
    width: 100%;
    height: 60px;
    font-weight: lighter;
    border-right: solid 3px rgba(0,0,0,0);
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-radius: 0 1px 1px 0;
    cursor:pointer;
    animation: opacityMenu 2s;
    @keyframes opacityMenu {
        from {opacity: 0;} to {opacity: 1;}
    }
    
    ${props => {
    if(props.isActive){
        return `
                color: ${props.theme.accentColor};
                border-right: solid 3px ${props.theme.accentColor};
                font-weight: bold;
                background: rgba(231,14,24,0.11);
            `
    }
}
};
    
    :hover {
      background: rgba(216,15,25,0.13);
      transition: 0.25s;
      border-right: solid 3px rgba(255,69,23,0.82);
    }
    :focus {
       border-right: solid 3px ${props => props.theme.accentColor};
       color: ${props => props.theme.accentColor};
       font-weight: bold;
       background: rgba(231,14,24,0.11);
    }
`

export const NavigationIcons = styled.img`
  margin-right: 20px;
  max-width: 24px;
`
