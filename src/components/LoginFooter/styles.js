import styled from 'styled-components/macro'
import {FooterSpan} from '../../style/links'


export const LoginFooterContainer = styled.div`
    position: absolute;
    bottom: 16px;
    display: flex;
    width: 50%;
    justify-content: space-between;

    ${FooterSpan}:nth-child(2) {
      position: absolute;
      left: 109px;
    }
`
