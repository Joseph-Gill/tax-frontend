import React from 'react'
import DropdownContentImage from '../DropdownComponents/DropdownContentImage'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import editIcon from '../../../assets/icons/tax_cheetah_edit_icon_24px.svg'
import {DropdownContent, DropdownContentContainer} from '../../../style/dropdowns'
import {DropdownButtonContainer, DropdownContentText} from '../styles'



const EditEntityLinkDropdown = ({setShowEditEntity, setShowEditDropdown, showEditDropdown,
                                    stepChart, setShowEditLink}) => {

    const editEntityClickHandler = () => {
        setShowEditDropdown(!showEditDropdown)
        setShowEditEntity(true)
    }

    const editLinkClickHandler = () => {
        setShowEditDropdown(!showEditDropdown)
        setShowEditLink(true)
    }

    return (
        <DropdownInternalContainer
            setDropdownView={setShowEditDropdown}
            showDropdownView={showEditDropdown}
        >
            <DropdownButtonContainer onClick={() => setShowEditDropdown(!showEditDropdown)}>
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
        </DropdownInternalContainer>
    )
}

export default EditEntityLinkDropdown
