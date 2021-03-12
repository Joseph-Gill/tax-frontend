import React, {useState, useEffect, useRef} from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import AddParentSelect from './AddParentSelect'
import AddLocationSelect from './AddLocationSelect'
import EntityLegalDropdown from '../../Dropdowns/EntityLegalDropdown'
import {filterEntitiesByTerm, sortEntitiesByName} from '../../../helpers'
import {AddEntityLinkModalInternalContainer} from '../styles'


//Used by StepChart for adding new Entities to a StepChart
const AddEntityModal = ({cancelNewEntityLinkHandler, countryName, entities, error, legalForm, newEntityInfo,
                            saveNewEntityHandler, showAddEntity, setCountryName, setLegalForm, setNewEntityInfo,
                            setShowAddEntity}) => {

    let searchParentTerm = useRef('')
    const [showAddLegalSelect, setShowAddLegalSelect] = useState(false)
    const [showAddParentSelect, setShowAddParentSelect] = useState(false)
    // Used to render the parents to add, array is filtered by the search input
    const [filteredParents, setFilteredParents] = useState([])
    // Used to contain a list of available parents during adding that can be rolled back to when resetting the filter
    const [addParents, setAddParents] = useState([])

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredParents([...result])
        setAddParents([...result])
    }, [entities])

    const handleSelectParentChange = parentId => {
        setNewEntityInfo({...newEntityInfo, parentId})
        setShowAddParentSelect(false)
    }

    // Used by search input inside select parent to add dropdown
    const handleFilterParents = () => {
        const filterResults = filterEntitiesByTerm(addParents, searchParentTerm.current.value)
        setFilteredParents([...sortEntitiesByName(filterResults)])
    }

    //Used by search input reset icon inside of the select parent of entity to add dropdown
    const handleResetFilterParents = () => {
        searchParentTerm.current.value = ''
        setFilteredParents([...sortEntitiesByName(addParents)])
    }
    return (
        <ModalExternalContainer
            setModalView={setShowAddEntity}
            showModalView={showAddEntity}
        >
            <Draggable>
                <AddEntityLinkModalInternalContainer>
                    <ModalClose modalDisplay={setShowAddEntity} />
                    <ModalTitle title='Enter entity info' />
                    <ModalInput
                        changeHandler={(e) => setNewEntityInfo({...newEntityInfo, entityName: e.target.value})}
                        error={error}
                        errorLocation={error.entityName}
                        label='Name'
                        name='name'
                        placeholder='Enter name'
                        type='text'
                        value={newEntityInfo.entityName}
                    />
                    <AddParentSelect
                        addParents={addParents}
                        error={error}
                        filteredParents={filteredParents}
                        handleFilterParents={handleFilterParents}
                        handleResetFilterParents={handleResetFilterParents}
                        handleSelectParentChange={handleSelectParentChange}
                        newEntityInfo={newEntityInfo}
                        searchParentTerm={searchParentTerm}
                        setShowAddParentSelect={setShowAddParentSelect}
                        showAddParentSelect={showAddParentSelect}
                    />
                    <AddLocationSelect
                        changeHandler={(val) => setCountryName(val)}
                        error={error}
                        value={countryName}
                    />
                    <EntityLegalDropdown
                        // Only used to decide if input should be disabled during Edit
                        // disabling this feature on AddModal
                        editEntityInfo={{entitySelected: true}}
                        error={error}
                        legalForm={legalForm}
                        setLegalForm={setLegalForm}
                        setShowEntityLegalSelect={setShowAddLegalSelect}
                        showEntityLegalSelect={showAddLegalSelect}
                    />
                    <ModalInput
                        changeHandler={(e) => setNewEntityInfo({...newEntityInfo, taxRate: e.target.value})}
                        label='Tax Rate (optional)'
                        name='tax_rate'
                        placeholder='Enter current income tax rate'
                        type='text'
                        value={newEntityInfo.taxRate}
                    />
                    <ModalAddButtons
                        cancelHandler={cancelNewEntityLinkHandler}
                        saveHandler={saveNewEntityHandler}
                    />
                </AddEntityLinkModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default AddEntityModal
