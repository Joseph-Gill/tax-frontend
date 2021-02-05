import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import DeleteDocumentText from './DeleteDocumentText'
import {AddDeleteModalExternalContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by ProjectTasks and TaskEdit to delete a specific document from a task
const DeleteDocumentModal = ({deleteDocumentHandler, documentName, setShowDeleteDocumentConfirmation}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        setShowDeleteDocumentConfirmation(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
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
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteDocumentModal
