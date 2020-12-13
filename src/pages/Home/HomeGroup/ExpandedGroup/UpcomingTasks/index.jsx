import React from 'react'
import {TableContainer} from '../../../../../style/containers'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../../../style/tables'


const PendingTasks = ({tasks}) => {
    return (
        <TableContainer>
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
                    <TableDataRow>
                        <TableData>8</TableData>
                        <TableData>8.2</TableData>
                        <TableData>File Ruling</TableData>
                        <TableData>27/11/2020</TableData>
                        <TableData>27/11/2020</TableData>
                        <TableData>Switzerland (Tax) A. Horat</TableData>
                        <TableData>resolution.pdf</TableData>
                    </TableDataRow >
                    <TableDataRow>
                        <TableData>2</TableData>
                        <TableData>1.2</TableData>
                        <TableData>File Swiss tax ruling</TableData>
                        <TableData>09/12/2020</TableData>
                        <TableData>09/12/2020</TableData>
                        <TableData>Switzerland (Tax) A. Horat</TableData>
                        <TableData>resolution.pdf</TableData>
                    </TableDataRow >
                    <TableDataRow>
                        <TableData>8</TableData>
                        <TableData>8.2</TableData>
                        <TableData>File Ruling</TableData>
                        <TableData>27/11/2020</TableData>
                        <TableData>27/11/2020</TableData>
                        <TableData>Switzerland (Tax) A. Horat</TableData>
                        <TableData>resolution.pdf</TableData>
                    </TableDataRow >
                </tbody>
            </CommentTable>
        </TableContainer>
    )
}

export default PendingTasks
