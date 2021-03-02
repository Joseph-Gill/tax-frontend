import React from 'react'
import DropdownContentImage from '../DropdownComponents/DropdownContentImage'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import plusSign from '../../../assets/icons/tax_cheetah_plus_icon_24px.svg'
import {DropdownContent, DropdownContentContainer} from '../../../style/dropdowns'
import {DropdownButtonContainer, DropdownContentText} from '../styles'


const AddEntityLinkDropdown = ({setShowAddDropdown, setShowAddEntity, showAddDropdown,
                                   stepChart, setShowAddLink}) => {

    const addEntityClickHandler = () => {
        setShowAddDropdown(!showAddDropdown)
        setShowAddEntity(true)
    }

    const addLinkClickHandler = () => {
        setShowAddDropdown(!showAddDropdown)
        setShowAddLink(true)
    }

    return (
        <DropdownInternalContainer
            setDropdownView={setShowAddDropdown}
            showDropdownView={showAddDropdown}
        >
            <DropdownButtonContainer onClick={() => setShowAddDropdown(!showAddDropdown)}>
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
