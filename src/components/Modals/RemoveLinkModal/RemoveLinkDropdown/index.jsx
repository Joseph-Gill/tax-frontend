import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEditRemoveLinks} from '../../../../helpers'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalButtonTwoLineDisplayContainer, ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const RemoveLinkDropdown = ({clinks, entities, linkToRemove, handleLinkToRemoveChange, setShowLinkRemoveSelect,
                                showLinkRemoveSelect, slinks}) => {

    // eslint-disable-next-line react/no-multi-comp
    const getLinkToRemoveInfo = linkId => {
        const targetLink = clinks.filter(link => link.id === parseInt(linkId)).concat(slinks.filter(link => link.id === parseInt(linkId)))
        return (
            <ModalButtonTwoLineDisplayContainer>
                <span>{`From: ${getEntityInfo(entities, targetLink[0].from, true)}`}</span>
                <span>{`To : ${getEntityInfo(entities, targetLink[0].to, true)}`}</span>
            </ModalButtonTwoLineDisplayContainer>
        )
    }

    return (
        <div>
            <ActiveInputLabel>Link to remove</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowLinkRemoveSelect}
                showDropdownView={showLinkRemoveSelect}
            >
                <ModalDropdownButton
                    onClick={() => setShowLinkRemoveSelect(!showLinkRemoveSelect)}
                >
                    {!linkToRemove ? 'Select a link to remove' : (
                        getLinkToRemoveInfo(linkToRemove)
                    )}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showLinkRemoveSelect ? 1 : 0}>
                    {renderEditRemoveLinks(clinks, slinks, handleLinkToRemoveChange, entities)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
        </div>
    )
}

export default RemoveLinkDropdown
