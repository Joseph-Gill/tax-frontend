import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedText} from '../../../style/text'
import AccessProjectList from './AccessProjectList'
import {EditInputsContainer, EditMemberEmailInput, EmailAccessOrgCountryInputContainer, RoleInputContainer} from './style'
import RoleProjectList from './RoleProjectList'


const EditMemberInputs = ({allGroupProjects, allProjectsChecked, memberEmail, roleChecked, setAllGroupProjects, setAllProjectsChecked, setRoleChecked}) => {
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
            </EmailAccessOrgCountryInputContainer>
            <EmailAccessOrgCountryInputContainer>
                <AuthenticatedText>Country</AuthenticatedText>
            </EmailAccessOrgCountryInputContainer>
        </EditInputsContainer>
    )
}

export default EditMemberInputs
