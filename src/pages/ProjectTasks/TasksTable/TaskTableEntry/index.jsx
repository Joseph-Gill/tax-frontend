import React, {useState} from 'react'
import {TableData} from '../../../../style/tables'
import {DateTableData, TaskStatusColorIndicator, TaskTableRow, TitleTableData} from './styles'
import EntryResponsible from './EntryResponsible'
import EntryDocuments from './EntryDocuments'
import EntryExpanded from './EntryExpanded'


const TaskTableEntry = ({group, history, project, task, taskNum}) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <TaskTableRow key={task.id}>
                <TableData>
                    <TaskStatusColorIndicator status={task.status} />
                </TableData>
                <TableData>
                    {task.step.number}
                </TableData>
                <TableData>
                    {`${task.step.number}.${taskNum}`}
                </TableData>
                <TitleTableData>
                    {task.title}
                </TitleTableData>
                <DateTableData>
                    {task.due_date}
                </DateTableData>
                <DateTableData>
                    {task.planned_completion_date}
                </DateTableData>
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
                            project={project}
                            setExpanded={setExpanded}
                        />
                </TableData>
            </TaskTableRow>
            {expanded ? (
                <tr>
                    <td colSpan={8}>
                        <EntryExpanded
                            history={history}
                            project={project}
                            task={task}
                        />
                    </td>
                </tr>
            ) : null}
        </>
    )
}

export default TaskTableEntry
