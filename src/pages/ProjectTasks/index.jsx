import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {ADD_TASK, GROUPS, PROJECTS, TASKS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import TaskFilterDropdown from './TasksFilterDropdown'
import {getProjectAction} from '../../store/project/actions'
import {useRouteMatch} from 'react-router-dom'
import Spinner from '../../components/Spinner'
import TaskStatusLegendEntry from './TaskStatusLegendEntry'
import {AddTaskButton, StatusLegendFilterDropdownContainer, TasksTableContainer, TaskStatusLegendContainer, TaskStepFilter} from './styles'
import {getTasksForProjectAction, getTasksForStepOfProjectAction, resetTaskFilterStepNumber, setTaskFilterStepNumber} from '../../store/task/actions'
import NoTasksFound from './NoTasksFound'
import TasksTable from './TasksTable'
import {getStepsForProjectAction} from '../../store/step/actions'
import {getGroupOfProjectAction} from '../../store/group/actions'
import {DropdownOption} from '../../style/options'
import Loading from '../../components/Loading'


const ProjectTasks = ({history}) => {
    const match = useRouteMatch()
    const dispatch = useDispatch()
    const group = useSelector(state => state.groupReducer.group)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const tasks = useSelector(state => state.taskReducer.tasks)
    const tasksLoaded = useSelector(state => state.taskReducer.loaded)
    const filterStepNumber = useSelector(state => state.taskReducer.filterStepNumber)
    const [filterString, setFilterString] = useState('')
    const [tasksToRender, setTasksToRender] = useState([])
    const [loading, setLoading] = useState(false)
    const [filterOption, setFilterOption] = useState([
        {isChecked: true, type: 'due_date'},
        {isChecked: false, type: 'responsible_country'},
        {isChecked: false, type: 'responsible_user'},
        {isChecked: false, type: 'description'}
    ])

    useEffect(() => {
        if (!projectLoaded) {
            dispatch(getProjectAction(match.params.projectId))
        }
    }, [dispatch, match.params.projectId, projectLoaded])

    useEffect(() => {
        if (!tasksLoaded) {
            dispatch(getTasksForProjectAction(match.params.projectId))
        }
    }, [dispatch, tasksLoaded, match.params.projectId])

    useEffect(() => {
        if (!stepsLoaded) {
            dispatch(getStepsForProjectAction(match.params.projectId))
        }
    }, [dispatch, stepsLoaded, match.params.projectId])

    useEffect(() => {
        if (!groupLoaded) {
            dispatch(getGroupOfProjectAction(match.params.projectId))
        }
    }, [dispatch, groupLoaded, match.params.projectId])

    useEffect( () => {
        const filterTasksForStepFilter = async () => {
            if (filterStepNumber) {
                const response = await dispatch(getTasksForStepOfProjectAction(project.id, parseInt(filterStepNumber)))
                if (response) {
                    setTasksToRender(response)
                }
            } else {
                setTasksToRender([...tasks])
            }
        }
        setLoading(true)
        filterTasksForStepFilter()
            .then(() => setLoading(false))
    }, [project.id, filterStepNumber, dispatch, tasks])

    const taskStepFilterChangeHandler = stepNumber => {
        if (stepNumber) {
            dispatch(setTaskFilterStepNumber(stepNumber))
        } else {
            dispatch(resetTaskFilterStepNumber())
        }
    }

    const renderTaskStepFilterOptions = () => (
        steps.map(step => (
            <DropdownOption
                key={step.id}
                value={step.number}
            >{`Step #${step.number}`}
            </DropdownOption>))
    )

    const filteredTasks = () => {
        const selectedFilterOption = filterOption.filter(option => option.isChecked)[0]
        switch (selectedFilterOption.type) {
            case 'responsible_user':
                return tasksToRender.filter(task => task.assigned_user.user.first_name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
                    task.assigned_user.user.last_name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
            case 'responsible_country':
                return tasksToRender.filter(task => task.assigned_user.country.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
            default:
                return tasksToRender.filter(task => task[selectedFilterOption.type].toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
        }
    }

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !tasksLoaded ? <Spinner /> : (
                <>
                    <BreadCrumb
                        breadCrumbArray={[
                            {display: 'GROUPS', to: GROUPS, active: false},
                            {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                            {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                            {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                            {display: 'TASKS', to: `${GROUPS}${PROJECTS}${TASKS}/${project.id}/`, active: true}
                        ]}
                    />
                    <DisplayTitleWithButtonContainer>
                        <AuthenticatedPageTitle>Taskslist - {project.name}</AuthenticatedPageTitle>
                        <AddTaskButton onClick={() => history.push(`${GROUPS}${PROJECTS}${ADD_TASK}`)}>Add Task</AddTaskButton>
                    </DisplayTitleWithButtonContainer>
                    {!tasks.length ? <NoTasksFound /> : (
                        <>
                            <StatusLegendFilterDropdownContainer>
                                <TaskStatusLegendContainer>
                                    <TaskStatusLegendEntry status='Ongoing / Planned' />
                                    <TaskStatusLegendEntry status='Completed' />
                                    <TaskStatusLegendEntry status='Not Started' />
                                </TaskStatusLegendContainer>
                                <div>
                                    <TaskStepFilter
                                        onChange={(e) => taskStepFilterChangeHandler(e.target.value)}
                                        value={filterStepNumber}
                                    >
                                        <DropdownOption value=''>Steps - All</DropdownOption>
                                        {renderTaskStepFilterOptions()}
                                    </TaskStepFilter>
                                    <TaskFilterDropdown
                                        filterOption={filterOption}
                                        filterString={filterString}
                                        setFilterOption={setFilterOption}
                                        setFilterString={setFilterString}
                                    />
                                </div>
                            </StatusLegendFilterDropdownContainer>
                            {loading ? <Loading /> : (
                                <TasksTableContainer>
                                    <TasksTable
                                        group={group}
                                        history={history}
                                        project={project}
                                        tasks={filteredTasks()}
                                    />
                                </TasksTableContainer>)}
                        </>)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectTasks
