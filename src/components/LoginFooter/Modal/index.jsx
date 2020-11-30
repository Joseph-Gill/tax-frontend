/* eslint react/forbid-component-props: 0 */
import React from 'react'
import Backdrop from './Backdrop'
import styled from 'styled-components/macro'

const ModalWrapper = styled.div`
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


const Modal = ({children, clicked, show}) => {
    return (
        <>
            <Backdrop clicked={clicked} show={show} />
            <ModalWrapper
                style={{
                transform: show ? 'translateY(0)' : 'translateY(-200%)',
                opacity: show ? '1' : '0'
            }}
            >
                {children}
            </ModalWrapper>
        </>
    )
}

export default Modal
