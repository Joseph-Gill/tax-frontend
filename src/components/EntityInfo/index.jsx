import React from 'react'
import {v4 as uuidv4} from 'uuid'
import EntityInfoTitleRow from './EntityInfoTitleRow'
import EntityInfoFooterRow from './EntityInfoFooterRow'
import {TableData, TableDataRow} from '../../style/tables'
import {EntityOption} from '../../style/options'
import {EntitiesTable, EntitiesTableHeader, EntityTableContainer} from './styles'


const EntityInfo = ({availableParentNames, countryName, entityName, legalForm, listOfEntities, parentName, setCountryName, taxRate}) => {
    const renderParentNameOptions = React.useMemo(() =>
    !availableParentNames.length ?
        <EntityOption value='Ultimate'>Ultimate</EntityOption> : (
            <>
                <EntityOption value=''>Select a parent</EntityOption>
                {availableParentNames.map(parent => <EntityOption key={uuidv4()} value={parent}>{parent}</EntityOption>)}
            </>), [availableParentNames]
    )

    const renderListOfEntities = React.useMemo(() =>
    listOfEntities.length ?
        listOfEntities.map(entity => (
            <TableDataRow key={uuidv4()}>
                <TableData>{entity.name}</TableData>
                <TableData>{entity.pid}</TableData>
                <TableData>{entity.location}</TableData>
                <TableData>{entity.legal_form}</TableData>
                <TableData>{entity.tax_rate}</TableData>
            </TableDataRow>
        )) : null, [listOfEntities]
    )

    return (
        <EntityTableContainer>
            <EntitiesTable>
                <EntitiesTableHeader>
                    <EntityInfoTitleRow />
                </EntitiesTableHeader>
                <tbody>
                    {renderListOfEntities}
                </tbody>
                <tfoot>
                    <EntityInfoFooterRow
                        countryName={countryName}
                        entityName={entityName}
                        legalForm={legalForm}
                        parentName={parentName}
                        renderParentNameOptions={renderParentNameOptions}
                        setCountryName={setCountryName}
                        taxRate={taxRate}
                    />
                </tfoot>
            </EntitiesTable>
        </EntityTableContainer>
    )
}

export default EntityInfo
