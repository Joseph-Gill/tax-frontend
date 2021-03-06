import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {useDropzone} from 'react-dropzone'
import {EditorState} from 'draft-js'
import BreadCrumb from '../../components/BreadCrumb'
import EditInputTitleStatus from './EditInputTitleStatus'
import TaskDates from '../../components/TaskDates'
import SuccessMessage from '../../components/SuccessMessage'
import TaskEditDescription from './TaskEditDescription'
import TaskEditLowerInputs from './TaskEditLowerInputs'
import TaskEditStep from './TaskEditStep'
import LogoLoading from '../../components/LogoLoading'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {getTasksForProjectAction, updateTaskAction} from '../../store/task/actions'
import {convertContentToHTML, convertDate, createAcceptedFilesList, createDate,
    listMemberWithOrgAndRole} from '../../helpers'
import {EDIT_TASK, GROUPS, HOME, PROJECTS, TASKS} from '../../routes/paths'
import {ErrorMessage} from '../../style/messages'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CancelButton, SaveButton} from '../../style/buttons'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, TaskCancelSaveButtonContainer,
    TaskErrorContainer, TaskInputsContainer} from '../../style/containers'


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
    const [dueDate, setDueDate] = useState(new Date())
    const [completionDate, setCompletionDate] = useState(new Date())
    const [taskStatus, setTaskStatus] = useState('')
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone()
    const [showSuccess, setShowSuccess] = useState(false)
    const [memberRenderData, setMemberRenderData] = useState([])
    const [descriptionState, setDescriptionState] = useState(() => EditorState.createEmpty())
    const [showTaskStepSelect, setShowTaskStepSelect] = useState(false)
    const [showTaskMemberSelect, setShowTaskMemberSelect] = useState(false)
    const [showTaskStatusSelect, setShowTaskStatusSelect] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //Pushes to home if project is not loaded due to page refresh
        if (!projectLoaded) {
            history.push(`${HOME}`)
        //Pushes to ProjectDisplay if steps, group, or tasks is not loaded due to page refresh
        } else if (!stepsLoaded || !tasksLoaded || !groupLoaded) {
            history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}`)
        } else {
            //Gets task matching match.params.taskId and sets it's values into the input fields
            const targetTask = tasks.filter(task => task.id === parseInt(match.params.taskId))[0]
            setTargetTask(targetTask)
            setTitle(targetTask.title)
            setTaskStatus(targetTask.status)
            setSelectedStep(targetTask.step.id)
            //format necessary to input a date object into react-datepicker since django stores the date as a string
            setDueDate(createDate(targetTask.due_date))
            //format necessary to input a date object into react-datepicker since django stores the date as a string
            setCompletionDate(createDate(targetTask.planned_completion_date))
            setSelectedMember(targetTask.assigned_user.id)
            //Used by Member dropdown to format choices with Name, Role, and Organization
            listMemberWithOrgAndRole(members, group, dispatch)
                .then(result => {
                    setMemberRenderData([...result])
                    setLoading(false)
                })
        }
    }, [members, group, dispatch, tasks, groupLoaded, history, match.params.taskId, project.id, projectLoaded, stepsLoaded, tasksLoaded])

    const handleTaskStepSelectChange = stepNumber => {
        setSelectedStep(stepNumber)
        setShowTaskStepSelect(false)
    }

    const handleTaskMemberSelectChange = memberId => {
        setSelectedMember(memberId)
        setShowTaskMemberSelect(false)
    }

    const handleTaskStatusSelectChange = taskStatus => {
        setTaskStatus(taskStatus)
        setShowTaskStatusSelect(false)
    }

    const saveEditTaskHandler = async () => {
        dispatch(resetErrors())
        const updatedTask = {
            title,
            description: convertContentToHTML(descriptionState),
            planned_completion_date: convertDate(completionDate),
            due_date: convertDate(dueDate),
            documents: acceptedFiles,
            step_id: selectedStep,
            user_profile_id: selectedMember,
            status: taskStatus
        }
        const response = await dispatch(updateTaskAction(updatedTask, targetTask.id))
        if (response.status === 200) {
            const response = await dispatch(getTasksForProjectAction(project.id))
            if (response) {
                setShowSuccess(!showSuccess)
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
                message="Your task has been successfully updated!"
                redirect={`${GROUPS}${PROJECTS}${TASKS}/${project.id}`}
                            />}
            {loading ? <LogoLoading /> : (
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
                            <EditInputTitleStatus
                                handleTaskStatusSelectChange={handleTaskStatusSelectChange}
                                setShowTaskStatusSelect={setShowTaskStatusSelect}
                                setTitle={setTitle}
                                showTaskStatusSelect={showTaskStatusSelect}
                                taskStatus={taskStatus}
                                title={title}
                            />
                            <TaskErrorContainer>
                                {error && <ErrorMessage>{error.title}</ErrorMessage>}
                            </TaskErrorContainer>
                        </div>
                        <TaskEditStep
                            error={error}
                            handleTaskStepSelectChange={handleTaskStepSelectChange}
                            selectedStep={selectedStep}
                            setShowTaskStepSelect={setShowTaskStepSelect}
                            showTaskStepSelect={showTaskStepSelect}
                            steps={steps}
                        />
                        <TaskEditDescription
                            descriptionState={descriptionState}
                            error={error}
                            setDescriptionState={setDescriptionState}
                            textToLoad={targetTask.description}
                        />
                        <TaskDates
                            completionDate={completionDate}
                            dueDate={dueDate}
                            setCompletionDate={setCompletionDate}
                            setDueDate={setDueDate}
                        />
                        <TaskEditLowerInputs
                            documents={targetTask.task_documents}
                            error={error}
                            files={createAcceptedFilesList(acceptedFiles)}
                            getInputProps={getInputProps}
                            getRootProps={getRootProps}
                            handleTaskMemberSelectChange={handleTaskMemberSelectChange}
                            members={memberRenderData}
                            project={project}
                            selectedMember={selectedMember}
                            setShowTaskMemberSelect={setShowTaskMemberSelect}
                            showTaskMemberSelect={showTaskMemberSelect}
                        />
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
