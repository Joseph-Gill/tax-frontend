import React from 'react'
import EditLinkTypeChoices from './EditLinkTypeChoices'
import EditLinkColorChoices from './EditLinkColorChoices'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton} from '../../../Dropdowns/styles'
import {EditEntityLinkRowContainer, EntityErrorContainer} from '../../styles'


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
                    <EditLinkTypeChoices
                        handleTypeSelectChange={handleTypeSelectChange}
                        showEditTypeSelect={showEditTypeSelect}
                    />
                </DropdownInternalContainer>
            </div>
            <div>
                <ActiveInputLabel
                    disabled={!targetLink.linkSelected}
                >
                    Color
                </ActiveInputLabel>
                <DropdownInternalContainer
                    setDropdownView={setShowEditColorSelect}
                    showDropdownView={showEditColorSelect}
                >
                    <ModalDropdownButton
                        disabled={!targetLink.linkSelected}
                        onClick={() => setShowEditColorSelect(!showEditColorSelect)}
                    >
                        {!targetLink.linkSelected ? 'Select a color' : targetLink.template === 'blue' ? 'Blue'
                            : targetLink.template === 'yellow' ? 'Yellow' : 'Orange' }
                    </ModalDropdownButton>
                    <EditLinkColorChoices
                        handleColorSelectChange={handleColorSelectChange}
                        showEditColorSelect={showEditColorSelect}
                    />
                </DropdownInternalContainer>
                <EntityErrorContainer />
            </div>
        </EditEntityLinkRowContainer>
    )
}

export default EditLinkBottomRow
