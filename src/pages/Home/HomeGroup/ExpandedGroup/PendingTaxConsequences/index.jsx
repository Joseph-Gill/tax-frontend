import React from 'react'
import TaxConsequenceEditedBy from './TaxConsequenceEditedBy'
import {TableButton} from '../../../../../style/buttons'
import {NoTasksOrTaxConsequencesDisplay, TableContainer} from '../../../../../style/containers'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../../../style/tables'
import {NoTasksOrTaxConsequencesText} from '../../../../../style/text'


const PendingTaxConsequences = ({goToSpecificStepHandler, groupId, taxConsequencesToRender}) => {
    //Renders each tax consequence component to display
    const renderTaxConsequences = () => (
        taxConsequencesToRender.map(tax => {
            return (
                <TableDataRow key={tax.id}>
                    <TableData>{tax.step.number}</TableData>
                    <TableData>{tax.location}</TableData>
                    <TableData>{tax.description ? 'To Review' : 'Open'}</TableData>
                    <TableData>
                        {!tax.description ? null : tax.editing_user ?
                            <TaxConsequenceEditedBy groupId={groupId} user={tax.editing_user.user} /> :
                            <TaxConsequenceEditedBy groupId={groupId} user={tax.creating_user.user} />}
                    </TableData>
                    <TableData>
                        <TableButton onClick={() => goToSpecificStepHandler(tax.step.number)}>Go to step</TableButton>
                    </TableData>
                </TableDataRow>
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
                            <TableHeader>Location</TableHeader>
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
