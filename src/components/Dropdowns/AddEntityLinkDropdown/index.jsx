import React from 'react'
import plusSign from '../../../assets/icons/tax_cheetah_plus_icon_24px.svg'
import DropdownContentImage from '../DropdownContentImage'
import {DropdownButtonContainer, DropdownContainer, DropdownContent,
    DropdownContentContainer, DropdownContentText} from '../styles'


const AddEntityLinkDropdown = ({setShowAddDropdown, setShowAddEntity, setShowEditDropdown, setShowRemoveDropdown,
                                   showAddDropdown, stepChart, setShowAddLink}) => {

    const addEntityClickHandler = () => {
        setShowAddDropdown(!showAddDropdown)
        setShowAddEntity(true)
    }

    const addLinkClickHandler = () => {
        setShowAddDropdown(!showAddDropdown)
        setShowAddLink(true)
    }

    const toggleAddEntityHandler = () => {
        setShowRemoveDropdown(false)
        setShowEditDropdown(false)
        setShowAddDropdown(!showAddDropdown)
    }

    return (
        <DropdownContainer>
            <DropdownButtonContainer onClick={toggleAddEntityHandler}>
                <img alt='Add Entity' src={plusSign} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showAddDropdown ? 1 : 0}>
                <DropdownContent onClick={addEntityClickHandler}>
                    <DropdownContentText>Add Entity</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Add' />
                </DropdownContent>
                {stepChart ? (
                    <DropdownContent onClick={addLinkClickHandler}>
                        <DropdownContentText>Add Link</DropdownContentText>
                        <DropdownContentImage dropdownCalling='Add' />
                    </DropdownContent>
                ) : null}
            </DropdownContentContainer>
        </DropdownContainer>
    )
}

export default AddEntityLinkDropdown
