import React, {useState} from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalRemoveButtons from '../ModalComponents/ModalRemoveButtons'
import RemoveLinkDropdown from './RemoveLinkDropdown'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {RemoveLinkEntityInternalContainer} from '../styles'


//Used by StepChart for deleting Links of a StepChart
const RemoveLinkModal = ({clinks, entities, linkToRemove, removeLinkHandler, setLinkToRemove,
                             setShowRemoveLink, showRemoveLink, slinks}) => {
    const [showLinkRemoveSelect, setShowLinkRemoveSelect] = useState(false)

    const handleLinkToRemoveChange = linkId => {
        setLinkToRemove(linkId)
        setShowLinkRemoveSelect(false)
    }

    const cancelButtonHandler = () => {
        setShowRemoveLink(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowRemoveLink}
            showModalView={showRemoveLink}
        >
            <Draggable>
                <RemoveLinkEntityInternalContainer>
                    <ModalClose modalDisplay={setShowRemoveLink} />
                    <ModalTitle title='Select link to remove' />
                    <RemoveLinkDropdown
                        clinks={clinks}
                        entities={entities}
                        handleLinkToRemoveChange={handleLinkToRemoveChange}
                        linkToRemove={linkToRemove}
                        setShowLinkRemoveSelect={setShowLinkRemoveSelect}
                        showLinkRemoveSelect={showLinkRemoveSelect}
                        slinks={slinks}
                    />
                    <ModalRemoveButtons
                        cancelButtonHandler={cancelButtonHandler}
                        removeButtonHandler={removeLinkHandler}
                    />
                </RemoveLinkEntityInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default RemoveLinkModal
