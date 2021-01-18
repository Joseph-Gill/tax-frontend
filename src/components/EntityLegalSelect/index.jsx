import React from 'react'
import {EntityLegalFormSelect} from '../../style/select'
import {EntityOption} from '../../style/options'


const EntityLegalSelect = ({callingComponent, legalForm}) => {
    return (
        <EntityLegalFormSelect
            callingComponent={callingComponent}
            id='legalForm'
            name='legalForm'
            ref={legalForm}
        >
            <EntityOption value=''>Select a legal form </EntityOption>
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
