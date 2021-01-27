import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {CloseIcon, Ellipse} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../style/buttons'
import {ModalText} from '../../../style/text'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by ProjectTasks and TaskEdit to delete a specific document from a task
const DeleteDocumentModal = ({deleteDocumentHandler, documentName, setShowDeleteDocumentConfirmation}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <DeleteStepReviewTaskModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowDeleteDocumentConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Are you sure?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <AddDeleteModalTextContainer>
                    <Ellipse alt='ellipse' src={ellipse} />
                    <ModalText>{documentName} will be deleted</ModalText>
                </AddDeleteModalTextContainer>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowDeleteDocumentConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton onClick={deleteDocumentHandler}>Confirm Delete</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </DeleteStepReviewTaskModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteDocumentModal
