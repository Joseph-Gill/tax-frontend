import React from 'react'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {ErrorMessage} from '../../../../style/messages'
import {EntityErrorContainer} from '../../styles'


const ChangeEntitySelect = ({entities, error, filteredEntitiesToChange, handleSelectEntityToChange, searchEntityToChangeTerm,
                                setFilteredEntitiesToChange, setShowEntityToChange, showEntityToChange,
                                targetEntityToChange}) => {
    return (
        <div>
            <ActiveInputLabel>Entity to change</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowEntityToChange}
                showDropdownView={showEntityToChange}
            >
                <ModalDropdownButton
                    onClick={() => setShowEntityToChange(!showEntityToChange)}
                >
                    {!targetEntityToChange ? 'Select entity to change' : getEntityInfo(entities, targetEntityToChange)}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showEntityToChange ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredEntitiesToChange}
                        inputName='entity_to_change'
                        inputPlaceholder='Search for entity to change'
                        inputRef={searchEntityToChangeTerm}
                        originalArray={entities}
                        term={searchEntityToChangeTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredEntitiesToChange, handleSelectEntityToChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.changeEntity}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default ChangeEntitySelect
