import React from 'react'
import {TableHeader} from '../../../style/tables'
import {EntityTitleRow} from './styles'


const EntityInfoTitleRow = () => {
    return (
        <EntityTitleRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Parent</TableHeader>
            <TableHeader>Country</TableHeader>
            <TableHeader>Legal Form</TableHeader>
            <TableHeader>Tax Rate</TableHeader>
        </EntityTitleRow>
    )
}

export default EntityInfoTitleRow
