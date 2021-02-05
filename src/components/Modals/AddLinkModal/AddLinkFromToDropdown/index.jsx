import React from 'react'
import {ErrorMessage} from '../../../../style/messages'
import {DropdownOption} from '../../../../style/options'
import {EntityErrorContainer} from '../../styles'
import {AddEntityFromToDropdown, AddEntityTitle, AddEntityTitleInputContainer} from '../styles'


const AddLinkFromToDropdown = ({addLinkInfo, error, fromToOptions, name, title, setAddLinkInfo}) => {
    return (
        <div>
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
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLinkFromToDropdown
