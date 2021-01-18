import React from 'react'
import styled from 'styled-components/macro'
import {StatusDropdown} from '../../../style/dropdowns'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer,
    AddDeleteModalInternalContainer, AddDeleteModalTitleContainer} from '../styles'
import {DropdownOption} from '../../../style/options'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../style/buttons'


const RemoveLinkInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 500px;
    height: 230px;
`

const RemoveLinkDropdown = styled(StatusDropdown)`
    width: 430px;
`

const RemoveLinkButton = styled(RedLargerButton)`
    width: 100px;
    margin-left: 23px;
`

const RemoveLinkButtonContainer = styled.div`
    width: 430px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const RemoveLinkModal = ({linkOptions, linkToRemove, setLinkToRemove, setShowRemoveLink}) => {
    return (
        <AddDeleteModalExternalContainer>
            <RemoveLinkInternalContainer>
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
                    <RemoveLinkButton>Remove</RemoveLinkButton>
                </RemoveLinkButtonContainer>
            </RemoveLinkInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default RemoveLinkModal
