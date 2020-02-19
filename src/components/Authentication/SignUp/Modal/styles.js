import styled from 'styled-components/macro';


export const ModalWrapper = styled.div`
    position: fixed;
    top: 100px;
    left: 35%;
    display: flex;
    justify-content: center;
    z-index: 500;
    background-color: white;
    max-width: 700px;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
`;
