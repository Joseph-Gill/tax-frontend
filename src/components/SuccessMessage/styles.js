import styled from 'styled-components/macro'
import {animated} from 'react-spring'


export const SuccessContainer = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background: rgba(0,0,0,0.69);
    color: ${props => props.theme.primaryBlueLight};
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px 40px 60px 200px;
    text-align: center;
    z-index: 999;
`
