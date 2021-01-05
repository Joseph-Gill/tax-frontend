import React, {useState, useRef} from 'react'
import {useDropzone} from 'react-dropzone'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {ADD_TASK, GROUPS, PROJECTS, TASKS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CancelButton, SaveButton} from '../../style/buttons'
import StepDropdown from './StepDropdown'
import {NewTaskCancelSaveButtonContainer, NewTaskDescriptionTextArea, NewTaskFileListItem, NewTaskInputLabel, NewTaskInputRow, NewTaskInputsContainer, NewTaskTitleInput, NewTaskUpperLabelRow} from './styles'
import TaskDates from './TaskDates'
import TaskLowerInputs from './TaskLowerInputs'


const TaskAdd = () => {
    let title = useRef('')
    let description = useRef('')
    const project = useSelector(state => state.projectReducer.project)
    const steps = useSelector(state => state.stepReducer.steps)
    const [selectedStep, setSelectedStep] = useState('')
    const [selectedMember, setSelectedMember] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    const [completionDate, setCompletionDate] = useState(new Date())
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone()

    const files = acceptedFiles.map(file => (
        <NewTaskFileListItem key={file.path}>
            {file.path}
        </NewTaskFileListItem>
    ))

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'TASKS', to: `${GROUPS}${PROJECTS}${TASKS}/${project.id}`, active: false},
                    {display: 'NEW TASK', to: `${GROUPS}${PROJECTS}${ADD_TASK}`, active: true}
                ]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Add New Task</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <NewTaskInputsContainer>
                <NewTaskInputRow>
                    <NewTaskInputLabel>Task title</NewTaskInputLabel>
                    <NewTaskTitleInput
                        name='title'
                        placeholder='Enter task title'
                        ref={title}
                        type='text'
                    />
                </NewTaskInputRow>
                <NewTaskInputRow>
                    <NewTaskInputLabel>Assign a step</NewTaskInputLabel>
                    <StepDropdown
                        selectedStep={selectedStep}
                        setSelectedStep={setSelectedStep}
                    />
                </NewTaskInputRow>
                <NewTaskUpperLabelRow>
                    <NewTaskInputLabel>Task description</NewTaskInputLabel>
                    <NewTaskDescriptionTextArea
                        placeholder='Write your task description'
                        ref={description}
                    />
                </NewTaskUpperLabelRow>
                <TaskDates
                    completionDate={completionDate}
                    dueDate={dueDate}
                    setCompletionDate={setCompletionDate}
                    setDueDate={setDueDate}
                />
                <TaskLowerInputs
                    files={files}
                    getInputProps={getInputProps}
                    getRootProps={getRootProps}
                    selectedMember={selectedMember}
                    setSelectedMember={setSelectedMember}
                />
            </NewTaskInputsContainer>
            <NewTaskCancelSaveButtonContainer>
                <CancelButton>Cancel</CancelButton>
                <SaveButton>Save</SaveButton>
            </NewTaskCancelSaveButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default TaskAdd
