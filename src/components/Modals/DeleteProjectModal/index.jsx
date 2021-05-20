import React from 'react'
import Draggable from 'react-draggable'
import DeleteProjectText from './DeleteProjectText'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {DeleteProjectInternalContainer} from '../styles'


const DeleteProjectModal = ({deleteProjectHandler, setShowDeleteConfirmation, showDeleteConfirmation}) => {
    return (
        <ModalExternalContainer
            setModalView={setShowDeleteConfirmation}
            showModalView={showDeleteConfirmation}
        >
            <Draggable>
                <DeleteProjectInternalContainer>
                    <ModalClose modalDisplay={setShowDeleteConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <DeleteProjectText />
                    <ModalDeleteButtons
                        cancelButtonHandler={() => setShowDeleteConfirmation(false)}
                        deleteButtonHandler={deleteProjectHandler}
                        deleteText='Confirm Delete'
                    />
                </DeleteProjectInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default DeleteProjectModal
