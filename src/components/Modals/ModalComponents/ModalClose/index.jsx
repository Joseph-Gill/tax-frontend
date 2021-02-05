import React from 'react'
import {AddDeleteModalCloseContainer} from '../../styles'
import {CloseIcon} from '../../../../style/images'
import close from '../../../../assets/icons/stark_close_icon.svg'


const ModalClose = ({modalDisplay}) => {
    return (
        <AddDeleteModalCloseContainer>
            <CloseIcon alt='close' onClick={() => modalDisplay(false)} src={close} />
        </AddDeleteModalCloseContainer>
    )
}

export default ModalClose
