import React from 'react'
import {EntryResponsibleContainer, TableContainer} from '../../../../../style/containers'
import {CommentTable, TableData, TableHeader, TableTitleRow} from '../../../../../style/tables'
import {NoTasksDisplay, NoTasksText, PendingTaskTableRow} from './styles'
import {EntryResponsibleText} from '../../../../../style/text'


const PendingTasks = ({tasksToRender, user, userRole}) => {
    const checkIfDatePastDue = task => {
        const today = new Date()
        const dateToCheck = new Date(parseInt(task.due_date.slice(0,5)), (parseInt(task.due_date.slice(5,7)) - 1), parseInt(task.due_date.slice(-2)))
        if (dateToCheck <= today) {
            return 1
        } else {
            return 0
        }
    }

    const renderTasks = () => (
        tasksToRender.map(task => {
            return (
                <PendingTaskTableRow key={task.id} pastDue={checkIfDatePastDue(task)}>
                    <TableData>{task.step.number}</TableData>
                    <TableData>PH for Task Number</TableData>
                    <TableData>{task.title}</TableData>
                    <TableData>{task.due_date}</TableData>
                    <TableData>{task.planned_completion_date}</TableData>
                    <TableData>
                        <EntryResponsibleContainer>
                            <EntryResponsibleText>{user.user_profile.country ? user.user_profile.country : 'N/A'}</EntryResponsibleText>
                            <EntryResponsibleText>{userRole}</EntryResponsibleText>
                            <EntryResponsibleText>{`${user.first_name.charAt(0)}. ${user.last_name}`}</EntryResponsibleText>
                        </EntryResponsibleContainer>
                    </TableData>
                    <TableData>PH for documents</TableData>
                </PendingTaskTableRow>
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
