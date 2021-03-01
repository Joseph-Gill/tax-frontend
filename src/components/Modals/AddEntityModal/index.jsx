import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import AddParentSelect from './AddParentSelect'
import AddLocationSelect from './AddLocationSelect'
import AddLegalSelect from './AddLegalSelect'
import {AddEntityLinkModalInternalContainer} from '../styles'


//Used by StepChart for adding new Entities to a StepChart
const AddEntityModal = ({cancelNewEntityLinkHandler, countryName, error, legalForm, newEntityInfo, renderParentNameOptions,
                            saveNewEntityHandler, showAddEntity, setCountryName, setLegalForm, setNewEntityInfo,
                            setShowAddEntity}) => {

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
                        changeHandler={(e) => setNewEntityInfo({...newEntityInfo, parentId: parseInt(e.target.value)})}
                        error={error}
                        renderParentNameOptions={renderParentNameOptions}
                        value={newEntityInfo.parentId}
                    />
                    <AddLocationSelect
                        changeHandler={(val) => setCountryName(val)}
                        error={error}
                        value={countryName}
                    />
                    <AddLegalSelect
                        error={error}
                        legalForm={legalForm}
                        setLegalForm={setLegalForm}
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
