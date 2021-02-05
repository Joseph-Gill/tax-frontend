import React from 'react'
import {DropdownOption} from '../../../../style/options'
import {AddEntityTitle, AddEntityTitleInputContainer, AddEntityTypeColorLabelDropdown} from '../styles'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'


const AddLinkTypeDropdown = ({addLinkInfo, error, setAddLinkInfo}) => {
    return (
        <div>
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
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.linkType}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLinkTypeDropdown
