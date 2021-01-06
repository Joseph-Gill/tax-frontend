import React, {useState} from 'react'
import {TableData} from '../../../../style/tables'
import {TaskStatusColorIndicator, TaskStatusDisplayContainer, TaskTableEntryExpandedContainer, TaskTableRow} from './styles'
import EntryResponsible from './EntryResponsible'
import EntryDocuments from './EntryDocuments'


const TaskTableEntry = ({group, task, taskNum}) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <TaskTableRow key={task.id}>
                <TaskStatusDisplayContainer>
                    <TaskStatusColorIndicator status={task.status} />
                </TaskStatusDisplayContainer>
                <TableData>
                    {task.step.number}
                </TableData>
                <TableData>
                    {`${task.step.number}.${taskNum}`}
                </TableData>
                <TableData>
                    {task.title}
                </TableData>
                <TableData>
                    {task.due_date}
                </TableData>
                <TableData>
                    {task.planned_completion_date}
                </TableData>
                <TableData>
                    <EntryResponsible
                        group={group}
                        user={task.assigned_user}
                    />
                </TableData>
                <TableData>
                    <EntryDocuments
                        documents={task.task_documents}
                        expanded={expanded}
                        setExpanded={setExpanded}
                    />
                </TableData>
            </TaskTableRow>
            {expanded ? (
                <tr>
                    <td colSpan={8}>
                        <TaskTableEntryExpandedContainer>

                        </TaskTableEntryExpandedContainer>
                    </td>
                </tr>
            ) : null}
        </>
    )
}

export default TaskTableEntry
