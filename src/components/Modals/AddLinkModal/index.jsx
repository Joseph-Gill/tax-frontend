import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {DropdownOption} from '../../../style/options'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddEntityFromToDropdown, AddEntityLabelInput, AddEntityTitle, AddEntityTitleInputContainer, AddEntityTypeColorLabelDropdown} from './styles'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer, AddEntityLinkModalInternalContainer, AddEntitySaveButton} from '../styles'


const AddLinkModal = ({addLinkInfo, cancelNewEntityLinkHandler, fromToOptions, saveNewLinkHandler, setAddLinkInfo, setShowAddLink}) => {

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <AddEntityLinkModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowAddLink(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Select link options</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <AddEntityTitleInputContainer>
                    <AddEntityTitle>From</AddEntityTitle>
                    <AddEntityFromToDropdown
                        name='from'
                        onChange={(e) => setAddLinkInfo({...addLinkInfo, [e.target.name]: e.target.value})}
                        value={addLinkInfo.from}
                    >
                        <DropdownOption disabled value=''>Select an entity</DropdownOption>
                        {fromToOptions}
                    </AddEntityFromToDropdown>
                </AddEntityTitleInputContainer>
                <AddEntityTitleInputContainer>
                    <AddEntityTitle>To</AddEntityTitle>
                    <AddEntityFromToDropdown
                        name='to'
                        onChange={(e) => setAddLinkInfo({...addLinkInfo, [e.target.name]: e.target.value})}
                        value={addLinkInfo.to}
                    >
                        <DropdownOption disabled value=''>Select an entity</DropdownOption>
                        {fromToOptions}
                    </AddEntityFromToDropdown>
                </AddEntityTitleInputContainer>
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
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelNewEntityLinkHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton onClick={saveNewLinkHandler}>Save</AddEntitySaveButton>
                </AddDeleteModalButtonContainer>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddLinkModal
