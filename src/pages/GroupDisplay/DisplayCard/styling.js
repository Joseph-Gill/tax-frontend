import styled from 'styled-components/macro'
import {animated} from 'react-spring'


export const DisplayCardContainer = styled(animated.div)`
    width: 272px;
    height: 250px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    :hover {
        cursor: pointer;
    }
`

export const DisplayCardImageContainer = styled.div`
    width: 240px;
    height: 155px;
    background: ${props => props.theme.graySix};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
`
