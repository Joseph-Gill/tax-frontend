import styled from 'styled-components/macro'


export const SideBarContainer = styled.div`
    height: 100vh;
    width: ${props => props.expanded ? '270px' : '100px'};
    background-color: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 400;
    margin: 0;
    box-shadow: ${props => props.theme.projectCardBoxShadow};
    justify-content: flex-start;
    padding: 14px;
    transition: 0.25s;
`

export const SideBarToggle = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${props => props.theme.white};
    cursor: pointer;
    border: 5px solid ${props => props.theme.grayFive};
    top: calc(50% - 20px);
    right: -20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        -webkit-transform: scaleX(${props => props.expanded ? '1' : '-1'});
        transform: scaleX(${props => props.expanded ? '1' : '-1'});
    }

`
