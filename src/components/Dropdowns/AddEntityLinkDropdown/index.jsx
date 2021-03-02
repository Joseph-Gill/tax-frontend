import React from 'react'
import DropdownContentImage from '../DropdownComponents/DropdownContentImage'
import plusSign from '../../../assets/icons/tax_cheetah_plus_icon_24px.svg'
import {DropdownContent, DropdownContentContainer} from '../../../style/dropdowns'
import {DropdownButtonContainer, DropdownContentText} from '../styles'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'


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
        <DropdownInternalContainer
            setDropdownView={setShowAddDropdown}
            showDropdownView={showAddDropdown}
        >
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
        </DropdownInternalContainer>
    )
}

export default AddEntityLinkDropdown
