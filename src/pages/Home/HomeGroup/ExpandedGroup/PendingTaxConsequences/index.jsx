import React from 'react'
import {TableButton} from '../../../../../style/buttons'
import {NoTasksOrTaxConsequencesDisplay, TableContainer} from '../../../../../style/containers'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../../../style/tables'
import {NoTasksOrTaxConsequencesText} from '../../../../../style/text'


const PendingTaxConsequences = ({taxConsequencesToRender}) => {
    const renderTaxConsequences = () => (
        taxConsequencesToRender.map(tax => {
            return (
                <TableDataRow key={tax.id}>
                    <TableData>12</TableData>
                    <TableData>Open</TableData>
                    <TableData />
                    <TableData>
                        <TableButton>Go to step</TableButton>
                    </TableData>
                </TableDataRow >
            )
        })
    )

    return (
        <TableContainer>
            {taxConsequencesToRender.length ? (
                <CommentTable>
                    <tbody>
                        <TableTitleRow>
                            <TableHeader>Step</TableHeader>
                            <TableHeader>Status</TableHeader>
                            <TableHeader>Last edited by</TableHeader>
                            <TableHeader>Action</TableHeader>
                        </TableTitleRow>
                        {renderTaxConsequences()}
                    </tbody>
                </CommentTable>
            ) : (
                <NoTasksOrTaxConsequencesDisplay>
                    <NoTasksOrTaxConsequencesText>
                        You have no Tax Consequences to display for this project
                    </NoTasksOrTaxConsequencesText>
                </NoTasksOrTaxConsequencesDisplay>
            )}
        </TableContainer>
    )
}

export default PendingTaxConsequences
