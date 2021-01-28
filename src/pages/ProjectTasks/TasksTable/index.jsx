import React from 'react'
import TaskTableEntry from './TaskTableEntry'
import {NoFilteredTasksStepsContainer} from '../../../style/containers'
import {CommentTable, TableHeader, TableTitleRow} from '../../../style/tables'
import {TaskStatusTableHeader} from './styles'


const TasksTable = ({group, history, project, tasks}) => {

    const renderTaskEntries = () => {
        let taskNum = 1
        let stepNum = 1
        const tasksToDisplay = []
        for (let i = 0; i < tasks.length; i++) {
            if (parseInt(tasks[i].step.number) === stepNum ) {
                const Task = (
                    <TaskTableEntry
                        group={group}
                        history={history}
                        key={tasks[i].id}
                        project={project}
                        task={tasks[i]}
                        taskNum={taskNum}
                    />)
                taskNum += 1
                tasksToDisplay.push(Task)
            } else {
                stepNum += 1
                taskNum = 1
                tasksToDisplay.push(
                    <TaskTableEntry
                        group={group}
                        history={history}
                        key={tasks[i].id}
                        project={project}
                        task={tasks[i]}
                        taskNum={taskNum}
                    />)
                taskNum += 1
            }
        }
        return tasksToDisplay
    }

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
                            {renderTaskEntries()}
                        </tbody>
                    </CommentTable>
                )}
        </div>
    )
}

export default TasksTable
