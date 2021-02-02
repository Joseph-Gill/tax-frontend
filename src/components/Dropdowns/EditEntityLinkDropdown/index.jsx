import React from 'react'
import editIcon from '../../../assets/icons/tax_cheetah_edit_icon_24px.svg'
import DropdownContentImage from '../DropdownContentImage'
import {DropdownButtonContainer, DropdownContainer, DropdownContent, DropdownContentContainer,
    DropdownContentText} from '../styles'



const EditEntityLinkDropdown = ({setShowAddDropdown, setShowEditEntity, setShowEditDropdown,
                                    setShowRemoveDropdown, showEditDropdown, stepChart, setShowEditLink}) => {

    const editEntityClickHandler = () => {
        setShowEditDropdown(!showEditDropdown)
        setShowEditEntity(true)
    }

    const editLinkClickHandler = () => {
        setShowEditDropdown(!showEditDropdown)
        setShowEditLink(true)
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
                    <DropdownContentImage dropdownCalling='Edit' />
                </DropdownContent>
                {stepChart ? (
                    <DropdownContent onClick={editLinkClickHandler}>
                        <DropdownContentText>Edit Link</DropdownContentText>
                        <DropdownContentImage dropdownCalling='Edit' />
                    </DropdownContent>
                ) : null}
            </DropdownContentContainer>
        </DropdownContainer>
    )
}

export default EditEntityLinkDropdown
