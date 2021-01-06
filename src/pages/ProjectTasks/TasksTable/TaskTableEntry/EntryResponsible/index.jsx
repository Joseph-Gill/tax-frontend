import React from 'react'
import {EntryResponsibleContainer, EntryResponsibleText} from './styles'


const EntryResponsible = ({group, user}) => {

    const getUserRole = () => {
        const userRole = user.assigned_project_roles.filter(role => role.project.group === group.id)
        if (userRole.length) {
            return userRole[0].role
        } else {
            return 'Unassigned'
        }
    }

    return (
        <EntryResponsibleContainer>
            <EntryResponsibleText>{user.country ? user.country : 'N/A'}</EntryResponsibleText>
            <EntryResponsibleText>{getUserRole()}</EntryResponsibleText>
            <EntryResponsibleText>{`${user.user.first_name.charAt(0)}. ${user.user.last_name}`}</EntryResponsibleText>
        </EntryResponsibleContainer>
    )
}

export default EntryResponsible
