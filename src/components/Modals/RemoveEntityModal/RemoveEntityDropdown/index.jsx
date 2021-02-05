import React from 'react'
import {RemoveLinkEntityDropdown} from '../../styles'
import {DropdownOption} from '../../../../style/options'


const RemoveEntityDropdown = ({entityOptions, entityToRemove, setEntityToRemove}) => {
    return (
        <RemoveLinkEntityDropdown
            onChange={(e) => setEntityToRemove(e.target.value)}
            value={entityToRemove}
        >
            <DropdownOption disabled value=''>Select an Entity</DropdownOption>
            {entityOptions}
        </RemoveLinkEntityDropdown>
    )
}

export default RemoveEntityDropdown
