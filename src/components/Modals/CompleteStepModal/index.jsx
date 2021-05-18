import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import CompleteStepModalText from './CompleteStepModalText'
import CompleteStepModalButtons from './CompleteStepModalButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {CompleteStepModalInternalContainer} from './styles'
import {convertContentToHTML, convertDate} from '../../../helpers'
import {getStepsForProjectAction, updateStepSetStepCompleteAction} from '../../../store/step/actions'


const CompleteStepModal = ({date, descriptionState, dispatch, indexOfStepToDisplay, project, setEditStatus,
                               setShowCompleteStep, showCompleteStep, step, stepStatus}) => {

    const cancelButtonHandler = () => {
        setShowCompleteStep(false)
    }

    const confirmButtonHandler = async () => {
        const updatedStepData = {
            description: convertContentToHTML(descriptionState),
            effective_date: convertDate(date),
            number: indexOfStepToDisplay + 1,
            status: stepStatus
        }
        const response = await dispatch(updateStepSetStepCompleteAction(updatedStepData, step.id))
        if (response.status === 200) {
            const response = await dispatch(getStepsForProjectAction(project.id))
            if (response) {
                setEditStatus(false)
                setShowCompleteStep(false)
            }
        }
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
