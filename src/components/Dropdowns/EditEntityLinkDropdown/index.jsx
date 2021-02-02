import React from 'react'
import editIcon from '../../../assets/icons/tax_cheetah_edit_icon_24px.svg'
import DropdownContentImage from '../DropdownContentImage'
import {DropdownButtonContainer, DropdownContainer, DropdownContent, DropdownContentContainer,
    DropdownContentText} from '../styles'



const EditEntityLinkDropdown = ({setShowAddDropdown, setShowEditEntity, setShowEditDropdown,
                                    setShowRemoveDropdown, showEditDropdown, stepChart}) => {

    const editEntityClickHandler = () => {
        setShowEditDropdown(!showEditDropdown)
        setShowEditEntity(true)
    }

    const toggleEditEntityHandler = () => {
        setShowRemoveDropdown(false)
        setShowAddDropdown(false)
        setShowEditDropdown(!showEditDropdown)
    }

    return (
        <DropdownContainer>
            <DropdownButtonContainer onClick={toggleEditEntityHandler}>
                <img alt='Edit Entity' src={editIcon} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showEditDropdown ? 1 : 0}>
                <DropdownContent onClick={editEntityClickHandler}>
                    <DropdownContentText>Edit Entity</DropdownContentText>
                    <DropdownContentImage />
                </DropdownContent>
                {stepChart ? (
                    <DropdownContent>
                        <DropdownContentText>Edit Link</DropdownContentText>
                        <DropdownContentImage />
                    </DropdownContent>
                ) : null}
            </DropdownContentContainer>
        </DropdownContainer>
    )
}

export default EditEntityLinkDropdown
