import styled from 'styled-components/macro'


export const DisplayCardContainer = styled.div`
    width: 272px;
    height: 250px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayThree};
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    :hover {
        cursor: pointer;
        transition: 167ms;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};
    }
`

export const DisplayCardImageContainer = styled.div`
    width: 240px;
    height: 155px;
    background: linear-gradient(0.90turn, ${props => props.theme.grayThree}, ${props => props.theme.grayFour}, ${props => props.theme.grayFive});
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
`
