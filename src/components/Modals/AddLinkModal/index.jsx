import React from 'react'
import Draggable from 'react-draggable'
import AddLinkLabel from './AddLinkLabel'
import AddLinkTypeDropdown from './AddLinkTypeDropdown'
import AddLinkColorDropdown from './AddLinkColorDropdown'
import AddLinkFromToDropdown from './AddLinkFromToDropdown'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {AddEntityLinkModalInternalContainer} from '../styles'


//Used by StepChart for adding new Links to a StepChart
const AddLinkModal = ({addLinkInfo, cancelNewEntityLinkHandler, error, fromToOptions, saveNewLinkHandler,
                          setAddLinkInfo, setShowAddLink, showAddLink}) => {

    return (
        <ModalExternalContainer
            setModalView={setShowAddLink}
            showModalView={showAddLink}
        >
            <Draggable>
                <AddEntityLinkModalInternalContainer>
                    <ModalClose modalDisplay={setShowAddLink} />
                    <ModalTitle title='Select link options' />
                    <AddLinkFromToDropdown
                        addLinkInfo={addLinkInfo}
                        error={error}
                        fromToOptions={fromToOptions}
                        name='from'
                        setAddLinkInfo={setAddLinkInfo}
                        title='From'
                    />
                    <AddLinkFromToDropdown
                        addLinkInfo={addLinkInfo}
                        fromToOptions={fromToOptions}
                        name='to'
                        setAddLinkInfo={setAddLinkInfo}
                        title='To'
                    />
                    <AddLinkLabel
                        addLinkInfo={addLinkInfo}
                        setAddLinkInfo={setAddLinkInfo}
                    />
                    <AddLinkTypeDropdown
                        addLinkInfo={addLinkInfo}
                        error={error}
                        setAddLinkInfo={setAddLinkInfo}
                    />
                    <AddLinkColorDropdown
                        addLinkInfo={addLinkInfo}
                        error={error}
                        setAddLinkInfo={setAddLinkInfo}
                    />
                    <ModalAddButtons
                        cancelHandler={cancelNewEntityLinkHandler}
                        saveHandler={saveNewLinkHandler}
                    />
                </AddEntityLinkModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default AddLinkModal
