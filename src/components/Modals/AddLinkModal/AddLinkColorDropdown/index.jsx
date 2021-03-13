import React from 'react'
import LinkColorChoices from '../../../Dropdowns/DropdownComponents/LinkColorChoice'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton} from '../../../Dropdowns/styles'


const AddLinkColorDropdown = ({addLinkInfo, error, setAddLinkInfo, setShowAddColorSelect, showAddColorSelect}) => {

    const handleColorSelectChange = color => {
        setAddLinkInfo({...addLinkInfo, color})
        setShowAddColorSelect(false)
    }

    return (
        <div>
            <ActiveInputLabel>Color</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowAddColorSelect}
                showDropdownView={showAddColorSelect}
            >
                <ModalDropdownButton
                    onClick={() => setShowAddColorSelect(!showAddColorSelect)}
                >
                    {!addLinkInfo.color ? 'Select a color' : addLinkInfo.color === 'blue' ? 'Blue'
                            : addLinkInfo.color === 'yellow' ? 'Yellow' : 'Orange' }
                </ModalDropdownButton>
                <LinkColorChoices
                    handleColorSelectChange={handleColorSelectChange}
                    showColorSelect={showAddColorSelect}
                />
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.color}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLinkColorDropdown
