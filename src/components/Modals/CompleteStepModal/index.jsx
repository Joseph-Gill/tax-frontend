import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import CompleteStepModalText from './CompleteStepModalText'
import CompleteStepModalButtons from './CompleteStepModalButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {CompleteStepModalInternalContainer} from './styles'


const CompleteStepModal = ({setShowCompleteStep, showCompleteStep}) => {

    const cancelButtonHandler = () => {
        setShowCompleteStep(false)
    }

    const confirmButtonHandler = () => {

    }

    return (
        <ModalExternalContainer
            setModalView={setShowCompleteStep}
            showModalView={showCompleteStep}
        >
            <Draggable>
                <CompleteStepModalInternalContainer>
                    <ModalClose modalDisplay={setShowCompleteStep} />
                    <ModalTitle title='Are you sure?' />
                    <CompleteStepModalText />
                    <CompleteStepModalButtons
                        cancelButtonHandler={cancelButtonHandler}
                        confirmButtonHandler={confirmButtonHandler}
                    />
                </CompleteStepModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default CompleteStepModal
