import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedText} from '../../../style/text'
import {BaseInput} from '../../../style/inputs'
import AccessProjectList from './AccessProjectList'

const EditInputsContainer = styled.div`
    width: 860px;
    height: 484px;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 50px 20px;
`

const EmailAccessOrgCountryInputContainer = styled.div`
    width: 471px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const RoleInputContainer = styled.div`
    width: 795px;
    display: flex;
    justify-content: space-between;
`

const EditMemberEmailInput = styled(BaseInput)`
    width: 302px;
`


const EditMemberInputs = ({allGroupProjects, allProjectsChecked, memberEmail, setAllGroupProjects, setAllProjectsChecked}) => {
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
