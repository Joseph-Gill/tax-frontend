import React from 'react'
import bluePlusSign from '../../../../assets/icons/stark_add_org_icon.svg'
import {
    AddNewOrgText, AddOrgImage, AddOrgImageContainer, NewOrgInput, OrganizationDropdown, OrgDowndownText, OrgDropdownButton, OrgDropdownChoiceContainer,
    OrgDropdownOptions, OrgInputDropdownChoiceContainer
} from './styles'


const OrgDropdown = ({newOrg, groupOrganizations, handleCreateNewOrganization, selectNewOrgStatus,
                         selectOrgName, setSelectNewOrgStatus, setSelectOrgName}) => {

    //Saves new Organization user wishes to create by pressing enter
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
                        <AddOrgImageContainer>
                            <AddOrgImage alt='add organization' src={bluePlusSign} />
                        </AddOrgImageContainer>
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
                        <OrgDowndownText>{org.name}</OrgDowndownText>
                    </OrgDropdownChoiceContainer>
                ))}
            </OrgDropdownOptions>
        </OrganizationDropdown>
    )
}

export default OrgDropdown
