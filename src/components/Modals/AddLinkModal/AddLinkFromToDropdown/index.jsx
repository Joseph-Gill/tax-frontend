import React from 'react'
import {DropdownOption} from '../../../../style/options'
import {AddEntityFromToDropdown, AddEntityTitle, AddEntityTitleInputContainer} from '../styles'


const AddLinkFromToDropdown = ({addLinkInfo, fromToOptions, name, title, setAddLinkInfo}) => {
    return (
        <AddEntityTitleInputContainer>
            <AddEntityTitle>{title}</AddEntityTitle>
            <AddEntityFromToDropdown
                name={name}
                onChange={(e) => setAddLinkInfo({...addLinkInfo, [e.target.name]: e.target.value})}
                value={addLinkInfo[name]}
            >
                <DropdownOption disabled value=''>Select an entity</DropdownOption>
                {fromToOptions}
            </AddEntityFromToDropdown>
        </AddEntityTitleInputContainer>
    )
}

export default AddLinkFromToDropdown
