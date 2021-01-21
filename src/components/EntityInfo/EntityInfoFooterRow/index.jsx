import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import EntityLegalSelect from '../../EntityLegalSelect'
import {EntityParentSelect} from '../../../style/select'
import {NameTableInput, TableFooterInputContainer, TaxRateTableInput} from './styles'


const EntityInfoFooterRow = ({countryName, entityName, legalForm, parentName, renderParentNameOptions,
                                 setCountryName, setLegalForm, taxRate}) => {
    return (
        <tr>
            <TableFooterInputContainer>
                <NameTableInput
                    name='entityName'
                    placeholder='Enter name'
                    ref={entityName}
                    type='text'
                />
            </TableFooterInputContainer>
            <TableFooterInputContainer>
                <EntityParentSelect id='parentName' name='parentName' ref={parentName}>
                    {renderParentNameOptions}
                </EntityParentSelect>
            </TableFooterInputContainer>
            <TableFooterInputContainer>
                <CountryDropdown
                    onChange={(val) => setCountryName(val)}
                     // eslint-disable-next-line react/forbid-component-props
                    style={{
                        width: '157px',
                        height: '34px',
                        fontSize: '10px',
                        lineHeight: '16px',
                        margin: '17px 10px',
                        background: '#FAFAFA',
                        border: '1px solid #D3D8DD',
                        borderRadius: '4px',
                        fontFamily: 'Nunito Sans, sans-serif',
                    }}
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
                    placeholder='Enter current income tax rate'
                    ref={taxRate}
                    type='text'
                />
            </TableFooterInputContainer>
        </tr>
    )
}

export default EntityInfoFooterRow
