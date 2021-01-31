import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
import Spinner from '../../components/Spinner'
import EditMemberInputs from './EditMemberInputs'
import SuccessMessage from '../../components/SuccessMessage'
import RemoveMemberModal from '../../components/Modals/RemoveMemberModal'
import {getMemberAction} from '../../store/member/actions'
import {getGroupAction} from '../../store/group/actions'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {createOrganizationForGroupAction} from '../../store/organization/actions'
import {getRolesForProfileGroupAction, updateRolesForProfileGroupAction} from '../../store/projectRole/actions'
import {EDIT_MEMBER, GROUPS, HOME, MEMBERS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CancelButton, DeleteButton, SaveButton} from '../../style/buttons'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {MemberEditCancelSaveDeleteButtonContainer} from './styles'


const MemberEdit = ({history}) => {
    let newOrg = useRef('')
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const group = useSelector(state => state.groupReducer.group)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const member = useSelector(state => state.memberReducer.member)
    const memberLoaded = useSelector(state => state.memberReducer.loaded)
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
            //Gets all project of a group a member has a role assigned
            const assignedProjects = await dispatch(getRolesForProfileGroupAction(match.params.memberId, group.id))
            setUserAssignedProjects([...assignedProjects])
            if (group.projects) {
                let result = [];
                //Iterates over all projects of the group
                group.projects.forEach(project => {
                    //Checks to see if the current project being iterated is in the list of member assigned project roles
                    const isChecked = assignedProjects.filter(role => role.project.id === project.id)
                    let data = {
                        id: project.id,
                        name: project.name,
                        //Sets the check box to active if the user has a role matching the project
                        isChecked: !!isChecked.length
                    }
                    result.push(data)
                })
                setAllGroupProjects([...result])
            }
            //Sets the values for role checkbox if the member has roles already defined
            if (assignedProjects.length) {
                const checkedRole = {
                    Core: false,
                    Legal: false,
                    Tax: false,
                    Other: false,
                    //Members have the same role for all projects of a group, sets the checkbox to true for the first role in the list of roles
                    [assignedProjects[0].role]: true,
                }
                setRoleChecked(checkedRole)
            }
        }
        //Sets the Organization, specific to the chosen group, that the member is part of
        const getMemberOrgMatchingGroup = async () => {
            const response = await dispatch(getMemberAction(match.params.memberId))
            const result = response.organizations.filter(org => org.group === group.id)
            if (result.length) {
                setSelectOrgName(result[0].name)
            }
        }
        //Pushes home if no group is loaded due to page reload
        if (!groupLoaded) {
            history.push(HOME)
        } else {
            listAllGroupProjectsCheckIfAssigned()
            getMemberOrgMatchingGroup()
        }
    }, [dispatch, match.params.memberId, group.id, group.projects, groupLoaded, history])


    const handleCreateNewOrganization = async () => {
        const newOrgInfo = {
            name: newOrg.current.value
        }
        setSelectNewOrgStatus(!selectNewOrgStatus)
        await dispatch(createOrganizationForGroupAction(newOrgInfo, group.id))
    }

    //Used for error handling during member update to make sure at least one project is checked, if a role is selected
    const checkIfAtLeastOneProjectChecked = () => {
        let result = false
        allGroupProjects.forEach(project => {
            if (project.isChecked) {
                result = true
            }
        })
        return result
    }

    const saveMemberChangesHandler = async () => {
        dispatch(resetErrors())
        //Error handling if a member is to be saved with no organization assigned to them first
        if (!selectOrgName) {
            dispatch(setError({organization: `You must select an Organization for this member.`}))
        //Error handling if a project is selected, but no role is selected as well for the member
        } else if (checkIfAtLeastOneProjectChecked() && !Object.values(roleChecked).includes(true)) {
            dispatch(setError({role: `You must select a Role to be able to assign a member to Projects.`}))
        //Error handling if a role is selected, but no project is selected as well for the member
        } else if (!checkIfAtLeastOneProjectChecked() && Object.values(roleChecked).includes(true)) {
            dispatch(setError({project: `You must select at least one Project to assign a member a Role.`}))
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
                role: selectedRole ? selectedRole : '',
                organization: selectedOrg
            }
            const response = await dispatch(updateRolesForProfileGroupAction(updatedMemberInfo, group.id, member.id))
            if (response.status === 202) {
                dispatch(getGroupAction(group.id))
                setShowSuccess(!showSuccess)
            }
        }
    }

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        history.push(`${GROUPS}${MEMBERS}`)
    }

    return (
        <AuthenticatedPageContainer>
            {!memberLoaded ? <Spinner /> : (
                <>
                    {showSuccess &&
                        <SuccessMessage
                            message="The member has been successfully updated!"
                            redirect={`${GROUPS}${MEMBERS}`}
                        />}
                    {showConfirmation &&
                        <RemoveMemberModal
                            activeMembers={[{isChecked: true, email: member.user.email}]}
                            group={group}
                            history={history}
                            invitedMembers={[]}
                            setShowConfirmation={setShowConfirmation}
                        />}
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`, active: false},
                        {display: `MEMBER : ${member.user.first_name.toUpperCase()} ${member.user.last_name.toUpperCase()}`, to: `${GROUPS}${MEMBERS}${EDIT_MEMBER}/${member.id}`, active: true}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>{`Edit Team Member - ${member.user.first_name} ${member.user.last_name}`}</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    <EditMemberInputs
                        allGroupProjects={allGroupProjects}
                        allProjectsChecked={allProjectsChecked}
                        error={error}
                        group={group}
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
                        <CancelButton onClick={cancelButtonHandler}>Cancel</CancelButton>
                        <DeleteButton onClick={() => setShowConfirmation(!showConfirmation)}>Remove</DeleteButton>
                        <SaveButton onClick={saveMemberChangesHandler}>Save</SaveButton>
                    </MemberEditCancelSaveDeleteButtonContainer>
                </>
            )}
        </AuthenticatedPageContainer>
    )
}

export default MemberEdit
