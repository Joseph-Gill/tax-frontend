/* eslint react/forbid-component-props: 0 */
import React from 'react'
import Backdrop from './Backdrop'
import {ModalWrapper} from './styles'


const PrivacyTermsModal = ({children, clicked, show}) => {
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

export default PrivacyTermsModal
