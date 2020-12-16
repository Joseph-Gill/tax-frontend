import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {EDIT_MEMBER, GROUPS, MEMBERS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {getMemberAction} from '../../store/member/actions'
import {useRouteMatch} from 'react-router-dom'
import Spinner from '../../components/Spinner'
import {CancelButton, DeleteButton, SaveButton} from '../../style/buttons'
import EditMemberInputs from './EditMemberInputs'
import {getRolesForProfileGroupAction} from '../../store/projectRole/actions'


const MemberEditCancelSaveDeleteButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
        margin-left: 20px;
    }
`


const MemberEdit = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const group = useSelector(state => state.groupReducer.group)
    const member = useSelector(state => state.memberReducer.member)
    const loaded = useSelector(state => state.memberReducer.loaded)
    const [allProjectsChecked, setAllProjectsChecked] = useState(false)
    const [allGroupProjects, setAllGroupProjects] = useState([])
    const [userAssignedRoles, setUserAssignedRoles] = useState([])
    const [roleChecked, setRoleChecked] = useState([
        {isChecked: false, role: 'Core'},
        {isChecked: false, role: 'Legal'},
        {isChecked: false, role: 'Tax'},
        {isChecked: false, role: 'Other'}
    ])

    useEffect(() => {
        const listAllGroupProjectsCheckIfAssigned = async () => {
            const result = [];
            const assignedRoles = await dispatch(getRolesForProfileGroupAction(match.params.memberId, group.id))
            setUserAssignedRoles([...assignedRoles])
            if (group.projects) {
                group.projects.forEach(project => {
                    const isChecked = assignedRoles.filter(role => role.project.id === project.id)
                    let data = {
                        id: project.id,
                        name: project.name,
                        isChecked: !!isChecked.length
                    }
                    result.push(data)
                })
                setAllGroupProjects([...result])
            }
        }
        dispatch(getMemberAction(match.params.memberId))
        listAllGroupProjectsCheckIfAssigned()
    }, [dispatch, match.params.memberId, group.projects, group.id])

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`, active: false},
                        {display: `MEMBER : ${member.user.first_name.toUpperCase()} ${member.user.last_name.toUpperCase()}`, to: `${GROUPS}${MEMBERS}${EDIT_MEMBER}/${member.id}`, active: true}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Edit Team Member</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    <EditMemberInputs
                        allGroupProjects={allGroupProjects}
                        allProjectsChecked={allProjectsChecked}
                        memberEmail={member.user.email}
                        roleChecked={roleChecked}
                        setAllGroupProjects={setAllGroupProjects}
                        setAllProjectsChecked={setAllProjectsChecked}
                        setRoleChecked={setRoleChecked}
                    />
                    <MemberEditCancelSaveDeleteButtonContainer>
                        <CancelButton>Cancel</CancelButton>
                        <DeleteButton>Remove</DeleteButton>
                        <SaveButton>Save</SaveButton>
                    </MemberEditCancelSaveDeleteButtonContainer>
                </>
            )}
        </AuthenticatedPageContainer>
    )
}

export default MemberEdit
