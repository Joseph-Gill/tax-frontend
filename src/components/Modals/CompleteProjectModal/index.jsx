import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import CompleteProjectModalText from './CompleteProjectModalText'
import CompleteProjectModalButtons from './CompleteProjectModalButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {CompleteProjectModalInternalContainer} from '../styles'


const CompleteProjectModal = ({completeProjectHandler, setShowCompleteProject, showCompleteProject}) => {

    const cancelButtonHandler = () => {
        setShowCompleteProject(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowCompleteProject}
            showModalView={showCompleteProject}
        >
            <Draggable>
                <CompleteProjectModalInternalContainer>
                    <ModalClose modalDisplay={setShowCompleteProject} />
                    <ModalTitle title='Are you sure?' />
                    <CompleteProjectModalText />
                    <CompleteProjectModalButtons
                        cancelButtonHandler={cancelButtonHandler}
                        completeProjectHandler={completeProjectHandler}
                    />
                </CompleteProjectModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default CompleteProjectModal
