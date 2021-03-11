import React from 'react'
import EntityLegalSelect from '../../../EntityLegalSelect'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'

// Can be removed after AddEntityModal is updated with custom dropdowns
const AddLegalSelect = ({legalForm, setLegalForm, error}) => {
    return (
        <div>
            <ActiveInputLabel>Legal Form</ActiveInputLabel>
            <EntityLegalSelect
                callingComponent='AddEntityModal'
                legalForm={legalForm}
                setLegalForm={setLegalForm}
            />
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityLegalForm}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLegalSelect
