import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import DeleteTaskModal from '../../../../../components/Modals/DeleteTaskModal'
import TaskStatusDropdown from './TaskStatusDropdown'
import {skipToSpecifiedStep} from '../../../../../store/step/actions'
import {deleteTaskAction, getTasksForProjectAction} from '../../../../../store/task/actions'
import {DISPLAY_STEP, EDIT_TASK, GROUPS, PROJECTS, STEPS, TASKS} from '../../../../../routes/paths'
import {WireFrameDeleteButton} from '../../../../../style/buttons'
import {
    ExpandedTaskDescriptionContainer, ExpandedTaskEditLogButton, ExpandedTaskStatusButtonContainer,
    ExpandedTaskStatusButtonLeftContainer, ExpandedTaskStepButton, ExpandedTaskTile, TaskTableEntryExpandedContainer
} from './styles'
import {createSanitizedMarkup} from '../../../../../helpers'


const EntryExpanded = ({history, project, task}) => {
    const dispatch = useDispatch()
    const [showDeleteTaskConfirmation, setShowDeleteTaskConfirmation] = useState(false)

    const deleteTaskHandler = async () => {
        const response = await dispatch(deleteTaskAction(task.id))
        if (response.status === 204) {
            const response = await dispatch(getTasksForProjectAction(project.id))
            if (response) {
                setShowDeleteTaskConfirmation(false)
            }
        }
    }

    //Used by Go To Step button of a task, pushes to StepDisplay after setting index of step to be displayed
    const goToStepHandler = () => {
        dispatch(skipToSpecifiedStep(task.step.number - 1))
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

    return (
        <TaskTableEntryExpandedContainer>
            {showDeleteTaskConfirmation ?
                <DeleteTaskModal
                    deleteTaskHandler={deleteTaskHandler}
                    setShowDeleteTaskConfirmation={setShowDeleteTaskConfirmation}
                    showDeleteTaskConfirmation={showDeleteTaskConfirmation}
                /> : null}
            <ExpandedTaskTile>Task Description</ExpandedTaskTile>
            <ExpandedTaskDescriptionContainer dangerouslySetInnerHTML={createSanitizedMarkup(task.description)} />
            <ExpandedTaskStatusButtonContainer>
                <ExpandedTaskStatusButtonLeftContainer>
                    <TaskStatusDropdown task={task} />
                    <ExpandedTaskEditLogButton>Log</ExpandedTaskEditLogButton>
                    <ExpandedTaskEditLogButton
                        onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}${EDIT_TASK}/${task.id}/`)}
                    >Edit
                    </ExpandedTaskEditLogButton>
                    <ExpandedTaskStepButton
                        onClick={goToStepHandler}
                    >Go to step
                    </ExpandedTaskStepButton>
                </ExpandedTaskStatusButtonLeftContainer>
                <WireFrameDeleteButton onClick={() => setShowDeleteTaskConfirmation(true)}>Delete</WireFrameDeleteButton>
            </ExpandedTaskStatusButtonContainer>
        </TaskTableEntryExpandedContainer>
    )
}

export default EntryExpanded
