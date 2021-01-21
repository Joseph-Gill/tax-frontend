import React from 'react'
import {v4 as uuidv4} from 'uuid'
import EntityInfoTitleRow from './EntityInfoTitleRow'
import EntityInfoFooterRow from './EntityInfoFooterRow'
import {TableData, TableDataRow} from '../../style/tables'
import {EntityOption} from '../../style/options'
import {EntitiesTable, EntitiesTableHeader, EntityTableContainer} from './styles'


const EntityInfo = ({availableParentNames, countryName, legalForm, listOfEntities,
                        newEntityInfo, setCountryName, setLegalForm, setNewEntityInfo}) => {

    const renderParentNameOptions = React.useMemo(() =>
    !availableParentNames.length ?
        <EntityOption value='Ultimate'>Ultimate</EntityOption> : (
            <>
                <EntityOption disabled value=''>Select a parent</EntityOption>
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
                <TableData>{entity.tax_rate ? entity.tax_rate : 'N/A'}</TableData>
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
                        availableParentNames={availableParentNames}
                        countryName={countryName}
                        legalForm={legalForm}
                        newEntityInfo={newEntityInfo}
                        renderParentNameOptions={renderParentNameOptions}
                        setCountryName={setCountryName}
                        setLegalForm={setLegalForm}
                        setNewEntityInfo={setNewEntityInfo}
                    />
                </tfoot>
            </EntitiesTable>
        </EntityTableContainer>
    )
}

export default EntityInfo
