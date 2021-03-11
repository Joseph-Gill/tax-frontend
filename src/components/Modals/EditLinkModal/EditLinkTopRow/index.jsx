import React from 'react'
import ModalInput from '../../ModalComponents/ModalInput'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo} from '../../../../helpers'
import {EditEntityLinkRowContainer} from '../../styles'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const EditLinkTopRow = ({clinks, entities, linkToEditChangeHandler, setShowEditLinkSelect, setTargetLink, showEditLinkSelect,
                            slinks, targetLink}) => {

    const renderLinksToSelect = () => {
        if (!clinks.length && !slinks.length) {
            return (
                <ModalDropdownContent>
                    <span>No Links to edit</span>
                </ModalDropdownContent>
            )
        } else {
            return (
                clinks.map(link => (
                    <ModalDropdownContent
                        key={link.id}
                        onClick={() => linkToEditChangeHandler(link.id)}
                    >
                        <span>{`From: ${getEntityInfo(entities, link.from, true)}`}</span>
                        <span>{`To : ${getEntityInfo(entities, link.to, true)}`}</span>
                    </ModalDropdownContent>
                )).concat(slinks.map(link => (
                    <ModalDropdownContent
                        key={link.id}
                        onClick={() => linkToEditChangeHandler(link.id)}
                    >
                        <span>{`From: ${getEntityInfo(entities, link.from, true)}`}</span>
                        <span>{`To : ${getEntityInfo(entities, link.to, true)}`}</span>
                    </ModalDropdownContent>
                )))
            )
        }
    }

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
                        {!targetLink.linkSelected ? 'Select a link to edit' : 'Placeholder'}
                    </ModalDropdownButton>
                    <ModalDropdownContentContainer show={showEditLinkSelect ? 1 : 0}>
                        {renderLinksToSelect()}
                    </ModalDropdownContentContainer>
                </DropdownInternalContainer>
            </div>
            <ModalInput
                changeHandler={(e) => setTargetLink({...targetLink, label: e.target.value})}
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
