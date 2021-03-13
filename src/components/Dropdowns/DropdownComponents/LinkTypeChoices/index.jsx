import {ModalDropdownContent, ModalDropdownContentContainer} from '../../styles'
import React from 'react'


const LinkTypeChoices = ({handleTypeSelectChange, showTypeSelect}) => {
    return (
        <ModalDropdownContentContainer show={showTypeSelect ? 1 : 0}>
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

export default LinkTypeChoices
