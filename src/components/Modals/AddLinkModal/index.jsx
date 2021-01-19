import React from 'react'
import {useSpring} from 'react-spring'
import AddLinkTypeDropdown from './AddLinkTypeDropdown'
import AddLinkColorDropdown from './AddLinkColorDropdown'
import AddLinkFromToDropdown from './AddLinkFromToDropdown'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddEntityLabelInput, AddEntityTitle, AddEntityTitleInputContainer} from './styles'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer,
    AddEntityLinkModalInternalContainer, AddEntitySaveButton} from '../styles'


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
                <AddLinkFromToDropdown
                    addLinkInfo={addLinkInfo}
                    fromToOptions={fromToOptions}
                    name='from'
                    setAddLinkInfo={setAddLinkInfo}
                    title='From'
                />
                <AddLinkFromToDropdown
                    addLinkInfo={addLinkInfo}
                    fromToOptions={fromToOptions}
                    name='to'
                    setAddLinkInfo={setAddLinkInfo}
                    title='To'
                />
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
                <AddLinkTypeDropdown
                    addLinkInfo={addLinkInfo}
                    setAddLinkInfo={setAddLinkInfo}
                />
                <AddLinkColorDropdown
                    addLinkInfo={addLinkInfo}
                    setAddLinkInfo={setAddLinkInfo}
                />
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelNewEntityLinkHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton onClick={saveNewLinkHandler}>Save</AddEntitySaveButton>
                </AddDeleteModalButtonContainer>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddLinkModal
