import React from 'react'
import styled from 'styled-components/macro'
import {useSpring} from 'react-spring'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer, AddEntityLinkModalInternalContainer, AddEntitySaveButton} from '../styles'
import {CloseIcon} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {StatusDropdown} from '../../../style/dropdowns'
import {DropdownOption} from '../../../style/options'
import {BaseInput} from '../../../style/inputs'


const AddEntityTitle = styled.label`
    width: 70px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
`

const AddEntityTitleInputContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const AddEntityTypeColorLabelDropdown = styled(StatusDropdown)`
    width: 125px;
`

const AddEntityFromToDropdown = styled(StatusDropdown)`
    width: 225px;
`

const AddEntityLabelInput = styled(BaseInput)`
  width: 200px;
`


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
                    <AuthenticatedPageTitle>Select Link options</AuthenticatedPageTitle>
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
                        <DropdownOption value=''>Orange</DropdownOption>
                    </AddEntityTypeColorLabelDropdown>
                </AddEntityTitleInputContainer>
                <AddDeleteModalCloseContainer>
                    <AuthenticatedButtonCancel onClick={cancelNewEntityLinkHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton onClick={saveNewLinkHandler}>Save</AddEntitySaveButton>
                </AddDeleteModalCloseContainer>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddLinkModal
