import React from 'react'
import {EntityFormSelect} from '../../style/select'
import {EntityOption} from '../../style/options'


const EntityLegalSelect = ({callingComponent, disabled, legalForm, setLegalForm}) => {
    return (
        <EntityFormSelect
            callingComponent={callingComponent}
            disabled={disabled}
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
        </EntityFormSelect>
    )
}

export default EntityLegalSelect
