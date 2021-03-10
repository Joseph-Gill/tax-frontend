import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import EntityLegalDropdownChoices from './EntityLegalDropdownChoices'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {EntityErrorContainer} from '../../Modals/styles'
import {ModalDropdownButton} from '../styles'


const EntityLegalDropdown = ({editEntityInfo, error, legalForm, setShowEntityLegalSelect, setLegalForm,
                                 showEntityLegalSelect}) => {

    const handleLegalFormChange = legalForm => {
        setLegalForm(legalForm)
        setShowEntityLegalSelect(false)
    }


    return (
        <div>
            <ActiveInputLabel
                disabled={!editEntityInfo.entitySelected}
            >
                Legal Form
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowEntityLegalSelect}
                showDropdownView={showEntityLegalSelect}
            >
                <ModalDropdownButton
                    disabled={!editEntityInfo.entitySelected}
                    onClick={() => setShowEntityLegalSelect(!showEntityLegalSelect)}
                >
                    {!legalForm ? 'Select a legal form' : legalForm}
                </ModalDropdownButton>
                <EntityLegalDropdownChoices
                    handleLegalFormChange={handleLegalFormChange}
                    showEntityLegalSelect={showEntityLegalSelect}
                />
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityLegalForm}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EntityLegalDropdown
