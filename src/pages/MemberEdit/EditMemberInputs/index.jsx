import React from 'react'
import AccessProjectList from './AccessProjectList'
import RoleProjectList from './RoleProjectList'
import OrgDropdown from './OrgDropdown'
import {ErrorMessage} from '../../../style/messages'
import {AuthenticatedText} from '../../../style/text'
import {EditInputsContainer, EditMemberEmailInput, EmailAccessOrgCountryInputContainer, RoleInputContainer, SelectOrgErrorMessageContainer} from './style'


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
            <SelectOrgErrorMessageContainer>
                {error && <ErrorMessage>{error.project}</ErrorMessage>}
            </SelectOrgErrorMessageContainer>
            <EmailAccessOrgCountryInputContainer>
                <AuthenticatedText>Access</AuthenticatedText>
                <AccessProjectList
                    allGroupProjects={allGroupProjects}
                    allProjectsChecked={allProjectsChecked}
                    setAllGroupProjects={setAllGroupProjects}
                    setAllProjectsChecked={setAllProjectsChecked}
                />
            </EmailAccessOrgCountryInputContainer>
            <SelectOrgErrorMessageContainer>
                {error && <ErrorMessage>{error.role}</ErrorMessage>}
            </SelectOrgErrorMessageContainer>
            <RoleInputContainer>
                <AuthenticatedText>Role</AuthenticatedText>
                <RoleProjectList
                    roleChecked={roleChecked}
                    setRoleChecked={setRoleChecked}
                />
            </RoleInputContainer>
            <SelectOrgErrorMessageContainer>
                {error && <ErrorMessage>{error.organization}</ErrorMessage>}
            </SelectOrgErrorMessageContainer>
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
        </EditInputsContainer>
    )
}

export default EditMemberInputs
