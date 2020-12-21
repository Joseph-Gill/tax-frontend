import React from 'react'
import bluePlusSign from '../../../../assets/icons/stark_add_org_icon.svg'
import {AuthenticatedText} from '../../../../style/text'
import {AddNewOrgText, NewOrgInput, OrganizationDropdown, OrgDropdownButton, OrgDropdownChoiceContainer, OrgDropdownOptions, OrgInputDropdownChoiceContainer} from './styles'


const OrgDropdown = ({newOrg, groupOrganizations, handleCreateNewOrganization, selectNewOrgStatus, selectOrgName, setSelectNewOrgStatus, setSelectOrgName}) => {
    const handleNewOrgInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleCreateNewOrganization()
        }
    }

    return (
        <OrganizationDropdown>
            <OrgDropdownButton>{selectOrgName ? selectOrgName : 'Select a organization'}</OrgDropdownButton>
            <OrgDropdownOptions>
                {!selectNewOrgStatus ? (
                    <OrgDropdownChoiceContainer onClick={() => setSelectNewOrgStatus(!selectNewOrgStatus)}>
                        <img alt='add organization' src={bluePlusSign} />
                        <AddNewOrgText>Add new organization</AddNewOrgText>
                    </OrgDropdownChoiceContainer>) : (
                        <OrgInputDropdownChoiceContainer>
                            <NewOrgInput
                                name='new_organization'
                                onKeyPress={(e) => handleNewOrgInputPressEnter(e)}
                                placeholder='Enter the organization name'
                                ref={newOrg}
                                type='text'
                            />
                        </OrgInputDropdownChoiceContainer>)}
                {groupOrganizations.map(org => (
                    <OrgDropdownChoiceContainer
                        key={org.id}
                        onClick={() => setSelectOrgName(org.name)}
                    >
                        <AuthenticatedText>{org.name}</AuthenticatedText>
                    </OrgDropdownChoiceContainer>
                ))}
            </OrgDropdownOptions>
        </OrganizationDropdown>
    )
}

export default OrgDropdown
