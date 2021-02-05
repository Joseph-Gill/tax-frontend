import React from 'react'
import {RemoveLinkEntityDropdown} from '../../styles'
import {DropdownOption} from '../../../../style/options'


const RemoveLinkDropdown = ({linkOptions, linkToRemove, setLinkToRemove}) => {
    return (
        <RemoveLinkEntityDropdown
            onChange={(e) => setLinkToRemove(e.target.value)}
            value={linkToRemove}
        >
            <DropdownOption disabled value=''>Select a Link</DropdownOption>
            {linkOptions}
        </RemoveLinkEntityDropdown>
    )
}

export default RemoveLinkDropdown
