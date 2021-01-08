import React, {useState} from 'react'
import {WireFrameDeleteButton} from '../../../../../style/buttons'
import {
    ExpandedTaskDescriptionContainer,
    ExpandedTaskEditLogButton,
    ExpandedTaskStatusButtonContainer,
    ExpandedTaskStatusButtonLeftContainer,
    ExpandedTaskStatusDropdown,
    ExpandedTaskStatusDropdownOption,
    ExpandedTaskTile,
    TaskTableEntryExpandedContainer
} from './styles'
import DeleteTaskModal from '../../../../../components/DeleteAccountModal/DeleteTaskModal'
import {useDispatch} from 'react-redux'
import {deleteTaskAction, getTasksForProjectAction} from '../../../../../store/task/actions'
import {EDIT_TASK, GROUPS, PROJECTS, TASKS} from '../../../../../routes/paths'


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

    return (
        <TaskTableEntryExpandedContainer>
            {showDeleteTaskConfirmation ?
                <DeleteTaskModal
                    deleteTaskHandler={deleteTaskHandler}
                    setShowDeleteTaskConfirmation={setShowDeleteTaskConfirmation}
                /> : null}
            <ExpandedTaskTile>Task Description</ExpandedTaskTile>
            <ExpandedTaskDescriptionContainer>
                {task.description}
            </ExpandedTaskDescriptionContainer>
            <ExpandedTaskStatusButtonContainer>
                <ExpandedTaskStatusButtonLeftContainer>
                    <ExpandedTaskStatusDropdown defaultVale={task.status} disabled>
                        <ExpandedTaskStatusDropdownOption disabled value=''>Status</ExpandedTaskStatusDropdownOption>
                        <ExpandedTaskStatusDropdownOption value='Not Started'>Not Started</ExpandedTaskStatusDropdownOption>
                        <ExpandedTaskStatusDropdownOption value='Ongoing'>Ongoing</ExpandedTaskStatusDropdownOption>
                        <ExpandedTaskStatusDropdownOption value='Planned'>Planned</ExpandedTaskStatusDropdownOption>
                        <ExpandedTaskStatusDropdownOption value='Completed'>Completed</ExpandedTaskStatusDropdownOption>
                    </ExpandedTaskStatusDropdown>
                    <ExpandedTaskEditLogButton>Log</ExpandedTaskEditLogButton>
                    <ExpandedTaskEditLogButton onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}${EDIT_TASK}/${task.id}/`)}>Edit</ExpandedTaskEditLogButton>
                </ExpandedTaskStatusButtonLeftContainer>
                <WireFrameDeleteButton onClick={() => setShowDeleteTaskConfirmation(true)}>Delete</WireFrameDeleteButton>
            </ExpandedTaskStatusButtonContainer>
        </TaskTableEntryExpandedContainer>
    )
}

export default EntryExpanded