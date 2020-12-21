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
import {getRolesForProfileGroupAction, updateRolesForProfileGroupAction} from '../../store/projectRole/actions'
import {createOrganizationForGroupAction} from '../../store/organization/actions'
import {MemberEditCancelSaveDeleteButtonContainer} from './styles'
import SuccessMessage from '../../components/SuccessMessage'
import DeleteMemberModal from '../../components/DeleteAccountModal/DeleteMemberModal'
import {getGroupAction} from '../../store/group/actions'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'


const MemberEdit = ({history}) => {
    let newOrg = useRef('')
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const group = useSelector(state => state.groupReducer.group)
    const member = useSelector(state => state.memberReducer.member)
    const loaded = useSelector(state => state.memberReducer.loaded)
    const error = useSelector(state => state.errorReducer.error)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
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
        const getMemberOrgMatchingGroup = async () => {
            const response = await dispatch(getMemberAction(match.params.memberId))
            const result = response.organizations.filter(org => org.group === group.id)
            if (result.length) {
                setSelectOrgName(result[0].name)
            }
        }
        listAllGroupProjectsCheckIfAssigned()
        getMemberOrgMatchingGroup()
    }, [dispatch, match.params.memberId, group.id, group.projects])


    const handleCreateNewOrganization = async () => {
        const newOrgInfo = {
            name: newOrg.current.value
        }
        setSelectNewOrgStatus(!selectNewOrgStatus)
        await dispatch(createOrganizationForGroupAction(newOrgInfo, group.id))
    }

    const saveMemberChangesHandler = async () => {
        dispatch(resetErrors())
        if (!selectOrgName) {
            dispatch(setError({detail: `You must select an organization for this member.`}))
        } else {
            const updatedProjectAccess = []
            allGroupProjects.forEach(project => {
                let projectInfo = {
                    id: project.id,
                    access: project.isChecked
                }
                updatedProjectAccess.push(projectInfo)
            })
            const selectedRole = Object.keys(roleChecked).find(key => roleChecked[key])
            const selectedOrg = group.organizations.filter(org => org.name === selectOrgName)[0]
            const updatedMemberInfo = {
                member_project_access: updatedProjectAccess,
                role: selectedRole,
                organization: selectedOrg
            }
            const response = await dispatch(updateRolesForProfileGroupAction(updatedMemberInfo, group.id, member.id))
            if (response.status === 202) {
                dispatch(getGroupAction(group.id))
                setShowSuccess(!showSuccess)
            }
        }
    }

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    {showSuccess &&
                        <SuccessMessage
                            message="The member has been successfully updated!"
                            redirect={`${GROUPS}${MEMBERS}`}
                        />}
                    {showConfirmation &&
                        <DeleteMemberModal
                            history={history}
                            setShowConfirmation={setShowConfirmation}
                        />}
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
                        error={error}
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
                        <DeleteButton onClick={() => setShowConfirmation(!showConfirmation)}>Remove</DeleteButton>
                        <SaveButton onClick={saveMemberChangesHandler}>Save</SaveButton>
                    </MemberEditCancelSaveDeleteButtonContainer>
                </>
            )}
        </AuthenticatedPageContainer>
    )
}

export default MemberEdit
