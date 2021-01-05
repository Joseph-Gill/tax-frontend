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
import {AddTaskButton, StatusLegendFilterDropdownContainer, TaskStatusLegendContainer} from './styles'
import {getStepsForProjectAction} from '../../store/step/actions'
import {getTasksForProjectAction} from '../../store/task/actions'


const ProjectTasks = ({history}) => {
    const match = useRouteMatch()
    const dispatch = useDispatch()
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const tasks = useSelector(state => state.taskReducer.tasks)
    const tasksLoaded = useSelector(state => state.taskReducer.loaded)
    const [filterString, setFilterString] = useState('')

    useEffect(() => {
        if (!projectLoaded) {
            dispatch(getProjectAction(match.params.projectId))
        }
        if (!stepsLoaded) {
            dispatch(getStepsForProjectAction(match.params.projectId))
        }
        if (!tasksLoaded) {
            dispatch(getTasksForProjectAction(match.params.projectId))
        }
    }, [match.params.projectId, projectLoaded, stepsLoaded, tasksLoaded, dispatch])

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !stepsLoaded || !tasksLoaded  ? <Spinner /> : (
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
                    <StatusLegendFilterDropdownContainer>
                        <TaskStatusLegendContainer>
                            <TaskStatusLegendEntry status='Ongoing / Planned' />
                            <TaskStatusLegendEntry status='Completed' />
                            <TaskStatusLegendEntry status='Not Started' />
                        </TaskStatusLegendContainer>
                        <TaskFilterDropdown
                            filterString={filterString}
                            setFilterString={setFilterString}
                        />
                    </StatusLegendFilterDropdownContainer>

                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectTasks
