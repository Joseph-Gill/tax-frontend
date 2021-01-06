import React from 'react'
import {CommentTable, TableHeader, TableTitleRow} from '../../../style/tables'
import {TaskStatusTableHeader} from './styles'
import TaskTableEnry from './TaskTableEntry'


const TasksTable = ({tasks}) => {
    return (
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
                {tasks.map(task => {
                    return (
                        <TaskTableEnry key={task.id} task={task} />
                    )
                })}
            </tbody>
        </CommentTable>
    )
}

export default TasksTable
