import React from 'react'
import Draggable from 'react-draggable'
import DeleteTaskText from './DeleteTaskText'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by ProjectTasks for deleting a task from a Step
const DeleteTaskModal = ({deleteTaskHandler, setShowDeleteTaskConfirmation, showDeleteTaskConfirmation}) => {

    const cancelButtonHandler = () => {
        setShowDeleteTaskConfirmation(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowDeleteTaskConfirmation}
            showModalView={showDeleteTaskConfirmation}
        >
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowDeleteTaskConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <DeleteTaskText />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={deleteTaskHandler}
                        deleteText='Confirm Delete'
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default DeleteTaskModal
