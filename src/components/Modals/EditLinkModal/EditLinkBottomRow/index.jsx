import React from 'react'
import LinkTypeChoices from '../../../Dropdowns/DropdownComponents/LinkTypeChoices'
import LinkColorChoices from '../../../Dropdowns/DropdownComponents/LinkColorChoice'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ActiveInputLabel, TextActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton} from '../../../Dropdowns/styles'
import {EditEntityLinkRowContainer, EntityErrorContainer} from '../../styles'
import {EditLinkModalDropdownButton} from '../styles'


const EditLinkBottomRow = ({setShowEditColorSelect, setShowEditTypeSelect, setTargetLink, showEditColorSelect,
                               showEditTypeSelect, targetLink}) => {

    const handleTypeSelectChange = type => {
        setTargetLink({...targetLink, type})
        setShowEditTypeSelect(false)
    }

    const handleColorSelectChange = color => {
        setTargetLink({...targetLink, template: color})
        setShowEditColorSelect(false)
    }

    return (
        <EditEntityLinkRowContainer>
            <div>
                <ActiveInputLabel
                    disabled={!targetLink.linkSelected}
                >
                    Type
                </ActiveInputLabel>
                <DropdownInternalContainer
                    setDropdownView={setShowEditTypeSelect}
                    showDropdownView={showEditTypeSelect}
                >
                    <ModalDropdownButton
                        disabled={!targetLink.linkSelected}
                        onClick={() => setShowEditTypeSelect(!showEditTypeSelect)}
                    >
                        {!targetLink.linkSelected ? 'Select a link type' : targetLink.type === 'clink' ? 'C Link' : 'S Link'}
                    </ModalDropdownButton>
                    <LinkTypeChoices
                        handleTypeSelectChange={handleTypeSelectChange}
                        showTypeSelect={showEditTypeSelect}
                    />
                </DropdownInternalContainer>
            </div>
            <div>
                <TextActiveInputLabel
                    disabled={!targetLink.linkSelected}
                >
                    Color
                </TextActiveInputLabel>
                <DropdownInternalContainer
                    setDropdownView={setShowEditColorSelect}
                    showDropdownView={showEditColorSelect}
                >
                    <EditLinkModalDropdownButton
                        disabled={!targetLink.linkSelected}
                        onClick={() => setShowEditColorSelect(!showEditColorSelect)}
                    >
                        {!targetLink.linkSelected ? 'Select a color' : targetLink.template === 'blue' ? 'Blue'
                            : targetLink.template === 'yellow' ? 'Yellow' : 'Orange' }
                    </EditLinkModalDropdownButton>
                    <LinkColorChoices
                        handleColorSelectChange={handleColorSelectChange}
                        showColorSelect={showEditColorSelect}
                    />
                </DropdownInternalContainer>
                <EntityErrorContainer />
            </div>
        </EditEntityLinkRowContainer>
    )
}

export default EditLinkBottomRow
