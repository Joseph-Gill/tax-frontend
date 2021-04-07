import styled from 'styled-components/macro'
import {FooterSpan} from '../../../style/links'


export const LandingFooterContainer = styled.div`
    position: relative;
    width: 1118px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;

    ${FooterSpan}:nth-child(2) {
      position: absolute;
      left: 150px;
    }
`
