import React from 'react'
import {CommentTable, TableHeader, TableTitleRow} from '../../../style/tables'
import {CountryDropdown} from 'react-country-region-selector';
import { v4 as uuidv4 } from 'uuid';
import {EntityLegalFormSelect, EntityOption, EntityParentSelect, EntityTableContainer, EntityTitle, NameTableInput, TableFooterInputContainer, TaxRateTableInput} from './styles'


const EntityInfo = ({availableParentNames, countryName, entityName, legalForm, parentName, setCountryName, taxRate}) => {
    return (
        <EntityTableContainer>
            <EntityTitle>Entities</EntityTitle>
            <CommentTable>
                <thead>
                    <TableTitleRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Parent</TableHeader>
                        <TableHeader>Country</TableHeader>
                        <TableHeader>Legal Form</TableHeader>
                        <TableHeader>Tax Rate</TableHeader>
                    </TableTitleRow>
                </thead>
                <tbody />
                <tfoot>
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
                                {!availableParentNames.length ?
                                    <EntityOption value=''>Ultimate</EntityOption> : (
                                        <>
                                            <EntityOption value=''>Select a parent</EntityOption>
                                            {availableParentNames.map(parent => <EntityOption key={uuidv4()} value={`${parent}`}>{parent}</EntityOption>)}
                                        </>)}
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
                                    fontWeight: '600'
                                }}
                                value={countryName}
                            />
                        </TableFooterInputContainer>
                        <TableFooterInputContainer>
                            <EntityLegalFormSelect id='legalForm' name='legalForm' ref={legalForm}>
                                <EntityOption value=''>Select a legal form </EntityOption>
                                <EntityOption value='Corporation'>Corporation</EntityOption>
                                <EntityOption value='Partnership'>Partnership</EntityOption>
                                <EntityOption value='Branch'>Branch</EntityOption>
                                <EntityOption value='Disregarded Entity'>Disregarded Entity</EntityOption>
                                <EntityOption value='Representative Office'>Representative Office</EntityOption>
                                <EntityOption value='Hybrid Entity'>Hybrid Entity</EntityOption>
                                <EntityOption value='Reverse Entity'>Reverse Entity</EntityOption>
                            </EntityLegalFormSelect>
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
                </tfoot>
            </CommentTable>
        </EntityTableContainer>
    )
}

export default EntityInfo
