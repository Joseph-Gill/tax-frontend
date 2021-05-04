import React, {useState, useEffect, useRef} from 'react'
import Draggable from 'react-draggable'
import AddParentSelect from './AddParentSelect'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import EntityLocationDropdown from '../../Dropdowns/EntityLocationDropdown'
import EntityLegalDropdown from '../../Dropdowns/EntityLegalDropdown'
import {sortEntitiesByName} from '../../../helpers'
import {AddEntityLinkModalInternalContainer} from '../styles'


//Used by StepChart for adding new Entities to a StepChart, GroupAdd to add Entities
//and by PredefinedIncorporate automated step
const AddEntityModal = ({cancelNewEntityLinkHandler, countryName, disabled, entities, error, legalForm, newEntityInfo,
                            saveNewEntityHandler, setCountryName, setLegalForm, setModalView, setNewEntityInfo,
                            showModalView, title}) => {

    let searchParentTerm = useRef('')
    const [showAddLegalSelect, setShowAddLegalSelect] = useState(false)
    const [showAddParentSelect, setShowAddParentSelect] = useState(false)
    // Used to render the parents to add, array is filtered by the search input
    const [filteredParents, setFilteredParents] = useState([])
    // Used to contain a list of available parents during adding that can be rolled back to when resetting the filter
    const [addParents, setAddParents] = useState([])

    useEffect(() => {
        const result = sortEntitiesByName(entities).filter(entity => !entity.remove)
        setFilteredParents([...result])
        setAddParents([...result])
    }, [entities])

    const handleSelectParentChange = parentId => {
        setNewEntityInfo({...newEntityInfo, parentId})
        setShowAddParentSelect(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setModalView}
            showModalView={showModalView}
        >
            <Draggable>
                <AddEntityLinkModalInternalContainer>
                    <ModalClose modalDisplay={setModalView} />
                    <ModalTitle title={title} />
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
                        disabled={disabled}
                        error={error}
                        filteredParents={filteredParents}
                        handleSelectParentChange={handleSelectParentChange}
                        newEntityInfo={newEntityInfo}
                        searchParentTerm={searchParentTerm}
                        setFilteredParents={setFilteredParents}
                        setShowAddParentSelect={setShowAddParentSelect}
                        showAddParentSelect={showAddParentSelect}
                    />
                    <EntityLocationDropdown
                        changeHandler={(val) => setCountryName(val)}
                        error={error}
                        errorLocation={error.entityCountryName}
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
