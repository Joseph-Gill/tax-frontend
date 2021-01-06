import React, {useState} from 'react'
import {TableData} from '../../../../style/tables'
import {TaskStatusColorIndicator, TaskStatusDisplayContainer, TaskTableEntryContainer, TaskTableEntryExpandedContainer, TaskTableRow} from './styles'
import taskExpand from '../../../../assets/icons/stark_task_expand_icon.svg'
import taskCollapse from '../../../../assets/icons/stark_task_collapse_icon.svg'
import EntryResponsible from './EntryResponsible'


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
                    PH for Documents
                    {!expanded ?
                        <img alt='expand' onClick={() => setExpanded(!expanded)} src={taskExpand} /> :
                        <img alt='collapse' onClick={() => setExpanded(!expanded)} src={taskCollapse} />}
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
