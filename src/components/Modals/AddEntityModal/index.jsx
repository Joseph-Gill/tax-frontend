import React from 'react'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer, AddDeleteModalTitleContainer} from '../styles'
import {useSpring} from 'react-spring'
import {CloseIcon} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'
import styled from 'styled-components/macro'
import {ActiveInputLabel} from '../../../style/labels'
import {BaseInput} from '../../../style/inputs'
import {CountryDropdown} from 'react-country-region-selector'
import EntityLegalSelect from '../../EntityLegalSelect'
import {EntityParentSelect} from '../../../style/select'
import {AuthenticatedButtonCancel, BaseButton} from '../../../style/buttons'


const AddEntityModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    height: 430px;
`

const AddEntitySaveButton = styled(BaseButton)`
    width: 92px;
    height: 32px;
    margin-left: 13px;
`


const AddEntityModal = ({cancelNewEntityHandler, countryName, legalForm, name, parentName, renderParentNameOptions, saveNewEntityHandler, setCountryName, setShowAddEntity, taxRate}) => {

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <AddEntityModalInternalContainer>
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
            </AddEntityModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddEntityModal
