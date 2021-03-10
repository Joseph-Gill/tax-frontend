import React from 'react'
import {v4 as uuidv4} from 'uuid'
import DropdownInternalContainer from '../../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ActiveInputLabel} from '../../../../../style/labels'
import {EntityErrorContainer} from '../../../styles'
import {ErrorMessage} from '../../../../../style/messages'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const EditEntitySelect = ({editEntityChangeHandler, editEntityInfo, entities, error, setShowEditEntitySelect,
                              showEditEntitySelect}) => {
    return (
        <div>
            <ActiveInputLabel>Entity to edit</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowEditEntitySelect}
                showDropdownView={showEditEntitySelect}
            >
                <ModalDropdownButton
                    onClick={() => setShowEditEntitySelect(!showEditEntitySelect)}
                >
                    {!entities.length ? 'No entities to edit' : editEntityInfo.entityName ? editEntityInfo.entityName : 'Select entity to edit'}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showEditEntitySelect ? 1 : 0}>
                    {entities.map(entity => (
                        <ModalDropdownContent
                            key={uuidv4()}
                            onClick={() => editEntityChangeHandler(entity.id)}
                        >
                            <span>{entity.name}</span>
                            <span>{`(${entity.location})`}</span>
                        </ModalDropdownContent>
                    ))}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entitySelect}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EditEntitySelect
