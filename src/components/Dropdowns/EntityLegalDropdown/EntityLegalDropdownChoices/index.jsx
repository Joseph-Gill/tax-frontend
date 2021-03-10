import React from 'react'
import {ModalDropdownContent} from '../../styles'
import {LegalDropdownContentContainer} from './styles'


const EntityLegalDropdownChoices = ({handleLegalFormChange, showEntityLegalSelect}) => {
    return (
        <LegalDropdownContentContainer show={showEntityLegalSelect ? 1 : 0}>
            <ModalDropdownContent
                onClick={() => handleLegalFormChange('Corporation')}
            >
                <span>Corporation</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleLegalFormChange('Partnership')}
            >
                <span>Partnership</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleLegalFormChange('Branch')}
            >
                <span>Branch</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleLegalFormChange('Disregarded Entity')}
            >
                <span>Disregarded Entity</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleLegalFormChange('Representative Office')}
            >
                <span>Representative Office</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleLegalFormChange('Hybrid Entity')}
            >
                <span>Hybrid Entity</span>
            </ModalDropdownContent>
            <ModalDropdownContent
                onClick={() => handleLegalFormChange('Reverse Entity')}
            >
                <span>Reverse Entity</span>
            </ModalDropdownContent>
        </LegalDropdownContentContainer>
    )
}

export default EntityLegalDropdownChoices
