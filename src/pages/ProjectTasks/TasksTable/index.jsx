import React from 'react'
import TaskTableEntry from './TaskTableEntry'
import {NoFilteredTasksStepsContainer} from '../../../style/containers'
import {CommentTable, TableHeader, TableTitleRow} from '../../../style/tables'
import {TaskStatusTableHeader} from './styles'


const TasksTable = ({dispatch, group, history, project, tasks}) => {
    return (
        <div>
            {!tasks.length ?
                <NoFilteredTasksStepsContainer>
                    No tasks for this project match these filters
                </NoFilteredTasksStepsContainer> : (
                    <CommentTable>
                        <thead>
                            <TableTitleRow>
                                <TaskStatusTableHeader />
                                <TableHeader>Step</TableHeader>
                                <TableHeader>Task No.</TableHeader>
                                <TableHeader>Task</TableHeader>
                                <TableHeader>Due Date</TableHeader>
                                <TableHeader>Planned Completion Date</TableHeader>
                                <TableHeader>Responsible</TableHeader>
                                <TableHeader>Documents</TableHeader>
                            </TableTitleRow>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <TaskTableEntry
                                    dispatch={dispatch}
                                    group={group}
                                    history={history}
                                    key={task.id}
                                    project={project}
                                    task={task}
                                />))}
                        </tbody>
                    </CommentTable>
                )}
        </div>
    )
}

export default TasksTable
