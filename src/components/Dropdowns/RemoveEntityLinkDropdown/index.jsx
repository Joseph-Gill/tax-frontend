import React from 'react'
import minusSign from '../../../assets/icons/tax_cheetah_minus_icon_24px.svg'
import {DropdownButtonContainer, DropdownContainer, DropdownContent, DropdownContentContainer, DropdownContentText} from '../styles'
import DropdownContentImage from '../DropdownContentImage'


const RemoveEntityLinkDropdown = ({setShowAddDropdown, setShowRemoveEntity, setShowEditDropdown, setShowRemoveDropdown,
                                   showRemoveDropdown, stepChart, setShowRemoveLink}) => {

    const removeEntityClickHandler = () => {
        setShowRemoveDropdown(!showRemoveDropdown)
        setShowRemoveEntity(true)
    }

    const removeLinkClickHandler = () => {
        setShowRemoveDropdown(!showRemoveDropdown)
        setShowRemoveLink(true)
    }

    const toggleRemoveEntityHandler = () => {
        setShowAddDropdown(false)
        setShowEditDropdown(false)
        setShowRemoveDropdown(!showRemoveDropdown)
    }

    return (
        <DropdownContainer>
            <DropdownButtonContainer onClick={toggleRemoveEntityHandler}>
                <img alt='Remove Entity' src={minusSign} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showRemoveDropdown ? 1 : 0}>
                <DropdownContent onClick={removeEntityClickHandler}>
                    <DropdownContentText>Remove Entity</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Remove' />
                </DropdownContent>
                {stepChart ? (
                    <DropdownContent onClick={removeLinkClickHandler}>
                        <DropdownContentText>Remove Link</DropdownContentText>
                        <DropdownContentImage dropdownCalling='Remove' />
                    </DropdownContent>
                ) : null}
            </DropdownContentContainer>
        </DropdownContainer>
    )
}

export default RemoveEntityLinkDropdown
