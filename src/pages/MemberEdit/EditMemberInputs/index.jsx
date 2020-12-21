import React from 'react'
import {AuthenticatedText} from '../../../style/text'
import AccessProjectList from './AccessProjectList'
import {EditInputsContainer, EditMemberEmailInput, EmailAccessOrgCountryInputContainer, RoleInputContainer, SelectOrgErrorMessageContainer} from './style'
import RoleProjectList from './RoleProjectList'
import OrgDropdown from './OrgDropdown'
import {ErrorMessage} from '../../../style/messages'


const EditMemberInputs = ({allGroupProjects,
                          allProjectsChecked,
                          error,
                          groupOrganizations,
                          handleCreateNewOrganization,
                          memberEmail,
                          newOrg,
                          roleChecked,
                          selectNewOrgStatus,
                          selectOrgName,
                          setAllGroupProjects,
                          setAllProjectsChecked,
                          setRoleChecked,
                          setSelectNewOrgStatus,
                          setSelectOrgName}) => {
    return (
        <EditInputsContainer>
            <EmailAccessOrgCountryInputContainer>
                <AuthenticatedText>Email</AuthenticatedText>
                <EditMemberEmailInput
                    disabled
                    name='member_email'
                    type='text'
                    value={memberEmail}
                />
            </EmailAccessOrgCountryInputContainer>
            <EmailAccessOrgCountryInputContainer>
                <AuthenticatedText>Access</AuthenticatedText>
                <AccessProjectList
                    allGroupProjects={allGroupProjects}
                    allProjectsChecked={allProjectsChecked}
                    setAllGroupProjects={setAllGroupProjects}
                    setAllProjectsChecked={setAllProjectsChecked}
                />
            </EmailAccessOrgCountryInputContainer>
            <RoleInputContainer>
                <AuthenticatedText>Role</AuthenticatedText>
                <RoleProjectList
                    roleChecked={roleChecked}
                    setRoleChecked={setRoleChecked}
                />
            </RoleInputContainer>
            <EmailAccessOrgCountryInputContainer>
                <AuthenticatedText>Organization</AuthenticatedText>
                <OrgDropdown
                    groupOrganizations={groupOrganizations}
                    handleCreateNewOrganization={handleCreateNewOrganization}
                    newOrg={newOrg}
                    selectNewOrgStatus={selectNewOrgStatus}
                    selectOrgName={selectOrgName}
                    setSelectNewOrgStatus={setSelectNewOrgStatus}
                    setSelectOrgName={setSelectOrgName}
                />
            </EmailAccessOrgCountryInputContainer>
            <SelectOrgErrorMessageContainer>
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
            </SelectOrgErrorMessageContainer>
        </EditInputsContainer>
    )
}

export default EditMemberInputs
