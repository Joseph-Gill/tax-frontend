import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
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
import {createOrganizationForGroupAction} from '../../store/organization/actions'
import {MemberEditCancelSaveDeleteButtonContainer} from './styles'


const MemberEdit = ({history}) => {
    let newOrg = useRef('')
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const group = useSelector(state => state.groupReducer.group)
    const member = useSelector(state => state.memberReducer.member)
    const loaded = useSelector(state => state.memberReducer.loaded)
    const [allProjectsChecked, setAllProjectsChecked] = useState(false)
    const [allGroupProjects, setAllGroupProjects] = useState([])
    const [userAssignedProjects, setUserAssignedProjects] = useState([])
    const [selectNewOrgStatus, setSelectNewOrgStatus] = useState(false)
    const [selectOrgName, setSelectOrgName] = useState('')
    const [roleChecked, setRoleChecked] = useState({
        Core: false,
        Legal: false,
        Tax: false,
        Other: false
    })

    useEffect(() => {
        const listAllGroupProjectsCheckIfAssigned = async () => {
            const assignedProjects = await dispatch(getRolesForProfileGroupAction(match.params.memberId, group.id))
            setUserAssignedProjects([...assignedProjects])
            if (group.projects) {
                let result = [];
                group.projects.forEach(project => {
                    const isChecked = assignedProjects.filter(role => role.project.id === project.id)
                    let data = {
                        id: project.id,
                        name: project.name,
                        isChecked: !!isChecked.length
                    }
                    result.push(data)
                })
                setAllGroupProjects([...result])
            }
            if (assignedProjects.length) {
                const checkedRole = {
                    Core: false,
                    Legal: false,
                    Tax: false,
                    Other: false,
                    [assignedProjects[0].role]: true,
                }
                setRoleChecked(checkedRole)
            }
        }
        listAllGroupProjectsCheckIfAssigned()
        dispatch(getMemberAction(match.params.memberId))
    }, [dispatch, match.params.memberId, group.id, group.projects])


    const handleCreateNewOrganization = async () => {
        const newOrgInfo = {
            name: newOrg.current.value
        }
        setSelectNewOrgStatus(!selectNewOrgStatus)
        await dispatch(createOrganizationForGroupAction(newOrgInfo, group.id))
    }

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
                        groupOrganizations={group.organizations}
                        handleCreateNewOrganization={handleCreateNewOrganization}
                        memberEmail={member.user.email}
                        newOrg={newOrg}
                        roleChecked={roleChecked}
                        selectNewOrgStatus={selectNewOrgStatus}
                        selectOrgName={selectOrgName}
                        setAllGroupProjects={setAllGroupProjects}
                        setAllProjectsChecked={setAllProjectsChecked}
                        setRoleChecked={setRoleChecked}
                        setSelectNewOrgStatus={setSelectNewOrgStatus}
                        setSelectOrgName={setSelectOrgName}
                        userAssignedProjects={userAssignedProjects}
                    />
                    <MemberEditCancelSaveDeleteButtonContainer>
                        <CancelButton onClick={() => history.push(`${GROUPS}${MEMBERS}`)}>Cancel</CancelButton>
                        <DeleteButton>Remove</DeleteButton>
                        <SaveButton>Save</SaveButton>
                    </MemberEditCancelSaveDeleteButtonContainer>
                </>
            )}
        </AuthenticatedPageContainer>
    )
}

export default MemberEdit
