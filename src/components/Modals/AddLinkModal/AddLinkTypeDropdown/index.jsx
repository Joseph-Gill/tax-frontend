import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import LinkTypeChoices from '../../../Dropdowns/DropdownComponents/LinkTypeChoices'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton} from '../../../Dropdowns/styles'


const AddLinkTypeDropdown = ({addLinkInfo, error, setAddLinkInfo, setShowAddTypeSelect, showAddTypeSelect}) => {

    const handleTypeSelectChange = type => {
        setAddLinkInfo({...addLinkInfo, type})
        setShowAddTypeSelect(false)
    }

    return (
        <div>
            <ActiveInputLabel>Type</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowAddTypeSelect}
                showDropdownView={showAddTypeSelect}
            >
                <ModalDropdownButton
                    onClick={() => setShowAddTypeSelect(!showAddTypeSelect)}
                >
                    {!addLinkInfo.type ? 'Select a link type' : addLinkInfo.type === 'clink' ? 'C Link' : 'S Link'}
                </ModalDropdownButton>
                <LinkTypeChoices
                    handleTypeSelectChange={handleTypeSelectChange}
                    showTypeSelect={showAddTypeSelect}
                />
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.linkType}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLinkTypeDropdown
