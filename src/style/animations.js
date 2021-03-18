import styled from 'styled-components/macro'


export const FadeInContainer = styled.div`
    animation: fadeIn ease 175ms;
    -webkit-animation: fadeIn ease 175ms;
    -moz-animation: fadeIn ease 175ms;
    -o-animation: fadeIn ease 175ms;
    -ms-animation: fadeIn ease 175ms;

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
`
