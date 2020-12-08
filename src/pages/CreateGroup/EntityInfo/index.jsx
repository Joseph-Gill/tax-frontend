import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../../style/titles'
import {TableContainer} from '../../../style/containers'
import {CommentTable, TableHeader, TableTitleRow} from '../../../style/tables'
import {BaseInput} from '../../../style/inputs'


const EntityTitle = styled(AuthenticatedPageSectionTitle)`
    margin-top: 0;
    padding-left: 16px;
    padding-bottom: 10px;
`

const EntityTableContainer = styled(TableContainer)`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: 20px;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    padding-top: 20px;
`

const TableFooterInputContainer = styled.td`
    width: 100%;
    border: 1px solid ${props => props.theme.grayFour};
`

const NameTableInput = styled(BaseInput)`
    width: 140px;
    height: 34px;
    font-size: 10px;
    line-height: 16px;
    margin: 17px 10px;

    ::placeholder {
        font-size: 10px;
        line-height: 16px;
    }
`

const ParentTableInput = styled(NameTableInput)`
    width: 98px;
`

const CountryTableInput = styled(NameTableInput)`
    width: 157px;
`

const TaxRateTableInput = styled(NameTableInput)`
    width: 186px;
`


const EntityInfo = ({countryName, entityName, parentName, taxRate}) => {
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
                <tbody>
                </tbody>
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
                            <ParentTableInput
                                name='parentName'
                                placeholder='Enter parent'
                                ref={parentName}
                                type='text'
                            />
                        </TableFooterInputContainer>
                        <TableFooterInputContainer>
                            <CountryTableInput
                                name='countryName'
                                placeholder='Enter Country Name'
                                ref={countryName}
                                type='text'
                            />
                        </TableFooterInputContainer>
                        <TableFooterInputContainer>
                            <input type='text' />
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
