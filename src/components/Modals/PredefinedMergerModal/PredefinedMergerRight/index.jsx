import React from 'react'
import ModalInput from '../../ModalComponents/ModalInput'
import EntityLocationDropdown from '../../../Dropdowns/EntityLocationDropdown'
import EntityLegalDropdown from '../../../Dropdowns/EntityLegalDropdown'
import {FadeInContainerDelay} from '../../../../style/animations'
import {NewCompanyInfoContainer, NewCompanyTitle} from './styles'


const PredefinedMergerRight = ({countryName, error, legalForm, newEntityInfo, setCountryName, setLegalForm,
                                   setNewEntityInfo, setShowNewCompanyLegalForm, showNewCompanyLegalForm,
                                   showExpanded}) => {
    return (
        <NewCompanyInfoContainer expanded={showExpanded ? 1 : 0}>
            <FadeInContainerDelay>
                <NewCompanyTitle>New Company Information</NewCompanyTitle>
            </FadeInContainerDelay>
            <FadeInContainerDelay>
                <ModalInput
                    changeHandler={(e) => setNewEntityInfo({...newEntityInfo, entityName: e.target.value})}
                    error={error}
                    errorLocation={error.newCompanyName}
                    label='New company name'
                    name='new_company_name'
                    placeholder='Enter new company name'
                    type='text'
                    value={newEntityInfo.entityName}
                />
            </FadeInContainerDelay>
            <FadeInContainerDelay>
                <EntityLocationDropdown
                    changeHandler={(val) => setCountryName(val)}
                    error={error}
                    errorLocation={error.newCompanyCountryName}
                    value={countryName}
                />
            </FadeInContainerDelay>
            <FadeInContainerDelay>
                <EntityLegalDropdown
                    // Only used to decide if input should be disabled during Edit
                    // disabling this feature on AddModal
                    editEntityInfo={{entitySelected: true}}
                    error={error}
                    legalForm={legalForm}
                    setLegalForm={setLegalForm}
                    setShowEntityLegalSelect={setShowNewCompanyLegalForm}
                    showEntityLegalSelect={showNewCompanyLegalForm}
                />
            </FadeInContainerDelay>
            <FadeInContainerDelay>
                <ModalInput
                    changeHandler={(e) => setNewEntityInfo({...newEntityInfo, taxRate: e.target.value})}
                    label='Tax Rate (optional)'
                    name='tax_rate'
                    placeholder='Enter current income tax rate'
                    type='text'
                    value={newEntityInfo.taxRate}
                />
            </FadeInContainerDelay>
        </NewCompanyInfoContainer>
    )
}

export default PredefinedMergerRight
