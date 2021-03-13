import {ModalDropdownContent, ModalDropdownContentContainer} from '../../styles'
import React from 'react'


const LinkColorChoices = ({handleColorSelectChange, showColorSelect}) => {
    return (
        <ModalDropdownContentContainer show={showColorSelect ? 1 : 0}>
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

export default LinkColorChoices
