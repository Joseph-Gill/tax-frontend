import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {device as devices} from '../../../style/devices'


export const LogoContainer = styled(Link)`
    top: 16px;
    display: flex;
    justify-content: center;
    width: 270px;
    margin-bottom: 10px;

    @media ${devices.laptopL} {
        margin-bottom: 80px;
    }

`

export const LogoImgExpanded = styled.img`
    width: 200px;
    height: 71px;
    margin-top: 16px;
    animation: fadein 1s;
    -moz-animation: fadein 1s; /* Firefox */
    -webkit-animation: fadein 1s; /* Safari and Chrome */
    -o-animation: fadein 1s; /* Opera */

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`

export const LogoImgCollapsed = styled(LogoImgExpanded)`
    height: 71px;
    width: 71px;
`
