import React from 'react'
import Draggable from 'react-draggable'
import DeleteStepText from './DeleteStepText'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {DeleteStepReviewTaskModalInternalContainer} from '../styles'

//Used by StepDisplay for deleting steps from a project
const DeleteStepModal = ({deleteStepHandler, setShowConfirmation, showConfirmation}) => {

    const cancelButtonHandler = () => {
        setShowConfirmation(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowConfirmation}
            showModalView={showConfirmation}
        >
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <DeleteStepText />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={deleteStepHandler}
                        deleteText='Confirm Delete'
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default DeleteStepModal
