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


const EntryExpanded = ({task}) => {
    const [showDeleteTaskConfirmation, setShowDeleteTaskConfirmation] = useState(false)

    const deleteTaskHandler = () => {

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
                    <ExpandedTaskEditLogButton>Edit</ExpandedTaskEditLogButton>
                </ExpandedTaskStatusButtonLeftContainer>
                <WireFrameDeleteButton onClick={() => setShowDeleteTaskConfirmation(true)}>Delete</WireFrameDeleteButton>
            </ExpandedTaskStatusButtonContainer>
        </TaskTableEntryExpandedContainer>
    )
}

export default EntryExpanded
