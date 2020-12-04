import React from 'react'
import {TableButton} from '../../../../../style/buttons'
import {TableContainer} from '../../../../../style/containers'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../../../style/tables'


const PendingComments = ({comments}) => {
    return (
        <TableContainer>
            <CommentTable>
                <TableTitleRow>
                    <TableHeader>Step</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader>Last edited by</TableHeader>
                    <TableHeader>Action</TableHeader>
                </TableTitleRow>
                <TableDataRow>
                    <TableData>12</TableData>
                    <TableData>Open</TableData>
                    <TableData />
                    <TableData>
                        <TableButton>Go to step</TableButton>
                    </TableData>
                </TableDataRow >
                <TableDataRow >
                    <TableData>12</TableData>
                    <TableData>To Review</TableData>
                    <TableData>Switzerland ( Tax ) C. Rohrl</TableData>
                    <TableData>
                        <TableButton>Go to step</TableButton>
                    </TableData>
                </TableDataRow >
            </CommentTable>
        </TableContainer>
    )
}

export default PendingComments
