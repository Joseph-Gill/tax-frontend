import React, {useEffect, useState} from 'react'
// import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, TaskCancelSaveButtonContainer, TaskErrorContainer, TaskInputRow, TaskInputsContainer, TaskUpperLabelRow} from '../../style/containers'
import {EDIT_TASK, GROUPS, HOME, PROJECTS, TASKS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {AuthenticatedPageTitle} from '../../style/titles'
import {useDropzone} from 'react-dropzone'
import {createTaskStepSelectOptions, listMemberWithOrgAndRole} from '../../helpers'
import Spinner from '../../components/Spinner'
import {CancelButton, SaveButton} from '../../style/buttons'
import {resetErrors} from '../../store/errors/actions/errorAction'
import EditInputTitleStatus from './EditInputTitleStatus'
import {ErrorMessage} from '../../style/messages'
import {TaskInputLabel} from '../../style/labels'
import StepDropdown from '../../components/StepDropdown'
import {NewTaskDescriptionTextArea} from '../TaskAdd/styles'


const TaskEdit = ({history}) => {
    const dispatch = useDispatch()
    const match = useRouteMatch()
    const group = useSelector(state => state.groupReducer.group)
    const members = useSelector(state => state.groupReducer.group.users)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const tasks = useSelector(state => state.taskReducer.tasks)
    const tasksLoaded = useSelector(state => state.taskReducer.loaded)
    const error = useSelector(state => state.errorReducer.error)
    const [targetTask, setTargetTask] = useState({})
    const [selectedStep, setSelectedStep] = useState('')
    const [selectedMember, setSelectedMember] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    const [completionDate, setCompletionDate] = useState(new Date())
    const [taskStatus, setTaskStatus] = useState('')
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone()
    const [showSuccess, setShowSuccess] = useState(false)
    const [memberRenderData, setMemberRenderData] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!projectLoaded) {
            history.push(`${HOME}`)
        } else if (!stepsLoaded || !tasksLoaded || !groupLoaded) {
            history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}`)
        } else {
            listMemberWithOrgAndRole(members, group, dispatch)
                .then(result => {
                    setMemberRenderData([...result])
                })
            const targetTask = tasks.filter(task => task.id === parseInt(match.params.taskId))[0]
            setTargetTask(targetTask)
            setTitle(targetTask.title)
            setTaskStatus(targetTask.status)
            setSelectedStep(targetTask.step.id)
            setDescription(targetTask.description)
            setDueDate(new Date(parseInt(targetTask.due_date.slice(0,5)), (parseInt(targetTask.due_date.slice(5,7)) - 1), parseInt(targetTask.due_date.slice(-2))))
            setCompletionDate(new Date(parseInt(targetTask.planned_completion_date.slice(0,5)), (parseInt(targetTask.planned_completion_date.slice(5,7)) - 1), parseInt(targetTask.planned_completion_date.slice(-2))))
            setSelectedMember(targetTask.assigned_user.id)
            setLoaded(true)
        }
    }, [members, group, dispatch, tasks, groupLoaded, history, match.params.taskId, project.id, projectLoaded, stepsLoaded, tasksLoaded])

    const saveEditTaskHandler = () => {

    }

    const cancelButtonHandlers = () => {
        dispatch(resetErrors())
        history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}`)
    }

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb
                        breadCrumbArray={[
                            {display: 'GROUPS', to: GROUPS, active: false},
                            {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                            {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                            {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                            {display: 'TASKS', to: `${GROUPS}${PROJECTS}${TASKS}/${project.id}`, active: false},
                            {display: `EDIT TASK`, to: `${GROUPS}${PROJECTS}${TASKS}${EDIT_TASK}/${targetTask.id}/`, active: true}
                        ]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Edit Task</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    <TaskInputsContainer>
                        <div>
                            <TaskInputRow>
                                <EditInputTitleStatus
                                    setTaskStatus={setTaskStatus}
                                    setTitle={setTitle}
                                    taskStatus={taskStatus}
                                    title={title}
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
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder='Write your task description'
                                    value={description}
                                />
                            </TaskUpperLabelRow>
                            <TaskErrorContainer>
                                {error && <ErrorMessage>{error.description}</ErrorMessage>}
                            </TaskErrorContainer>
                        </div>
                    </TaskInputsContainer>
                    <TaskCancelSaveButtonContainer>
                        <CancelButton onClick={cancelButtonHandlers}>Cancel</CancelButton>
                        <SaveButton onClick={saveEditTaskHandler}>Save</SaveButton>
                    </TaskCancelSaveButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default TaskEdit
