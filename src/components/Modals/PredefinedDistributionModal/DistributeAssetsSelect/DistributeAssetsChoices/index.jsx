import React from 'react'
import {ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const DistributeAssetsChoices = ({handleSelectAssetsDistributedChange, showAssetsDropdown}) => {
    return (
        <ModalDropdownContentContainer show={showAssetsDropdown ? 1 : 0}>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsDistributedChange('participation')}
            >
                <span>Participation</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsDistributedChange('business')}
            >
                <span>Business or business related assets</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsDistributedChange('other assets')}
            >
                <span>Other Assets</span>
            </ModalDropdownContent>
        </ModalDropdownContentContainer>
    )
}

export default DistributeAssetsChoices
