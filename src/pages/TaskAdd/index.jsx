import React, {useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {EditorState} from 'draft-js'
import BreadCrumb from '../../components/BreadCrumb'
import TaskLowerInputs from './TaskLowerInputs'
import {useDropzone} from 'react-dropzone'
import LogoLoading from '../../components/LogoLoading'
import SuccessMessage from '../../components/SuccessMessage'
import TaskDates from '../../components/TaskDates'
import TaskAddDescription from './TaskAddDescription'
import TaskAddTitle from './TaskAddTitle'
import TaskAddStep from './TaskAddStep'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {createTaskAction, getTasksForProjectAction} from '../../store/task/actions'
import {convertContentToHTML, convertDate, createAcceptedFilesList, createTaskMemberSelectOptions, listMemberWithOrgAndRole} from '../../helpers'
import {ADD_TASK, GROUPS, HOME, PROJECTS, TASKS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CancelButton, SaveButton} from '../../style/buttons'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, TaskCancelSaveButtonContainer, TaskInputsContainer} from '../../style/containers'


const TaskAdd = ({history}) => {
    const dispatch = useDispatch()
    let title = useRef('')
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
    const [descriptionState, setDescriptionState] = useState(() => EditorState.createEmpty())
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        //Pushes to home if project is not loaded due to page refresh
        if (!projectLoaded) {
            history.push(`${HOME}`)
        //Pushes to ProjectDisplay if steps or group is not loaded due to page refresh
        } else if (!stepsLoaded || !groupLoaded) {
            history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}`)
        } else {
            //Used by Member dropdown to format choices with Name, Role, and Organization
            listMemberWithOrgAndRole(members, group, dispatch)
                .then(result => {
                    setMemberRenderData([...result])
                    setLoaded(true)
                })
        }
    }, [dispatch, group, groupLoaded, history, members, project.id, projectLoaded, stepsLoaded])

    const saveNewTaskHandler = async () => {
        dispatch(resetErrors())
        //Error handling if user attempts to create a task without selecting a step to assign it to
        if (!selectedStep) {
            dispatch(setError({step: 'This field cannot be blank'}))
        //Error handling if user attempts to create a task without selecting a member to assign it to
        } else if (!selectedMember) {
            dispatch(setError({member: 'This field cannot be blank'}))
        } else {
            const newTask = {
                title: title.current.value,
                description: convertContentToHTML(descriptionState),
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
            {!loaded ? <LogoLoading /> : (
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
                        <TaskAddTitle
                            error={error}
                            title={title}
                        />
                        <TaskAddStep
                            error={error}
                            selectedStep={selectedStep}
                            setSelectedStep={setSelectedStep}
                            steps={steps}
                        />
                        <TaskAddDescription
                            descriptionState={descriptionState}
                            error={error}
                            setDescriptionState={setDescriptionState}
                        />
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
