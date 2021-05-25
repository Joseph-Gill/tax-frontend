import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {animated} from 'react-spring'


export const NavigationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LogOutContainer = styled.div`
    width: 100%;
    height: 60px;
    border-top: 1px solid ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        :hover {
            cursor: pointer;
        }
    }
`

export const SelectedGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    div {
        height: 90px;
        width: 100%;
        padding: 17px 0;
        display: flex;
        align-items: center;
    }
`

export const GroupMenuContainer = styled(animated.div)`
    width: 100%;
    height: 220px;
    border-top: 1px solid ${props => props.theme.grayFour};
    border-bottom: 1px solid ${props => props.theme.grayFour};
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MenuItem = styled(animated(Link))`
    text-decoration: none;
    width: 100%;
    height: 60px;
    border-right: solid 3px rgba(0,0,0,0);
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 0 1px 1px 0;
    cursor:pointer;

    ${props => {
        if(props.isactive){
            return `
                    border-right: solid 3px ${props.theme.primaryBlue}
                    color: ${props.theme.primaryBlue};
                    font-weight: bold;
                    background: ${props.theme.primaryShadeTwo};
                    `
            }
        }
    };

    :hover {
        background: ${props => props.theme.primaryShadeTwo};
        transition: 0.25s;
    }
    :focus {
        border-right: solid 3px ${props => props.theme.primaryBlue};
        color: ${props => props.theme.primaryBlue};
        font-weight: bold;
        background: ${props => props.theme.primaryShadeTwo};
    }
`

export const NavigationIcons = styled.img`
    margin-right: 16px;
    min-width: 24px;
`

export const NavigationMenuContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
`

export const DashboardSelectedGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const SwitchGroupsLabel = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    font-weight: 600;
    line-height: 16.37px;
    color: ${props => props.theme.primaryBlue};
    margin-bottom: 13px;

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }
`

export const GroupImageContainer = styled(animated.div)`
    position: relative;
    display: flex;
    justify-content: flex-end;
`

export const NavigationMenuGroupImage = styled.img`
    position: absolute;
    max-width: 72px;
    height: auto;
    max-height: 72px;
    left: 0;
`
