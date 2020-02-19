import React from 'react';
import Backdrop from './Backdrop';
import {ModalWrapper} from "./styles";


const Modal = ({children, clicked, show}) => {
    return (
        <>
            <Backdrop show={show} clicked={clicked}/>
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
};

export default Modal;
