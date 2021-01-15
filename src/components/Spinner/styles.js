import styled from 'styled-components/macro'
import {animated} from 'react-spring'


export const SpinnerContainer = styled(animated.div)`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.43);
    border-radius: 8px;
    padding-left: 200px;
`
