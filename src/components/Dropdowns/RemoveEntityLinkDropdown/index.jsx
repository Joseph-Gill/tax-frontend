import React from 'react'
import DropdownContentImage from '../DropdownComponents/DropdownContentImage'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import minusSign from '../../../assets/icons/tax_cheetah_minus_icon_24px.svg'
import {DropdownContent, DropdownContentContainer} from '../../../style/dropdowns'
import {DropdownButtonContainer, DropdownContentText} from '../styles'


const RemoveEntityLinkDropdown = ({setShowRemoveEntity, setShowRemoveDropdown, showRemoveDropdown,
                                      stepChart, setShowRemoveLink}) => {

    const removeEntityClickHandler = () => {
        setShowRemoveDropdown(!showRemoveDropdown)
        setShowRemoveEntity(true)
    }

    const removeLinkClickHandler = () => {
        setShowRemoveDropdown(!showRemoveDropdown)
        setShowRemoveLink(true)
    }

    return (
        <DropdownInternalContainer
            setDropdownView={setShowRemoveDropdown}
            showDropdownView={showRemoveDropdown}
        >
            <DropdownButtonContainer onClick={() => setShowRemoveDropdown(!showRemoveDropdown)}>
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
        </DropdownInternalContainer>
    )
}

export default RemoveEntityLinkDropdown
