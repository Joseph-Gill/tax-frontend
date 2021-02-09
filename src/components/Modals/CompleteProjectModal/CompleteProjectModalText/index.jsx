import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'


const CompleteProjectModalText = () => {
    return (
        <>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>The group entities will be updated to reflect the final step organization chart.</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>The project status will be set as Completed.</ModalText>
            </AddDeleteModalTextContainer>
        </>
    )
}

export default CompleteProjectModalText
