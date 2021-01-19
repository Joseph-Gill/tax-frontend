import React from 'react'
import {DropdownOption} from '../../../../style/options'
import {AddEntityTitle, AddEntityTitleInputContainer, AddEntityTypeColorLabelDropdown} from '../styles'


const AddLinkTypeDropdown = ({addLinkInfo, setAddLinkInfo}) => {
    return (
        <AddEntityTitleInputContainer>
            <AddEntityTitle>Type</AddEntityTitle>
            <AddEntityTypeColorLabelDropdown
                name='type'
                onChange={(e) => setAddLinkInfo({...addLinkInfo, [e.target.name]: e.target.value})}
                value={addLinkInfo.type}
            >
                <DropdownOption disabled value=''>Select a type</DropdownOption>
                <DropdownOption value='clink'>C Link</DropdownOption>
                <DropdownOption value='slink'>S Link</DropdownOption>
            </AddEntityTypeColorLabelDropdown>
        </AddEntityTitleInputContainer>
    )
}

export default AddLinkTypeDropdown
