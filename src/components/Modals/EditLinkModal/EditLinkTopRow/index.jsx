import React from 'react'
import ModalInput from '../../ModalComponents/ModalInput'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEditRemoveLinks} from '../../../../helpers'
import {EditEntityLinkRowContainer} from '../../styles'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalButtonTwoLineDisplayContainer, ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const EditLinkTopRow = ({clinks, entities, linkToEditChangeHandler, setShowEditLinkSelect, setTargetLink, showEditLinkSelect,
                            slinks, targetLink}) => {

    return (
        <EditEntityLinkRowContainer>
            <div>
                <ActiveInputLabel>Link to edit</ActiveInputLabel>
                <DropdownInternalContainer
                    setDropdownView={setShowEditLinkSelect}
                    showDropdownView={showEditLinkSelect}
                >
                    <ModalDropdownButton
                        onClick={() => setShowEditLinkSelect(!showEditLinkSelect)}
                    >
                        {!targetLink.linkSelected ? 'Select a link to edit' : (
                            <ModalButtonTwoLineDisplayContainer>
                                <span>{`From: ${getEntityInfo(entities, targetLink.from, true)}`}</span>
                                <span>{`To : ${getEntityInfo(entities, targetLink.to, true)}`}</span>
                            </ModalButtonTwoLineDisplayContainer>
                        )}
                    </ModalDropdownButton>
                    <ModalDropdownContentContainer show={showEditLinkSelect ? 1 : 0}>
                        {renderEditRemoveLinks(clinks, slinks, linkToEditChangeHandler, entities)}
                    </ModalDropdownContentContainer>
                </DropdownInternalContainer>
            </div>
            <ModalInput
                changeHandler={(e) => setTargetLink({...targetLink, label: e.target.value})}
                disabled={!targetLink.linkSelected}
                label='Label'
                name='label'
                placeholder='Enter your label'
                type='text'
                value={targetLink.label}
            />
        </EditEntityLinkRowContainer>
    )
}

export default EditLinkTopRow
