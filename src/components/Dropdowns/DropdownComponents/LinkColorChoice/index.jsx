import {ModalDropdownContent} from '../../styles'
import React from 'react'
import {EditLinkModalDropdownContentContainer} from '../../../Modals/EditLinkModal/styles'


const LinkColorChoices = ({handleColorSelectChange, showColorSelect}) => {
    return (
        <EditLinkModalDropdownContentContainer show={showColorSelect ? 1 : 0}>
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
        </EditLinkModalDropdownContentContainer>
    )
}

export default LinkColorChoices
