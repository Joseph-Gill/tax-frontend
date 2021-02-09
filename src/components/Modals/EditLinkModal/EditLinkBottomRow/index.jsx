import React from 'react'
import {ActiveInputLabel} from '../../../../style/labels'
import {EntityFormSelect} from '../../../../style/select'
import {DropdownOption} from '../../../../style/options'
import {EditEntityLinkRowContainer, EntityErrorContainer} from '../../styles'


const EditLinkBottomRow = ({setTargetLink, targetLink}) => {
    return (
        <EditEntityLinkRowContainer>
            <div>
                <ActiveInputLabel>Type</ActiveInputLabel>
                <EntityFormSelect
                    disabled={!targetLink.linkSelected}
                    onChange={(e) => setTargetLink({...targetLink, type: e.target.value})}
                    value={targetLink.type}
                >
                    <DropdownOption disabled value=''>Select a type</DropdownOption>
                    <DropdownOption value='clink'>C Link</DropdownOption>
                    <DropdownOption value='slink'>S Link</DropdownOption>
                </EntityFormSelect>
            </div>
            <div>
                <ActiveInputLabel>Color</ActiveInputLabel>
                <EntityFormSelect
                    disabled={!targetLink.linkSelected}
                    onChange={(e) => setTargetLink({...targetLink, template: e.target.value})}
                    value={targetLink.template}
                >
                    <DropdownOption disabled value=''>Select a color</DropdownOption>
                    <DropdownOption value='blue'>Blue</DropdownOption>
                    <DropdownOption value='yellow'>Yellow</DropdownOption>
                    <DropdownOption value='orange'>Orange</DropdownOption>
                </EntityFormSelect>
                <EntityErrorContainer />
            </div>
        </EditEntityLinkRowContainer>
    )
}

export default EditLinkBottomRow
