import React, {useState, useRef, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, TaskCancelSaveButtonContainer, TaskErrorContainer, TaskInputRow, TaskInputsContainer, TaskUpperLabelRow} from '../../style/containers'
import {ADD_TASK, GROUPS, HOME, PROJECTS, TASKS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CancelButton, SaveButton} from '../../style/buttons'
import {NewTaskDescriptionTextArea, NewTaskTitleInput} from './styles'
import TaskLowerInputs from './TaskLowerInputs'
import {convertDate, createAcceptedFilesList, createTaskMemberSelectOptions, createTaskStepSelectOptions, listMemberWithOrgAndRole} from '../../helpers'
import {createTaskAction, getTasksForProjectAction} from '../../store/task/actions'
import SuccessMessage from '../../components/SuccessMessage'
import Spinner from '../../components/Spinner'
import {ErrorMessage} from '../../style/messages'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {TaskInputLabel} from '../../style/labels'
import StepDropdown from '../../components/StepDropdown'
import TaskDates from '../../components/TaskDates'


const TaskAdd = ({history}) => {
    const dispatch = useDispatch()
    let title = useRef('')
    let description = useRef('')
    const group = useSelector(state => state.groupReducer.group)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const members = useSelector(state => state.groupReducer.group.users)
    const error = useSelector(state => state.errorReducer.error)
    const [selectedStep, setSelectedStep] = useState('')
    const [selectedMember, setSelectedMember] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    const [completionDate, setCompletionDate] = useState(new Date())
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone()
    const [showSuccess, setShowSuccess] = useState(false)
    const [memberRenderData, setMemberRenderData] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!projectLoaded) {
            history.push(`${HOME}`)
        } else if (!stepsLoaded || !groupLoaded) {
            history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}`)
        } else {
            listMemberWithOrgAndRole(members, group, dispatch)
                .then(result => {
                    setMemberRenderData([...result])
                    setLoaded(true)
                })
        }
    }, [dispatch, group, groupLoaded, history, members, project.id, projectLoaded, stepsLoaded])

    const saveNewTaskHandler = async () => {
        dispatch(resetErrors())
        if (!selectedStep) {
            dispatch(setError({step: 'This field cannot be blank'}))
        } else if (!selectedMember) {
            dispatch(setError({member: 'This field cannot be blank'}))
        } else {
            const newTask = {
                title: title.current.value,
                description: description.current.value,
                planned_completion_date: convertDate(completionDate),
                due_date: convertDate(dueDate),
                documents: acceptedFiles,
                step_id: selectedStep,
                user_profile_id: selectedMember
            }
            const response = await dispatch(createTaskAction(newTask))
            if (response.status === 201) {
                const response = await dispatch(getTasksForProjectAction(project.id))
                if (response) {
                    setShowSuccess(!showSuccess)
                }
            }
        }
    }

const cancelButtonHandlers = () => {
    dispatch(resetErrors())
    history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}`)
}

    return (
        <AuthenticatedPageContainer>
            {showSuccess && <SuccessMessage
                message="Your new task has been successfully created!"
                redirect={`${GROUPS}${PROJECTS}${TASKS}/${project.id}`}
                            />}
            {!loaded ? <Spinner /> : (
                <>
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
                    <TaskInputsContainer>
                        <div>
                            <TaskInputRow>
                                <TaskInputLabel>Task title</TaskInputLabel>
                                <NewTaskTitleInput
                                    name='title'
                                    placeholder='Enter task title'
                                    ref={title}
                                    type='text'
                                />
                            </TaskInputRow>
                            <TaskErrorContainer>
                                {error && <ErrorMessage>{error.title}</ErrorMessage>}
                            </TaskErrorContainer>
                        </div>
                        <div>
                            <TaskInputRow>
                                <TaskInputLabel>Assign a step</TaskInputLabel>
                                <StepDropdown
                                    selectedStep={selectedStep}
                                    setSelectedStep={setSelectedStep}
                                    stepOptions={createTaskStepSelectOptions(steps)}
                                />
                            </TaskInputRow>
                            <TaskErrorContainer>
                                {error && <ErrorMessage>{error.step}</ErrorMessage>}
                            </TaskErrorContainer>
                        </div>
                        <div>
                            <TaskUpperLabelRow>
                                <TaskInputLabel>Task description</TaskInputLabel>
                                <NewTaskDescriptionTextArea
                                    placeholder='Write your task description'
                                    ref={description}
                                />
                            </TaskUpperLabelRow>
                            <TaskErrorContainer>
                                {error && <ErrorMessage>{error.description}</ErrorMessage>}
                            </TaskErrorContainer>
                        </div>
                        <TaskDates
                            completionDate={completionDate}
                            dueDate={dueDate}
                            setCompletionDate={setCompletionDate}
                            setDueDate={setDueDate}
                        />
                        <TaskLowerInputs
                            error={error}
                            files={createAcceptedFilesList(acceptedFiles)}
                            getInputProps={getInputProps}
                            getRootProps={getRootProps}
                            membersOptions={createTaskMemberSelectOptions(memberRenderData)}
                            selectedMember={selectedMember}
                            setSelectedMember={setSelectedMember}
                        />
                    </TaskInputsContainer>
                    <TaskCancelSaveButtonContainer>
                        <CancelButton onClick={cancelButtonHandlers}>Cancel</CancelButton>
                        <SaveButton onClick={saveNewTaskHandler}>Save</SaveButton>
                    </TaskCancelSaveButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default TaskAdd
