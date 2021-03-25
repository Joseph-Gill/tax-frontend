import React from 'react'
import MergerIntoChoices from './MergerIntoChoices'
import ModalClose from '../../ModalComponents/ModalClose'
import ModalTitle from '../../ModalComponents/ModalTitle'
import ModalAddButtons from '../../ModalComponents/ModalAddButtons'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo} from '../../../../helpers'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton} from '../../../Dropdowns/styles'
import {PredefinedMergerInternalContainer} from './styles'
import {EntityErrorContainer} from '../../styles'
import MergerToChoices from './MergerToChoices'
import MergerOfChoices from './MergerOfChoices'


const PredefinedMergerLeft = ({availableMergerToEntities, entities, error, filteredMergerOfEntities, filteredMergerToEntities, handleCancelButton,
                                  handleSaveButton, handleSelectMergerIntoChange, handleSelectMergerOfChange, handleSelectMergerToChange, mergerInto,
                                  searchMergerOfEntityTerm, searchMergerToEntityTerm, setFilteredMergerOfEntities, setFilteredMergerToEntities,
                                  setShowPredefinedMerger, setShowMergerIntoDropdown, setShowMergerOfDropdown, setShowMergerToDropdown,
                                  showMergerIntoDropdown, showMergerOfDropdown, showMergerToDropdown, targetMergerOfEntity,
                                  targetMergerToEntity}) => {
    return (
        <PredefinedMergerInternalContainer>
            <ModalClose modalDisplay={setShowPredefinedMerger} />
            <ModalTitle title='Merger' />
            <div>
                <ActiveInputLabel>Merger of</ActiveInputLabel>
                <DropdownInternalContainer
                    setDropdownView={setShowMergerOfDropdown}
                    showDropdownView={showMergerOfDropdown}
                >
                    <ModalDropdownButton
                        onClick={() => setShowMergerOfDropdown(!showMergerOfDropdown)}
                    >
                        {!targetMergerOfEntity ? 'Select merger of entity' : getEntityInfo(entities, targetMergerOfEntity)}
                    </ModalDropdownButton>
                    <MergerOfChoices
                        entities={entities}
                        filteredMergerOfEntities={filteredMergerOfEntities}
                        handleSelectMergerOfChange={handleSelectMergerOfChange}
                        searchMergerOfEntityTerm={searchMergerOfEntityTerm}
                        setFilteredMergerOfEntities={setFilteredMergerOfEntities}
                        showMergerOfDropdown={showMergerOfDropdown}
                    />
                </DropdownInternalContainer>
                <EntityErrorContainer>
                    {error && <ErrorMessage>{error.mergerFromEntity}</ErrorMessage>}
                </EntityErrorContainer>
            </div>
            <div>
                <ActiveInputLabel
                    disabled={!targetMergerOfEntity}
                >
                    And
                </ActiveInputLabel>
                <DropdownInternalContainer
                    setDropdownView={setShowMergerToDropdown}
                    showDropdownView={showMergerToDropdown}
                >
                    <ModalDropdownButton
                        disabled={!targetMergerOfEntity}
                        onClick={() => setShowMergerToDropdown(!showMergerToDropdown)}
                    >
                        {!targetMergerToEntity ? 'Select merger to entity' : getEntityInfo(entities, targetMergerToEntity)}
                    </ModalDropdownButton>
                    <MergerToChoices
                        availableMergerToEntities={availableMergerToEntities}
                        filteredMergerToEntities={filteredMergerToEntities}
                        handleSelectMergerToChange={handleSelectMergerToChange}
                        searchMergerToEntityTerm={searchMergerToEntityTerm}
                        setFilteredMergerToEntities={setFilteredMergerToEntities}
                        showMergerToDropdown={showMergerToDropdown}
                    />
                </DropdownInternalContainer>
                <EntityErrorContainer>
                    {error && <ErrorMessage>{error.mergerToEntity}</ErrorMessage>}
                </EntityErrorContainer>
            </div>
            <div>
                <ActiveInputLabel
                    disabled={!targetMergerToEntity}
                >
                    Into
                </ActiveInputLabel>
                <DropdownInternalContainer
                    setDropdownView={setShowMergerIntoDropdown}
                    showDropdownView={showMergerIntoDropdown}
                >
                    <ModalDropdownButton
                        disabled={!targetMergerToEntity}
                        onClick={() => setShowMergerIntoDropdown(!showMergerIntoDropdown)}
                    >
                        {!mergerInto.selection ? 'Select merger format' : mergerInto.selection === 'new_company' ? 'New Company' : getEntityInfo(entities, mergerInto.selection)}
                    </ModalDropdownButton>
                    <MergerIntoChoices
                        entities={entities}
                        handleSelectMergerIntoChange={handleSelectMergerIntoChange}
                        mergerInto={mergerInto}
                        showMergerIntoDropdown={showMergerIntoDropdown}
                        targetMergerOfEntity={targetMergerOfEntity}
                        targetMergerToEntity={targetMergerToEntity}
                    />
                </DropdownInternalContainer>
            </div>
            <ModalAddButtons
                cancelHandler={handleCancelButton}
                saveHandler={handleSaveButton}
            />
        </PredefinedMergerInternalContainer>
    )
}

export default PredefinedMergerLeft
