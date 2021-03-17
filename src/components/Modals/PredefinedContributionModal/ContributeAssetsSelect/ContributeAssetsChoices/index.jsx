import React from 'react'
import {ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const ContributeAssetsChoices = ({handleSelectAssetsContributedChange, showAssetsDropdown}) => {
    return (
        <ModalDropdownContentContainer show={showAssetsDropdown ? 1 : 0}>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsContributedChange('participation')}
            >
                <span>Participation</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleSelectAssetsContributedChange('other assets')}
            >
                <span>Other Assets</span>
            </ModalDropdownContent>
        </ModalDropdownContentContainer>
    )
}

export default ContributeAssetsChoices
