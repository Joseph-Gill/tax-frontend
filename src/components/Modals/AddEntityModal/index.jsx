import React from 'react'
import {useSpring} from 'react-spring'
import EntityLegalSelect from '../../EntityLegalSelect'
import {CountryDropdown} from 'react-country-region-selector'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {BaseInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {EntityParentSelect} from '../../../style/select'
import {ActiveInputLabel} from '../../../style/labels'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer,
    AddEntityLinkModalInternalContainer, AddEntitySaveButton, EntityErrorContainer} from '../styles'


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
            <AddEntityLinkModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowAddEntity(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Enter entity info</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <ActiveInputLabel>Name</ActiveInputLabel>
                    <BaseInput
                        name='name'
                        onChange={(e) => setNewEntityInfo({...newEntityInfo, entityName: e.target.value})}
                        placeholder='Enter name'
                        type='text'
                        value={newEntityInfo.entityName}
                    />
                    <EntityErrorContainer>
                        {error && <ErrorMessage>{error.entityName}</ErrorMessage>}
                    </EntityErrorContainer>
                </div>
                <div>
                    <ActiveInputLabel>Parent</ActiveInputLabel>
                    <EntityParentSelect
                        callingComponent='AddEntityModal'
                        onChange={(e) => setNewEntityInfo({...newEntityInfo, parentName: e.target.value})}
                        value={newEntityInfo.parentName}
                    >
                        {renderParentNameOptions}
                    </EntityParentSelect>
                    <EntityErrorContainer>
                        {error && <ErrorMessage>{error.entityParentName}</ErrorMessage>}
                    </EntityErrorContainer>
                </div>
                <div>
                    <ActiveInputLabel>Location</ActiveInputLabel>
                    <CountryDropdown
                        classes='profileCountryDropdown'
                        onChange={(val) => setCountryName(val)}
                        value={countryName}
                    />
                    <EntityErrorContainer>
                        {error && <ErrorMessage>{error.entityCountryName}</ErrorMessage>}
                    </EntityErrorContainer>
                </div>
                <div>
                    <ActiveInputLabel>Legal Form</ActiveInputLabel>
                    <EntityLegalSelect
                        callingComponent='AddEntityModal'
                        legalForm={legalForm}
                        setLegalForm={setLegalForm}
                    />
                    <EntityErrorContainer>
                        {error && <ErrorMessage>{error.entityLegalForm}</ErrorMessage>}
                    </EntityErrorContainer>
                </div>
                <div>
                    <ActiveInputLabel>Tax Rate (optional)</ActiveInputLabel>
                    <BaseInput
                        name='tax_rate'
                        onChange={(e) => setNewEntityInfo({...newEntityInfo, taxRate: e.target.value})}
                        placeholder='Enter current income tax rate'
                        type='text'
                        value={newEntityInfo.taxRate}
                    />
                    <EntityErrorContainer />
                </div>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelNewEntityLinkHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton onClick={saveNewEntityHandler}>Save</AddEntitySaveButton>
                </AddDeleteModalButtonContainer>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddEntityModal
