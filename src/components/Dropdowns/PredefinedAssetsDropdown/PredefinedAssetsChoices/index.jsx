import React from 'react'
import {ModalDropdownContent, ModalDropdownContentContainer} from '../../styles'


const PredefinedAssetsChoices = ({handleSelectAssetsChange, showAssetsDropdown}) => {
    return (
        <ModalDropdownContentContainer show={showAssetsDropdown ? 1 : 0}>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsChange('participation')}
            >
                <span>Participation</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsChange('business')}
            >
                <span>Business or business related assets</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsChange('other assets')}
            >
                <span>Other Assets</span>
            </ModalDropdownContent>
        </ModalDropdownContentContainer>
    )
}

export default PredefinedAssetsChoices
