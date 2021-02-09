import React from 'react'
import close from '../../../../assets/icons/stark_close_icon.svg'
import {AddDeleteModalCloseContainer, ModalCloseIconContainer} from '../../styles'


const ModalClose = ({modalDisplay}) => {
    return (
        <AddDeleteModalCloseContainer>
            <ModalCloseIconContainer onClick={() => modalDisplay(false)}>
                <img alt='close' src={close} />
            </ModalCloseIconContainer>
        </AddDeleteModalCloseContainer>
    )
}

export default ModalClose
