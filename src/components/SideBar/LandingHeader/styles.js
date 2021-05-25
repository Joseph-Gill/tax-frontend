import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const Header = styled.div`
    width: 100%;
    height: ${props => props.header ? '150px' : '80px'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.header ? props.theme.white : '#F9F9F9'};
    position: fixed;
    padding: 0 40px;
    border-bottom: ${props => props.header ? 'none' : `1px solid ${props.theme.grayFour}`};
    box-shadow: ${props => props.header ? 'none' : props.theme.projectCardBoxShadow};
    -webkit-transition: height 1s ease;
`

export const HeaderLogo = styled.img`
    height: ${props => props.header ? '83.4px' : '33.3px'};
    width: ${props => props.header ? '250px' : '100px'};
    -webkit-transition: width 1s ease, height 1s ease;
`

export const HeaderButton = styled.a`
    width: 192px;
    height: 60px;
    border-radius: 2rem;
    box-shadow: ${props => props.theme.buttonBoxShadow};
    background: ${props => props.theme.white};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-weight: 800;
        font-size: 16px;
        line-height: 25.6px;
    }

    img {
        margin-left: 10px;
    }


    :hover {
        cursor: pointer;
        transition: 167ms;
        border: 1px solid ${props => props.theme.grayTwo};
    }

    :focus {
        outline: none;
    }
`

export const HeaderLinksContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    //align-items: center;
    width: 350px;
    height: 60px;
    border-radius: 2rem;
    border: ${props => props.header ? `1px solid ${props.theme.grayTwo}` : 'none'};
    box-shadow: ${props => props.header ? props.theme.buttonBoxShadow : 'none'};
    padding: 20px 20px 0 20px;

`

export const HeaderLink = styled(Link)`
    text-decoration: none;
    height: 30px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    font-weight: 600;

    ${props => {
        if(props.isactive){
            return `
                    border-bottom: solid 3px ${props.theme.primaryBlue}
                    color: ${props.theme.primaryBlue};
                    font-weight: bold;
                    `
            }
        }
    };
`

export const HeaderButtonLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
`
