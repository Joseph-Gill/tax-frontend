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
                <ModalText>The organization chart will be updated to reflect the changes made in the project.</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>The project status will be set as Completed, this cannot be undone.</ModalText>
            </AddDeleteModalTextContainer>
        </>
    )
}

export default CompleteProjectModalText
