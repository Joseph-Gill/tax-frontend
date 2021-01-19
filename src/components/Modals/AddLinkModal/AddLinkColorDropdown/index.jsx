import React from 'react'
import {DropdownOption} from '../../../../style/options'
import {AddEntityTitle, AddEntityTitleInputContainer, AddEntityTypeColorLabelDropdown} from '../styles'


const AddLinkColorDropdown = ({addLinkInfo, setAddLinkInfo}) => {
    return (
        <AddEntityTitleInputContainer>
            <AddEntityTitle>Color</AddEntityTitle>
            <AddEntityTypeColorLabelDropdown
                name='color'
                onChange={(e) => setAddLinkInfo({...addLinkInfo, [e.target.name]: e.target.value})}
                value={addLinkInfo.color}
            >
                <DropdownOption disabled value=''>Select a color</DropdownOption>
                <DropdownOption value='blue'>Blue</DropdownOption>
                <DropdownOption value='yellow'>Yellow</DropdownOption>
                <DropdownOption value='orange'>Orange</DropdownOption>
            </AddEntityTypeColorLabelDropdown>
        </AddEntityTitleInputContainer>
    )
}

export default AddLinkColorDropdown
