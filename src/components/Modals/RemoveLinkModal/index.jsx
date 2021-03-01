import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalRemoveButtons from '../ModalComponents/ModalRemoveButtons'
import RemoveLinkDropdown from './RemoveLinkDropdown'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {RemoveLinkEntityInternalContainer} from '../styles'


//Used by StepChart for deleting Links of a StepChart
const RemoveLinkModal = ({linkOptions, linkToRemove, removeLinkHandler, setLinkToRemove, setShowRemoveLink,
                             showRemoveLink}) => {

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
                    <ModalTitle title='Select the link to remove' />
                    <RemoveLinkDropdown
                        linkOptions={linkOptions}
                        linkToRemove={linkToRemove}
                        setLinkToRemove={setLinkToRemove}
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
