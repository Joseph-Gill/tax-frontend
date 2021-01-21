import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import EntityLegalSelect from '../../EntityLegalSelect'
import {EntityParentSelect} from '../../../style/select'
import {NameTableInput, TableFooterInputContainer, TaxRateTableInput} from './styles'


const EntityInfoFooterRow = ({countryName, legalForm, newEntityInfo, renderParentNameOptions,
                                 setCountryName, setLegalForm, setNewEntityInfo}) => {
    return (
        <tr>
            <TableFooterInputContainer>
                <NameTableInput
                    name='entityName'
                    onChange={(e) => setNewEntityInfo({...newEntityInfo, entityName: e.target.value})}
                    placeholder='Enter name'
                    type='text'
                    value={newEntityInfo.entityName}
                />
            </TableFooterInputContainer>
            <TableFooterInputContainer>
                <EntityParentSelect
                    id='parentName'
                    name='parentName'
                    onChange={(e) => setNewEntityInfo({...newEntityInfo, parentName: e.target.value})}
                    value={newEntityInfo.parentName}
                >
                    {renderParentNameOptions}
                </EntityParentSelect>
            </TableFooterInputContainer>
            <TableFooterInputContainer>
                <CountryDropdown
                    classes='entityInfoCountryDropdown'
                    onChange={(val) => setCountryName(val)}
                    value={countryName}
                />
            </TableFooterInputContainer>
            <TableFooterInputContainer>
                <EntityLegalSelect
                    legalForm={legalForm}
                    setLegalForm={setLegalForm}
                />
            </TableFooterInputContainer>
            <TableFooterInputContainer>
                <TaxRateTableInput
                    name='taxRate'
                    onChange={(e) => setNewEntityInfo({...newEntityInfo, taxRate: e.target.value})}
                    placeholder='Enter current income tax rate'
                    type='text'
                    value={newEntityInfo.taxRate}
                />
            </TableFooterInputContainer>
        </tr>
    )
}

export default EntityInfoFooterRow
