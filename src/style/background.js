import styled from 'styled-components/macro';
import street from "../assets/street.jpg";

export const BaseBackground = styled.img`
    background-image: url(${street});
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    background-size: contain;
    background-repeat: repeat;
`;
