import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {useSelector} from 'react-redux'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {ADD_TASK, GROUPS, PROJECTS, TASKS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import StatusLegendEntry from './StatusLegendEntry'
import TaskFilterDropdown from './TasksFilterDropdown'


const AddTaskButton = styled(BaseButton)`
    width: 109px;
    height: 32px;
`

const StatusLegendFilterDropdownContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

const StatusLegendContainer = styled.div`
    width: 405px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 0 20px;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.white};
`

const ProjectTasks = ({history}) => {
    const project = useSelector(state => state.projectReducer.project)
    const [filterString, setFilterString] = useState('')

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'TASKS', to: `${GROUPS}${PROJECTS}${TASKS}`, active: true}
                ]}
            />
            <DisplayTitleWithButtonContainer>
                <AuthenticatedPageTitle>Taskslist - {project.name}</AuthenticatedPageTitle>
                <AddTaskButton onClick={() => history.push(`${GROUPS}${PROJECTS}${ADD_TASK}`)}>Add Task</AddTaskButton>
            </DisplayTitleWithButtonContainer>
            <StatusLegendFilterDropdownContainer>
                <StatusLegendContainer>
                    <StatusLegendEntry status='Ongoing / Planned' />
                    <StatusLegendEntry status='Completed' />
                    <StatusLegendEntry status='Not Started' />
                </StatusLegendContainer>
                <TaskFilterDropdown
                    filterString={filterString}
                    setFilterString={setFilterString}
                />
            </StatusLegendFilterDropdownContainer>
        </AuthenticatedPageContainer>
    )
}

export default ProjectTasks
