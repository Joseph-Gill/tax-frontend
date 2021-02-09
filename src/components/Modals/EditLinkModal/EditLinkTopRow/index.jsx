import React from 'react'
import ModalInput from '../../ModalComponents/ModalInput'
import {DropdownOption} from '../../../../style/options'
import {EntityFormSelect} from '../../../../style/select'
import {EditEntityLinkRowContainer} from '../../styles'


const EditLinkTopRow = ({linkOptions, linkToEditChangeHandler, setTargetLink, targetLink}) => {
    return (
        <EditEntityLinkRowContainer>
            <EntityFormSelect
                onChange={(e) => linkToEditChangeHandler(e)}
                value={targetLink.id}
            >
                <DropdownOption disabled value=''>Select a Link</DropdownOption>
                {linkOptions}
            </EntityFormSelect>
            <ModalInput
                changeHandler={(e) => setTargetLink({...targetLink, label: e.target.value})}
                label='Label'
                name='label'
                placeholder='Enter your label'
                type='text'
                value={targetLink.label}
            />
        </EditEntityLinkRowContainer>
    )
}

export default EditLinkTopRow
