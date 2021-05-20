import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {AddDeleteModalTextContainer, DeleteProjectInternalContainer} from '../styles'
import {Ellipse} from '../../../style/images'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../style/text'


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
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>All steps in this project will be deleted</ModalText>
                    </AddDeleteModalTextContainer>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>All associated entity histories will be deleted</ModalText>
                    </AddDeleteModalTextContainer>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>All associated tasks to the project will be deleted</ModalText>
                    </AddDeleteModalTextContainer>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>All associated country consequences to the project will be deleted</ModalText>
                    </AddDeleteModalTextContainer>
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
