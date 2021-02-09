import React from 'react'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {EntityFormSelect} from '../../../../style/select'
import {EditEntityLinkRowContainer, EntityErrorContainer} from '../../styles'


const EditLinkMiddleRow = ({error, renderEditLinkToFromOptions, setTargetLink, targetLink}) => {
    return (
        <EditEntityLinkRowContainer>
            <div>
                <ActiveInputLabel>From</ActiveInputLabel>
                <EntityFormSelect
                    disabled={!targetLink.linkSelected}
                    onChange={(e) => setTargetLink({...targetLink, from: e.target.value})}
                    value={targetLink.from}
                >
                    {renderEditLinkToFromOptions}
                </EntityFormSelect>
                <EntityErrorContainer>
                    {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
                </EntityErrorContainer>
            </div>
            <div>
                <ActiveInputLabel>To</ActiveInputLabel>
                <EntityFormSelect
                    disabled={!targetLink.linkSelected}
                    onChange={(e) => setTargetLink({...targetLink, to: e.target.value})}
                    value={targetLink.to}
                >
                    {renderEditLinkToFromOptions}
                </EntityFormSelect>
                <EntityErrorContainer>
                    {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
                </EntityErrorContainer>
            </div>
        </EditEntityLinkRowContainer>
    )
}

export default EditLinkMiddleRow
