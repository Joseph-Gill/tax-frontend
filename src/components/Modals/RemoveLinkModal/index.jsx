import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {DropdownOption} from '../../../style/options'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer,
    RemoveLinkEntityButton, RemoveLinkEntityButtonContainer, RemoveLinkEntityDropdown,
    RemoveLinkEntityInternalContainer} from '../styles'


const RemoveLinkModal = ({linkOptions, linkToRemove, removeLinkHandler, setLinkToRemove, setShowRemoveLink}) => {

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <RemoveLinkEntityInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowRemoveLink(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Select the link to remove</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <RemoveLinkEntityDropdown
                    onChange={(e) => setLinkToRemove(e.target.value)}
                    value={linkToRemove}
                >
                    <DropdownOption disabled value=''>Select a Link</DropdownOption>
                    {linkOptions}
                </RemoveLinkEntityDropdown>
                <RemoveLinkEntityButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowRemoveLink(false)}>Cancel</AuthenticatedButtonCancel>
                    <RemoveLinkEntityButton onClick={removeLinkHandler}>Remove</RemoveLinkEntityButton>
                </RemoveLinkEntityButtonContainer>
            </RemoveLinkEntityInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default RemoveLinkModal
