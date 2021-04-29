import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import DeleteTaxConsequenceText from './DeleteTaxConsequenceText'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {DeleteStepReviewTaskModalInternalContainer} from '../styles'


const DeleteTaxConsequenceModal = ({deleteTaxConsequenceHandler, setShowDeleteConfirmation, showDeleteConfirmation}) => {

    const cancelButtonHandler = () => {
        setShowDeleteConfirmation(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowDeleteConfirmation}
            showModalView={showDeleteConfirmation}
        >
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowDeleteConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <DeleteTaxConsequenceText />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={deleteTaxConsequenceHandler}
                        deleteText='Confirm Delete'
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default DeleteTaxConsequenceModal
