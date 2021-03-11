import React from 'react'
import {ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const EditLinkTypeChoices = ({handleTypeSelectChange, showEditTypeSelect}) => {
    return (
        <ModalDropdownContentContainer show={showEditTypeSelect ? 1 : 0}>
            <ModalDropdownContent
                onClick={() => handleTypeSelectChange('clink')}
            >
                <span>C Link</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleTypeSelectChange('slink')}
            >
                <span>S Link</span>
            </ModalDropdownContent>
        </ModalDropdownContentContainer>
    )
}

export default EditLinkTypeChoices
