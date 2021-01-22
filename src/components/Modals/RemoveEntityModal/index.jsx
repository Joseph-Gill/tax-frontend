import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {DropdownOption} from '../../../style/options'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer, RemoveLinkEntityButton, RemoveLinkEntityButtonContainer,
    RemoveLinkEntityDropdown, RemoveLinkEntityInternalContainer} from '../styles'


const RemoveEntityModal = ({entityOptions, entityToRemove, removeEntityHandler, setEntityToRemove,
                               setShowRemoveEntity}) => {

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <RemoveLinkEntityInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowRemoveEntity(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Select the entity to remove</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <RemoveLinkEntityDropdown
                    onChange={(e) => setEntityToRemove(e.target.value)}
                    value={entityToRemove}
                >
                    <DropdownOption disabled value=''>Select an Entity</DropdownOption>
                    {entityOptions}
                </RemoveLinkEntityDropdown>
                <RemoveLinkEntityButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowRemoveEntity(false)}>Cancel</AuthenticatedButtonCancel>
                    <RemoveLinkEntityButton onClick={removeEntityHandler}>Remove</RemoveLinkEntityButton>
                </RemoveLinkEntityButtonContainer>
            </RemoveLinkEntityInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default RemoveEntityModal
