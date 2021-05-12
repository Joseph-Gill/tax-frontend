import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'

export const TabsBarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 60px;
    width: 860px;
    margin-bottom: 20px;
    position: relative;

    @media ${devices.laptopL} {
        width: 1305px;
    }

    @media ${devices.desktop} {
        width: 1750px;
    }
`

export const DisplayTabTitle = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    font-weight: 800;
    line-height: 16px;
`

export const DisplayTabBar = styled.div`
    height: 3px;
    width: 25px;
`

export const DisplayTab = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-left: ${props => props.displayFavorites ? `1px solid ${props.theme.grayFour}` : 'none'};
    border-top: ${props => props.displayFavorites ? `1px solid ${props.theme.grayFour}` : 'none'};
    border-right: ${props => props.displayFavorites ? `1px solid ${props.theme.grayFour}` : 'none'};
    border-bottom: ${props => props.displayFavorites ? 'none' : `1px solid ${props.theme.grayFour}`};

    ${DisplayTabTitle}{
            color: ${props => props.displayFavorites ? props.theme.primaryBlue : 'none'};
        }

    :hover {
        cursor: pointer;

        ${DisplayTabTitle}{
            color: ${props => props.theme.primaryBlue};
        }

        ${DisplayTabBar}{
            background-color: ${props => props.theme.primaryBlue};
        }
    }
`

export const FavoriteTabBarContainer = styled.div`
    width: 106px;
    display: flex;
    justify-content: flex-start;

    ${DisplayTabBar} {
        background-color: ${props => props.displayFavorites ? props.theme.primaryBlue : props.theme.grayTwo};
    }
`

export const AllTabBarContainer = styled.div`
    width: 72px;
    display: flex;
    justify-content: flex-start;

     ${DisplayTabBar} {
        background-color: ${props => props.displayFavorites ? props.theme.primaryBlue : props.theme.grayTwo};
    }
`

export const BorderDisplay = styled.div`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.grayFour};
`

export const CreateGroupImage = styled.img`
    height: 50px;
    width: 50px;
`

export const CreateGroupTextContainer = styled.div`
    width: 116px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 15px;
`

export const CreateGroupText = styled.p`
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 16px;
    text-transform: uppercase;
    color: ${props => props.theme.grayTwo};
`

export const AddNewGroupContainer = styled.div`
    height: 65px;
    width: 200px;
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    position: absolute;
    top: -10px;
    right: 0;
    padding-left: 5px;

    :hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};
        transition: 167ms;
    }
`
