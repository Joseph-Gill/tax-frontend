import React from 'react'
import {getEntityInfo} from '../../../../../helpers'
import {ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const MergerIntoChoices = ({entities, handleSelectMergerIntoChange, mergerInto, showMergerIntoDropdown,
                               targetMergerOfEntity, targetMergerToEntity}) => {
    return (
        <ModalDropdownContentContainer show={showMergerIntoDropdown ? 1 : 0}>
            <ModalDropdownContent
                onClick={() => handleSelectMergerIntoChange(targetMergerOfEntity)}
            >
                <span>{getEntityInfo(entities, targetMergerOfEntity, true)}</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleSelectMergerIntoChange(targetMergerToEntity)}
            >
                <span>{getEntityInfo(entities, targetMergerToEntity, true)}</span>
            </ModalDropdownContent>
            {mergerInto.newCompanyAvailable &&
                <ModalDropdownContent
                    onClick={() => handleSelectMergerIntoChange('new_company')}
                >
                    <span>New Company</span>
                </ModalDropdownContent>}
        </ModalDropdownContentContainer>
    )
}

export default MergerIntoChoices
