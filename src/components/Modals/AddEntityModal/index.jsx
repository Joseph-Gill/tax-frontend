import React from 'react'
import {useSpring} from 'react-spring'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import AddParentSelect from './AddParentSelect'
import AddLocationSelect from './AddLocationSelect'
import AddLegalSelect from './AddLegalSelect'
import Draggable from 'react-draggable'
import {AddDeleteModalExternalContainer, AddEntityLinkModalInternalContainer} from '../styles'


//Used by StepChart for adding new Entities to a StepChart
const AddEntityModal = ({cancelNewEntityLinkHandler, countryName, error, legalForm, newEntityInfo, renderParentNameOptions,
                            saveNewEntityHandler, setCountryName, setLegalForm, setNewEntityInfo, setShowAddEntity}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
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
        </AddDeleteModalExternalContainer>
    )
}

export default AddEntityModal
