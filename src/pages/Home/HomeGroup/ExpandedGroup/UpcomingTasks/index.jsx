import React from 'react'
import {TableContainer} from '../../../../../style/containers'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../../../style/tables'
import {NoTasksDisplay, NoTasksText} from './styles'


const PendingTasks = ({tasksToRender}) => {
    const renderTasks = () => (
        tasksToRender.map(task => {
            return (
                <TableDataRow key={task.id}>
                    <TableData>{task.step.number}</TableData>
                    <TableData>PH for Task Number</TableData>
                    <TableData>{task.title}</TableData>
                    <TableData>{task.due_date}</TableData>
                    <TableData>{task.planned_completion_date}</TableData>
                    <TableData>PH for User Info</TableData>
                    <TableData>PH for documents</TableData>
                </TableDataRow>
            )
        })
    )

    return (
        <TableContainer>
            {tasksToRender.length ? (
                <CommentTable>
                    <tbody>
                        <TableTitleRow>
                            <TableHeader>Step</TableHeader>
                            <TableHeader>Task No.</TableHeader>
                            <TableHeader>Task</TableHeader>
                            <TableHeader>Due Date</TableHeader>
                            <TableHeader>Planned Completion Date</TableHeader>
                            <TableHeader>Responsible</TableHeader>
                            <TableHeader>Documents</TableHeader>
                        </TableTitleRow>
                        {renderTasks()}
                    </tbody>
                </CommentTable>
            ) : (
                <NoTasksDisplay>
                    <NoTasksText>You have no outstanding Tasks for this project</NoTasksText>
                </NoTasksDisplay>)}
        </TableContainer>
    )
}

export default PendingTasks
