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
    width: 100px;
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
    width: 200px;
`

const AddEntityLabelInput = styled(BaseInput)`
  width: 200px;
`


const AddLinkModal = ({cancelNewEntityLinkHandler, setShowAddLink}) => {

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
                        value=''
                    >
                        <DropdownOption disabled value=''>Select an entity</DropdownOption>
                    </AddEntityFromToDropdown>
                </AddEntityTitleInputContainer>
                <AddEntityTitleInputContainer>
                    <AddEntityTitle>To</AddEntityTitle>
                    <AddEntityFromToDropdown
                        value=''
                    >
                        <DropdownOption disabled value=''>Select an entity</DropdownOption>
                    </AddEntityFromToDropdown>
                </AddEntityTitleInputContainer>
                <AddEntityTitleInputContainer>
                    <AddEntityTitle>Label</AddEntityTitle>
                    <AddEntityLabelInput
                        placeholder='Enter your label'
                        type='text'
                    />
                </AddEntityTitleInputContainer>
                <AddEntityTitleInputContainer>
                    <AddEntityTitle>Type</AddEntityTitle>
                    <AddEntityTypeColorLabelDropdown
                        value=''
                    >
                        <DropdownOption disabled value=''>Select a type</DropdownOption>
                        <DropdownOption>C Link</DropdownOption>
                        <DropdownOption>S Link</DropdownOption>
                    </AddEntityTypeColorLabelDropdown>
                </AddEntityTitleInputContainer>
                <AddEntityTitleInputContainer>
                    <AddEntityTitle>Color</AddEntityTitle>
                    <AddEntityTypeColorLabelDropdown
                        value=''
                    >
                        <DropdownOption disabled value=''>Select a color</DropdownOption>
                        <DropdownOption>Blue</DropdownOption>
                        <DropdownOption>Yellow</DropdownOption>
                        <DropdownOption>Orange</DropdownOption>
                    </AddEntityTypeColorLabelDropdown>
                </AddEntityTitleInputContainer>
                <AddDeleteModalCloseContainer>
                    <AuthenticatedButtonCancel onClick={cancelNewEntityLinkHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton>Save</AddEntitySaveButton>
                </AddDeleteModalCloseContainer>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddLinkModal
