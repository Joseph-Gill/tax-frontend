import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const NavigationContainer = styled.div`
  width: 100%;
  padding-top: 167px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogOutContainer = styled.div`
  width: 238px;
  height: 60px;
  border-top: 1px solid ${props => props.theme.inputBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
`

export const SelectedGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 17px;
  margin-bottom: 60px;
  width: 100%;
  align-items: center;

  div {
    padding-top: 17px;
    display: flex;
    align-items: center;

    span {
      padding-left: 43px;
      font-family: ${props => props.theme.nunitoFontFamily};
      font-size: 12px;
      font-weight: 600;
      line-height: 16.37px;
      color: ${props => props.theme.accentColor};

      :hover {
        cursor: pointer;
      }
    }
  }
`


export const MenuItem = styled(Link)`
    font-size: 14px;
    font-weight: 600;
    font-family: ${props => props.theme.nunitoFontFamily};
    line-height: 19px;
    text-decoration: none;
    color: ${props => props.theme.navigationBarInactiveColor};
    width: 100%;
    height: 60px;
    border-right: solid 3px rgba(0,0,0,0);
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 0 1px 1px 0;
    cursor:pointer;

    ${props => {
    if(props.isActive){
        return `
                border-right: solid 3px ${props.theme.accentColor}
                color: ${props.theme.accentColor};
                font-weight: bold;
                background: ${props.theme.navigationBarActiveLinkBackgroundColor};
            `
    }
}
};

    :hover {
      background: ${props => props.theme.navigationBarActiveLinkBackgroundColor};
      transition: 0.25s;
      //border-right: solid 3px rgba(255,69,23,0.82);
    }
    :focus {
       border-right: solid 3px ${props => props.theme.accentColor};
       color: ${props => props.theme.accentColor};
       font-weight: bold;
       background: ${props => props.theme.navigationBarActiveLinkBackgroundColor};
    }
`

export const NavigationIcons = styled.img`
  margin-right: 16px;
  min-width: 24px;
`
