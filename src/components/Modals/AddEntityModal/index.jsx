import React from 'react'
import {useSpring} from 'react-spring'
import EntityLegalSelect from '../../EntityLegalSelect'
import {CountryDropdown} from 'react-country-region-selector'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {BaseInput} from '../../../style/inputs'
import {EntityParentSelect} from '../../../style/select'
import {ActiveInputLabel} from '../../../style/labels'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer,
    AddEntityLinkModalInternalContainer, AddEntitySaveButton} from '../styles'


const AddEntityModal = ({cancelNewEntityHandler, countryName, legalForm, name, parentName, renderParentNameOptions,
                            saveNewEntityHandler, setCountryName, setShowAddEntity, taxRate}) => {

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
                    <AuthenticatedPageTitle>Enter new Entity Info</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <ActiveInputLabel>Name</ActiveInputLabel>
                    <BaseInput
                        name='name'
                        placeholder='Enter name'
                        ref={name}
                        type='text'
                    />
                </div>
                <div>
                    <EntityParentSelect
                        callingComponent='AddEntityModal'
                        ref={parentName}
                    >
                        {renderParentNameOptions}
                    </EntityParentSelect>

                </div>
                <div>
                    <CountryDropdown
                        onChange={(val) => setCountryName(val)}
                         // eslint-disable-next-line react/forbid-component-props
                        style={{
                            width: '302px',
                            height: '42px',
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '19px',
                            background: '#FAFAFA',
                            border: '1px solid #D3D8DD',
                            borderRadius: '4px',
                            fontFamily: 'Nunito Sans, sans-serif',
                            paddingLeft: '7px',
                        }}
                        value={countryName}
                    />
                </div>
                <div>
                    <EntityLegalSelect
                        callingComponent='AddEntityModal'
                        legalForm={legalForm}
                    />
                </div>
                <div>
                    <ActiveInputLabel>Tax Rate</ActiveInputLabel>
                    <BaseInput
                        name='tax_rate'
                        placeholder='Enter current income tax rate'
                        ref={taxRate}
                        type='text'
                    />
                </div>
                <AddDeleteModalCloseContainer>
                    <AuthenticatedButtonCancel onClick={cancelNewEntityHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton onClick={saveNewEntityHandler}>Save</AddEntitySaveButton>
                </AddDeleteModalCloseContainer>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddEntityModal
