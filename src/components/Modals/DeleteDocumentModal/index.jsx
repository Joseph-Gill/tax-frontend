import React from 'react'
import Draggable from 'react-draggable'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import DeleteDocumentText from './DeleteDocumentText'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by ProjectTasks and TaskEdit to delete a specific document from a task
const DeleteDocumentModal = ({deleteDocumentHandler, documentName, setShowDeleteDocumentConfirmation,
                                 showDeleteDocumentConfirmation}) => {

    const cancelButtonHandler = () => {
        setShowDeleteDocumentConfirmation(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowDeleteDocumentConfirmation}
            showModalView={showDeleteDocumentConfirmation}
        >
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowDeleteDocumentConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <DeleteDocumentText documentName={documentName} />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={deleteDocumentHandler}
                        deleteText='Confirm Delete'
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default DeleteDocumentModal
