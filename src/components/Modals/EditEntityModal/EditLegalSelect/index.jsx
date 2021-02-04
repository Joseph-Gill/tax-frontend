import React from 'react'
import EntityLegalSelect from '../../../EntityLegalSelect'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'


const EditLegalSelect = ({editEntityInfo, error, legalForm, setLegalForm}) => {
    return (
        <div>
            <ActiveInputLabel>Legal Form</ActiveInputLabel>
            <EntityLegalSelect
                disabled={!editEntityInfo.entitySelected}
                legalForm={legalForm}
                setLegalForm={setLegalForm}
            />
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityLegalForm}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EditLegalSelect
