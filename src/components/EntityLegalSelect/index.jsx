import React from 'react'
import {EntityLegalFormSelect} from '../../style/select'
import {EntityOption} from '../../style/options'


const EntityLegalSelect = ({callingComponent, legalForm, setLegalForm}) => {
    return (
        <EntityLegalFormSelect
            callingComponent={callingComponent}
            id='legalForm'
            name='legalForm'
            onChange={(e) => setLegalForm(e.target.value)}
            value={legalForm}
        >
            <EntityOption disabled value=''>Select a legal form </EntityOption>
            <EntityOption value='Corporation'>Corporation</EntityOption>
            <EntityOption value='Partnership'>Partnership</EntityOption>
            <EntityOption value='Branch'>Branch</EntityOption>
            <EntityOption value='Disregarded Entity'>Disregarded Entity</EntityOption>
            <EntityOption value='Representative Office'>Representative Office</EntityOption>
            <EntityOption value='Hybrid Entity'>Hybrid Entity</EntityOption>
            <EntityOption value='Reverse Entity'>Reverse Entity</EntityOption>
        </EntityLegalFormSelect>
    )
}

export default EntityLegalSelect
