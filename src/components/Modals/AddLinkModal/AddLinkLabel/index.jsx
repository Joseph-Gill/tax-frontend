import React from 'react'
import {EntityErrorContainer} from '../../styles'
import {AddEntityLabelInput, AddEntityTitle, AddEntityTitleInputContainer} from '../styles'


const AddLinkLabel = ({addLinkInfo, setAddLinkInfo}) => {
    return (
        <div>
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
            <EntityErrorContainer />
        </div>
    )
}

export default AddLinkLabel
