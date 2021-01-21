import React from 'react'
import {AddEntityLabelInput, AddEntityTitle, AddEntityTitleInputContainer} from '../styles'


const AddLinkLabel = ({addLinkInfo, setAddLinkInfo}) => {
    return (
        <AddEntityTitleInputContainer>
            <AddEntityTitle>Label</AddEntityTitle>
            <AddEntityLabelInput
                name='label'
                onChange={(e) => setAddLinkInfo({...addLinkInfo, [e.target.name]: e.target.value})}
                placeholder='Enter your label'
                type='text'
                value={addLinkInfo.label}
            />
        </AddEntityTitleInputContainer>
    )
}

export default AddLinkLabel
