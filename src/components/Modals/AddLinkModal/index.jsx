import React, {useState, useEffect, useRef} from 'react'
import Draggable from 'react-draggable'
import ModalInput from '../ModalComponents/ModalInput'
import AddLinkTypeDropdown from './AddLinkTypeDropdown'
import AddLinkColorDropdown from './AddLinkColorDropdown'
import AddLinkFromToDropdown from './AddLinkFromToDropdown'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {sortEntitiesByName} from '../../../helpers'
import {AddEntityLinkModalInternalContainer} from '../styles'


//Used by StepChart for adding new Links to a StepChart
const AddLinkModal = ({addLinkInfo, cancelNewEntityLinkHandler, entities, error, saveNewLinkHandler,
                          setAddLinkInfo, setShowAddLink, showAddLink}) => {

    let searchFromTerm = useRef('')
    let searchToTerm = useRef('')
    const [showAddFromSelect, setShowAddFromSelect] = useState(false)
    const [showAddToSelect, setShowAddToSelect] = useState(false)
    const [showAddTypeSelect, setShowAddTypeSelect] = useState(false)
    const [showAddColorSelect, setShowAddColorSelect] = useState(false)
    const [filteredFromEntities, setFilteredFromEntities] = useState([])
    const [filteredToEntities, setFilteredToEntities] = useState([])

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredFromEntities([...result])
        setFilteredToEntities([...result])
    }, [entities])

    const handleAddLinkFromChange = from => {
        setAddLinkInfo({...addLinkInfo, from})
        setShowAddFromSelect(false)
    }

    const handleAddLinkToChange = to => {
        setAddLinkInfo({...addLinkInfo, to})
        setShowAddToSelect(false)
    }

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
                        entities={entities}
                        error={error}
                        filteredEntities={filteredFromEntities}
                        handleSelectChange={handleAddLinkFromChange}
                        inputName='link_from_search'
                        inputPlaceholder='Search for entity name'
                        inputRef={searchFromTerm}
                        label='From'
                        setDropdownView={setShowAddFromSelect}
                        setFilteredEntities={setFilteredFromEntities}
                        setKey='from'
                        showDropdownView={showAddFromSelect}
                    />
                    <AddLinkFromToDropdown
                        addLinkInfo={addLinkInfo}
                        entities={entities}
                        error={error}
                        filteredEntities={filteredToEntities}
                        handleSelectChange={handleAddLinkToChange}
                        inputName='link_to_search'
                        inputPlaceholder='Search for entity name'
                        inputRef={searchToTerm}
                        label='To'
                        setDropdownView={setShowAddToSelect}
                        setFilteredEntities={setFilteredToEntities}
                        setKey='to'
                        showDropdownView={showAddToSelect}
                    />
                    <ModalInput
                        changeHandler={(e) => setAddLinkInfo({...addLinkInfo, label: e.target.value})}
                        label='Label'
                        name='label'
                        placeholder='Enter your label'
                        type='text'
                        value={addLinkInfo.label}
                    />
                    <AddLinkTypeDropdown
                        addLinkInfo={addLinkInfo}
                        error={error}
                        setAddLinkInfo={setAddLinkInfo}
                        setShowAddTypeSelect={setShowAddTypeSelect}
                        showAddTypeSelect={showAddTypeSelect}
                    />
                    <AddLinkColorDropdown
                        addLinkInfo={addLinkInfo}
                        error={error}
                        setAddLinkInfo={setAddLinkInfo}
                        setShowAddColorSelect={setShowAddColorSelect}
                        showAddColorSelect={showAddColorSelect}
                    />
                    <ModalAddButtons
                        cancelHandler={cancelNewEntityLinkHandler}
                        saveHandler={() => saveNewLinkHandler(addLinkInfo)}
                    />
                </AddEntityLinkModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default AddLinkModal
