import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalRemoveButtons from '../ModalComponents/ModalRemoveButtons'
import RemoveLinkDropdown from './RemoveLinkDropdown'
import {AddDeleteModalExternalContainer, RemoveLinkEntityInternalContainer} from '../styles'


//Used by StepChart for deleting Links of a StepChart
const RemoveLinkModal = ({linkOptions, linkToRemove, removeLinkHandler, setLinkToRemove, setShowRemoveLink}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        setShowRemoveLink(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
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
        </AddDeleteModalExternalContainer>
    )
}

export default RemoveLinkModal
