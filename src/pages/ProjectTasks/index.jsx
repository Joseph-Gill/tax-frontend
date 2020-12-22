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


const ProjectTasks = ({history}) => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const project = useSelector(state => state.projectReducer.project)
    const loaded = useSelector(state => state.projectReducer.loaded)
    const [filterString, setFilterString] = useState('')

    useEffect(() => {
        if (!loaded) {
            dispatch(getProjectAction(match.params.projectId))
        }
    }, [match.params.projectId])

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
