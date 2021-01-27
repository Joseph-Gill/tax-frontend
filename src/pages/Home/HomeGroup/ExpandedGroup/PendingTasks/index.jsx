import React from 'react'
import {TaskDocumentLink} from '../../../../../style/links'
import {CommentTable, TableData, TableHeader, TableTitleRow} from '../../../../../style/tables'
import {EntryResponsibleText, NoTasksOrTaxConsequencesText} from '../../../../../style/text'
import {EntryDocumentsContainer, EntryDocumentsTextContainer, EntryResponsibleContainer, NoTasksOrTaxConsequencesDisplay, TableContainer} from '../../../../../style/containers'
import {PendingTaskCompleteDateTableHeader, PendingTaskTableRow, PendingTaskTitleTableData} from './styles'


const PendingTasks = ({tasksToRender, user, userRole}) => {
    //Used to track if tasks are past due
    const today = new Date()
    const checkIfDatePastDue = task => {
        const dateToCheck = new Date(parseInt(task.due_date.slice(0,5)), (parseInt(task.due_date.slice(5,7)) - 1), parseInt(task.due_date.slice(-2)))
        if (dateToCheck <= today) {
            return 1
        } else {
            return 0
        }
    }

    //Renders each task component to display
    const renderTasks = () => (
        tasksToRender.map(task => {
            return (
                <PendingTaskTableRow key={task.id} pastDue={checkIfDatePastDue(task)}>
                    <TableData>
                        {task.step.number}
                    </TableData>
                    <TableData>
                        {`${task.step.number}.${task.taskNumber}`}
                    </TableData>
                    <PendingTaskTitleTableData>
                        {task.title}
                    </PendingTaskTitleTableData>
                    <TableData>
                        {task.due_date}
                    </TableData>
                    <TableData>
                        {task.planned_completion_date}
                    </TableData>
                    <TableData>
                        <EntryResponsibleContainer>
                            <EntryResponsibleText>{user.user_profile.country ? user.user_profile.country : 'N/A'}</EntryResponsibleText>
                            <EntryResponsibleText>{userRole}</EntryResponsibleText>
                            <EntryResponsibleText>{`${user.first_name.charAt(0)}. ${user.last_name}`}</EntryResponsibleText>
                        </EntryResponsibleContainer>
                    </TableData>
                    <TableData>
                        <EntryDocumentsContainer>
                            <EntryDocumentsTextContainer>
                                {task.task_documents.map(document => (
                                    <TaskDocumentLink
                                        download
                                        key={document.id}
                                        target='_blank'
                                        to={document.document}
                                    >{document.name.length > 18 ? document.name.slice(0, 11).concat('....').concat(document.name.slice(-4)) : document.name}
                                    </TaskDocumentLink>
                                ))}
                            </EntryDocumentsTextContainer>
                        </EntryDocumentsContainer>
                    </TableData>
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
                            <PendingTaskCompleteDateTableHeader>Planned Completion Date</PendingTaskCompleteDateTableHeader>
                            <TableHeader>Responsible</TableHeader>
                            <TableHeader>Documents</TableHeader>
                        </TableTitleRow>
                        {renderTasks()}
                    </tbody>
                </CommentTable>
            ) : (
                <NoTasksOrTaxConsequencesDisplay>
                    <NoTasksOrTaxConsequencesText>
                        You have no outstanding Tasks for this project
                    </NoTasksOrTaxConsequencesText>
                </NoTasksOrTaxConsequencesDisplay>)}
        </TableContainer>
    )
}

export default PendingTasks
