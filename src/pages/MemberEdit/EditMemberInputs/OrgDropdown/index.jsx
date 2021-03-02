import React, {useState} from 'react'
import DropdownInternalContainer from '../../../../components/Dropdowns/DropdownComponents/DropdownInternalContainer'
import bluePlusSign from '../../../../assets/icons/stark_add_org_icon.svg'
import {AddNewOrgText, AddOrgImageContainer, NewOrgInput, OrgDowndownText, OrgDropdownButton,
    OrgDropdownContent, OrgDropdownContentContainer} from './styles'
import {DropdownContent} from '../../../../style/dropdowns'


const OrgDropdown = ({newOrg, groupOrganizations, handleCreateNewOrganization, selectNewOrgStatus,
                         selectOrgName, setSelectNewOrgStatus, setSelectOrgName}) => {
    const [showDropdown, setShowDropdown] = useState(false)

    //Saves new Organization user wishes to create by pressing enter
    const handleNewOrgInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleCreateNewOrganization()
        }
    }

    const selectOrgHandler = name => {
        setSelectOrgName(name)
        setShowDropdown(false)
    }

    return (
        <DropdownInternalContainer
            setDropdownView={setShowDropdown}
            showDropdownView={showDropdown}
        >
            <OrgDropdownButton
                onClick={() => setShowDropdown(!showDropdown)}
            >{selectOrgName ? selectOrgName : 'Select a organization'}
            </OrgDropdownButton>
            <OrgDropdownContentContainer show={showDropdown ? 1 : 0}>
                {!selectNewOrgStatus ? (
                    <OrgDropdownContent onClick={() => setSelectNewOrgStatus(!selectNewOrgStatus)}>
                        <AddOrgImageContainer>
                            <img alt='add organization' src={bluePlusSign} />
                        </AddOrgImageContainer>
                        <AddNewOrgText>Add new organization</AddNewOrgText>
                    </OrgDropdownContent>
                ) : (
                    <NewOrgInput
                        name='new_organization'
                        onKeyPress={(e) => handleNewOrgInputPressEnter(e)}
                        placeholder='Enter the organization name'
                        ref={newOrg}
                        type='text'
                    />
                )}
                {groupOrganizations.map(org => (
                    <DropdownContent
                        key={org.id}
                        onClick={() => selectOrgHandler(org.name)}
                    >
                        <OrgDowndownText>{org.name}</OrgDowndownText>
                    </DropdownContent>
                ))}
            </OrgDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default OrgDropdown
