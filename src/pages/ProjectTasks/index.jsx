import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
import TaskStatusLegendEntry from './TaskStatusLegendEntry'
import TasksFilterSearchBar from './TasksFilterSearchBar'
import NoTasksFound from './NoTasksFound'
import TasksTable from './TasksTable'
import Loading from '../../components/Loading'
import LogoLoading from '../../components/LogoLoading'
import TasksGoToDropdown from '../../components/Dropdowns/TasksGoToDropdown'
import ProjectTasksStepFilterDropdown from '../../components/Dropdowns/ProjectTasksStepFilterDropdown'
import {getProjectAction} from '../../store/project/actions'
import {getStepsForProjectAction} from '../../store/step/actions'
import {getGroupOfProjectAction} from '../../store/group/actions'
import {getTasksForProjectAction, getTasksForStepOfProjectAction, resetTaskFilterStepNumber, setTaskFilterStepNumber} from '../../store/task/actions'
import {GROUPS, PROJECTS, TASKS} from '../../routes/paths'
import {StepFilterInputLabel} from '../../style/labels'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {StatusLegendFilterDropdownContainer, TasksTableContainer, TaskStatusLegendContainer, TaskStepFilterGoToContainer} from './styles'


const ProjectTasks = ({history}) => {
    const dispatch = useDispatch()
    let searchText = useRef('')
    const match = useRouteMatch()
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
    const [showGoToDropdown, setShowGoToDropdown] = useState(false)
    const [showFilterDropdown, setShowFilterDropdown] = useState(false)
    const [showTaskStepFilter, setShowTaskStepFilter] = useState(false)
    const [loading, setLoading] = useState(true)
    const [filterOption, setFilterOption] = useState([
        {isChecked: true, type: 'due_date'},
        {isChecked: false, type: 'responsible_country'},
        {isChecked: false, type: 'responsible_user'},
        {isChecked: false, type: 'description'}
    ])

    useEffect(() => {
        //If project is not loaded due to page refresh, get project matching match.params.projectId
        if (!projectLoaded) {
            dispatch(getProjectAction(match.params.projectId))
        }
    }, [dispatch, match.params.projectId, projectLoaded])

    useEffect(() => {
        //If project is not loaded due to page refresh, get tasks for project matching match.params.projectId
        if (!tasksLoaded) {
            dispatch(getTasksForProjectAction(match.params.projectId))
        }
    }, [dispatch, tasksLoaded, match.params.projectId])

    useEffect(() => {
        //If steps is not loaded due to page refresh, get steps for project matching match.params.projectId
        if (!stepsLoaded) {
            dispatch(getStepsForProjectAction(match.params.projectId))
        }
    }, [dispatch, stepsLoaded, match.params.projectId])

    useEffect(() => {
        //If group is not loaded due to page refresh, get group for project matching match.params.projectId
        if (!groupLoaded) {
            dispatch(getGroupOfProjectAction(match.params.projectId))
        }
    }, [dispatch, groupLoaded, match.params.projectId])

    useEffect( () => {
        //Used by TaskStepFilter to filter Tasks to be displayed by Step Number
        const filterTasksForStepFilter = async () => {
            if (filterStepNumber) {
                //Gets all tasks for specified project matching specified Step Number
                const response = await dispatch(getTasksForStepOfProjectAction(project.id, parseInt(filterStepNumber)))
                if (response) {
                    setTasksToRender(response)
                }
            } else {
                setTasksToRender([...tasks])
            }
        }
        if (projectLoaded && tasksLoaded && stepsLoaded && groupLoaded) {
            filterTasksForStepFilter()
                .then(() => setLoading(false))
        }
    }, [project.id, filterStepNumber, dispatch, tasks, projectLoaded, tasksLoaded, stepsLoaded, groupLoaded])

    //Used by ProjectTasksStepFilterDropdown to adjust which step is being filter for, or to reset if all step tasks to be displayed
    const taskStepFilterChangeHandler = stepNumber => {
        if (stepNumber) {
            dispatch(setTaskFilterStepNumber(stepNumber))
        } else {
            dispatch(resetTaskFilterStepNumber())
        }
        setShowTaskStepFilter(false)
    }

    //Used by StepFilterDropdown to filter which tasks should be displayed by filter input
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

    //Used by search bar to filter by enter keypress in search bar
    const filterByKeypressChangeHandler = (e) => {
        if (e.key === 'Enter') {
            setFilterString(e.target.value)
        }
    }

    //Used by search bar to filter by clicking search image
    const filterByClickChangeHandler = () => {
        setFilterString(searchText.current.value)
    }

    //Used by search bar to reset the search bar text
    const resetFilterChangeHandler = () => {
        setFilterString('')
        searchText.current.value = ''
    }

    //Used by Go To... dropdown, toggles it open/close, closing the Filter dropdown
    const toggleGoToCloseFilterSearch = () => {
        setShowGoToDropdown(!showGoToDropdown)
        setShowFilterDropdown(false)
    }

    //Used by Filter dropdown, toggles it open/close, closing the Go To... dropdown
    const toggleFilterSearchCloseGoTo = () => {
        setShowFilterDropdown(!showFilterDropdown)
        setShowGoToDropdown(false)
    }

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !tasksLoaded ? <LogoLoading /> : (
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
                        <TaskStepFilterGoToContainer>
                            {tasks.length ? (
                                <div>
                                    <StepFilterInputLabel>Steps Filter</StepFilterInputLabel>
                                    <ProjectTasksStepFilterDropdown
                                        filterStepNumber={filterStepNumber}
                                        setShowTaskStepFilter={setShowTaskStepFilter}
                                        showTaskStepFilter={showTaskStepFilter}
                                        steps={steps}
                                        taskStepFilterChangeHandler={taskStepFilterChangeHandler}
                                    />
                                </div>) : <div />}
                            <TasksGoToDropdown
                                history={history}
                                project={project}
                                setShowGoToDropdown={setShowGoToDropdown}
                                showGoToDropdown={showGoToDropdown}
                                toggleGoToCloseFilterSearch={toggleGoToCloseFilterSearch}
                            />
                        </TaskStepFilterGoToContainer>
                    </DisplayTitleWithButtonContainer>
                    {!tasks.length && !loading ? <NoTasksFound history={history} /> : (
                        <>
                            <StatusLegendFilterDropdownContainer>
                                <TaskStatusLegendContainer>
                                    <TaskStatusLegendEntry status='Ongoing / Planned' />
                                    <TaskStatusLegendEntry status='Completed' />
                                    <TaskStatusLegendEntry status='Not Started' />
                                </TaskStatusLegendContainer>
                                <TasksFilterSearchBar
                                    filterByClickChangeHandler={filterByClickChangeHandler}
                                    filterByKeypressChangeHandler={filterByKeypressChangeHandler}
                                    filterOption={filterOption}
                                    resetFilterChangeHandler={resetFilterChangeHandler}
                                    searchText={searchText}
                                    setFilterOption={setFilterOption}
                                    setShowFilterDropdown={setShowFilterDropdown}
                                    showFilterDropdown={showFilterDropdown}
                                    toggleFilterSearchCloseGoTo={toggleFilterSearchCloseGoTo}
                                />
                            </StatusLegendFilterDropdownContainer>
                            <TasksTableContainer>
                                {loading ? <Loading /> : (
                                    <TasksTable
                                        dispatch={dispatch}
                                        group={group}
                                        history={history}
                                        project={project}
                                        tasks={filteredTasks()}
                                    />
                                )}
                            </TasksTableContainer>
                        </>)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectTasks
