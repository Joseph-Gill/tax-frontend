import React from 'react'
import {TableButton} from '../../../../../style/buttons'
import {NoTasksOrTaxConsequencesDisplay, TableContainer} from '../../../../../style/containers'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../../../style/tables'
import {NoTasksOrTaxConsequencesText} from '../../../../../style/text'


const PendingTaxConsequences = ({goToSpecificStepHandler, taxConsequencesToRender}) => {
    const renderTaxConsequences = () => (
        taxConsequencesToRender.map(tax => {
            console.log(tax)
            return (
                <TableDataRow key={tax.id}>
                    <TableData>{tax.step.number}</TableData>
                    <TableData>{tax.description ? 'To Review' : 'Open'}</TableData>
                    <TableData>PH for Assigned User Info</TableData>
                    <TableData>
                        <TableButton onClick={() => goToSpecificStepHandler(tax.step.number)}>Go to step</TableButton>
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
