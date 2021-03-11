import React from 'react'
import {ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const EditLinkColorChoices = ({handleColorSelectChange, showEditColorSelect}) => {
    return (
        <ModalDropdownContentContainer show={showEditColorSelect ? 1 : 0}>
            <ModalDropdownContent
                onClick={() => handleColorSelectChange('blue')}
            >
                <span>Blue</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleColorSelectChange('yellow')}
            >
                <span>Yellow</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleColorSelectChange('orange')}
            >
                <span>Orange</span>
            </ModalDropdownContent>
        </ModalDropdownContentContainer>
    )
}

export default EditLinkColorChoices
