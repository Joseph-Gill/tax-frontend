import React from 'react'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {DropdownOption} from '../../../style/options'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {RemoveLinkButton, RemoveLinkButtonContainer, RemoveLinkDropdown} from './styles'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer, RemoveLinkEntityInternalContainer} from '../styles'


const RemoveLinkModal = ({linkOptions, linkToRemove, removeLinkHandler, setLinkToRemove, setShowRemoveLink}) => {
    return (
        <AddDeleteModalExternalContainer>
            <RemoveLinkEntityInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowRemoveLink(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Select the link to remove</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <RemoveLinkDropdown
                    onChange={(e) => setLinkToRemove(e.target.value)}
                    value={linkToRemove}
                >
                    <DropdownOption disabled value=''>Select a Link</DropdownOption>
                    {linkOptions}
                </RemoveLinkDropdown>
                <RemoveLinkButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowRemoveLink(false)}>Cancel</AuthenticatedButtonCancel>
                    <RemoveLinkButton onClick={removeLinkHandler}>Remove</RemoveLinkButton>
                </RemoveLinkButtonContainer>
            </RemoveLinkEntityInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default RemoveLinkModal
