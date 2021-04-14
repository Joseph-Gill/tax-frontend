import React, {useState, useEffect} from 'react'
import {TableData} from '../../../../style/tables'
import {DateTableData, ExpandedTableRow, TaskStatusColorIndicator, TaskTableRow, TitleTableData} from './styles'
import EntryResponsible from './EntryResponsible'
import EntryDocuments from './EntryDocuments'
import EntryExpanded from './EntryExpanded'
import {getTaskNumberForTaskOfStepAction} from '../../../../store/task/actions'
import Loading from '../../../../components/Loading'


const TaskTableEntry = ({group, history, project, task, dispatch}) => {
    const [expanded, setExpanded] = useState(false)
    const [loading, setLoading] = useState(true)
    const [taskNum, setTaskNum] = useState('')

    useEffect(() => {
        const getTaskNumber = async () => {
            const response = await dispatch(getTaskNumberForTaskOfStepAction(task.id, task.step.id))
            setTaskNum(response.data)
        }
        getTaskNumber()
            .then(() => setLoading(false))
    }, [task, dispatch])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {loading ? (
                <TaskTableRow>
                    <TableData>
                        <Loading />
                    </TableData>
                </TaskTableRow>
            ) : (
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
                        <ExpandedTableRow>
                            <td colSpan={8}>
                                <EntryExpanded
                                    history={history}
                                    project={project}
                                    task={task}
                                />
                            </td>
                        </ExpandedTableRow>
                    ) : null}
                </>
            )}
        </>
    )
}

export default TaskTableEntry
