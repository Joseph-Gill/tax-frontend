import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import ActionDropdown from './ActionDropdown'
import MembersTable from './MembersTable'
import StatusToggle from './StatusToggle'
import Spinner from '../../components/Spinner'
import ProjectFilterDropdown from './ProjectFilterDropdown'
import RemoveMemberModal from '../../components/Modals/RemoveMemberModal'
import AddMemberModal from '../../components/Modals/AddMemberModal'
import Loading from '../../components/Loading'
import MemberFilterSearchBar from './MemberFilterSearchBar'
import {getAccessUsersForProjectAction, resetMember, resetMemberFilterProjectId, setMemberFilterProjectId} from '../../store/member/actions'
import {GROUPS, HOME, MEMBERS} from '../../routes/paths'
import {DropdownOption} from '../../style/options'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer} from '../../style/containers'
import {ActionFilterDropdownContainer, AddMemberButton, AddMemberButtonContainer, DisplayMembersTitleContainer, MemberTableContainer} from './styles'


const GroupMembers = ({history}) => {
    const dispatch = useDispatch()
    let searchText = useRef('')
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const members = useSelector(state => state.groupReducer.group.users)
    const invitedMembers = useSelector(state => state.groupReducer.group.invited_new_users)
    const filterProjectId = useSelector(state => state.memberReducer.filterProjectId)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [filterMemberStatus, setFilterMemberStatus] = useState(false)
    const [showActionDropdown, setShowActionDropdown] = useState(false)
    const [showFilterDropdown, setShowFilterDropdown] = useState(false)
    const [activeRenderData, setActiveRenderData] = useState([])
    const [invitedRenderData, setInvitedRenderData] = useState([])
    const [showAddMember, setShowAddMember] = useState(false)
    const [membersToDisplay, setMembersToDisplay] = useState([])
    const [filterString, setFilterString] = useState('')
    const [loading, setLoading] = useState(false)
    const [filterOption, setFilterOption] = useState([
        {isChecked: true, type: 'email'},
        {isChecked: false, type: 'name'},
        {isChecked: false, type: 'organization'},
        {isChecked: false, type: 'project_access'},
        {isChecked: false, type: 'country'},
        {isChecked: false, type: 'project_role'}
    ])

    useEffect(() => {
        //If chosen group is not in redux state due to reload, push Home to prevent crash
        if (!loaded) {
            history.push(`${HOME}`)
        } else {
            const filterMembersForProjectFilter = async () => {
                //If a project is selected in project filter, gets all members who have
                //access to that project
                if (filterProjectId) {
                    const response = await dispatch(getAccessUsersForProjectAction(filterProjectId))
                    //Sets members to display as all members with access to the project
                    if (response) {
                        setMembersToDisplay([...response])
                    }
                //Sets members to display as all members of the group
                } else {
                    setMembersToDisplay([...members])
                }
            }
            setLoading(true)
            //Resets the selected member of MemberEdit in redux state
            dispatch(resetMember())
            filterMembersForProjectFilter()
                .then(() => setLoading(false))
        }
    }, [dispatch, filterProjectId, members, loaded, history])

    //Used to check or uncheck all check boxes of the page
    const resetAllCheckedChangeFilterMemberStatus = () => {
        const activeDataCopy = [...activeRenderData]
        const inviteDataCopy = [...invitedRenderData]
        for (const member of activeDataCopy) {
            member.isChecked = false
        }
        for (const member of inviteDataCopy) {
            member.isChecked = false
        }
        setFilterMemberStatus(!filterMemberStatus)
    }

    //Used by send email from ActionDropdown, creates string of emails to feed to "mailto:"
    //Currently does not work with Windows 10 mail if more then one email is selected, need to find better solution
    const sendEmailClickHandler = () => {
        const result = activeRenderData.filter(user => user.isChecked).concat(invitedRenderData.filter(user => user.isChecked))
        let emailString = 'mailto:'
        let counter = 0
        if (result.length) {
            result.forEach((user, index) => {
                if (!index) {
                    emailString = emailString.concat(`${user.email}?cc=`)
                    counter++
                } else {
                    emailString = emailString.concat(`${user.email}%3B%20`)
                    counter++
                }
            })
            counter === 1 ? window.location = emailString.slice(0, -4) : window.location = emailString.slice(0, -6)
        }
        setShowActionDropdown(false)
    }

    //Populates the project filter dropdown with all projects of a group
    const renderProjectFilterOptions = () => (
        group.projects.map(project => (
            <DropdownOption
                key={project.id}
                value={project.id}
            >{project.name}
            </DropdownOption>
        ))
    )

    //Selected project to filter is stored in redux state, needed so that
    //ProjectDisplay can push to ProjectMembers with project preselected
    const projectFilterChangeHandler = projectId => {
        if (projectId) {
            dispatch(setMemberFilterProjectId(parseInt(projectId)))
        } else {
            dispatch(resetMemberFilterProjectId())
        }
    }

    //Used by search bar to filter by enter keypress in search bar
    const filterByKeypressChangeHandler = (e) => {
        if (e.key === 'Enter') {
            setFilterString(e.target.value)
        }
    }

    //Used by search bar to filter by clicking search image
    const filterByClickChangeHandler = () => {
        setFilterString(searchText.current.value)
    }

    //Used by search bar to reset the search bar text
    const resetFilterChangeHandler = () => {
        setFilterString('')
        searchText.current.value = ''
    }

    //Used by Action dropdown, toggles it open/close, closing the Filter dropdown
    const toggleActionCloseFilterSearch = () => {
        setShowActionDropdown(!showActionDropdown)
        setShowFilterDropdown(false)
    }

    //Used by Filter dropdown, toggles it open/close, closing the Action dropdown
    const toggleFilterSearchCloseAction = () => {
        setShowFilterDropdown(!showFilterDropdown)
        setShowActionDropdown(false)
    }

    return (
        <AuthenticatedPageContainer>
            {showConfirmation &&
                <RemoveMemberModal
                    activeMembers={activeRenderData}
                    group={group}
                    history={history}
                    invitedMembers={invitedRenderData}
                    setShowConfirmation={setShowConfirmation}
                />}
            {showAddMember && <AddMemberModal groupId={group.id} setShowAddMember={setShowAddMember} />}
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`, active: true}]}
                    />
                    <DisplayMembersTitleContainer>
                        <AuthenticatedPageTitle>Team Members</AuthenticatedPageTitle>
                        <StatusToggle
                            filterMemberStatus={filterMemberStatus}
                            resetAllCheckedChangeFilterMemberStatus={resetAllCheckedChangeFilterMemberStatus}
                        />
                    </DisplayMembersTitleContainer>
                    <ActionFilterDropdownContainer>
                        {filterMemberStatus && !invitedMembers.length ? null : (
                            <>
                                {!filterMemberStatus ?
                                    <ProjectFilterDropdown
                                        filterProjectId={filterProjectId}
                                        projectFilterChangeHandler={projectFilterChangeHandler}
                                        renderProjectFilterOptions={renderProjectFilterOptions}
                                    /> : null}
                                <MemberFilterSearchBar
                                    filterByClickChangeHandler={filterByClickChangeHandler}
                                    filterByKeypressChangeHandler={filterByKeypressChangeHandler}
                                    filterMemberStatus={filterMemberStatus}
                                    filterOption={filterOption}
                                    resetFilterChangeHandler={resetFilterChangeHandler}
                                    searchText={searchText}
                                    setFilterOption={setFilterOption}
                                    setShowFilterDropdown={setShowFilterDropdown}
                                    showFilterDropdown={showFilterDropdown}
                                    toggleFilterSearchCloseAction={toggleFilterSearchCloseAction}
                                />
                                <ActionDropdown
                                    sendEmailClickHandler={sendEmailClickHandler}
                                    setShowConfirmation={setShowConfirmation}
                                    showActionDropdown={showActionDropdown}
                                    toggleActionCloseFilterSearch={toggleActionCloseFilterSearch}
                                />
                            </>)}
                    </ActionFilterDropdownContainer>
                    <MemberTableContainer>
                        {loading ?
                            <Loading /> :
                            <MembersTable
                                activeRenderData={activeRenderData}
                                filterMemberStatus={filterMemberStatus}
                                filterOption={filterOption}
                                filterString={filterString}
                                group={group}
                                history={history}
                                invitedMembers={invitedMembers}
                                invitedRenderData={invitedRenderData}
                                members={membersToDisplay}
                                setActiveRenderData={setActiveRenderData}
                                setInvitedRenderData={setInvitedRenderData}
                                setShowAddMember={setShowAddMember}
                            />}
                    </MemberTableContainer>
                    <AddMemberButtonContainer>
                        {filterMemberStatus && !invitedMembers.length ? null : (
                            <AddMemberButton onClick={() => setShowAddMember(!showAddMember)}>Add team member</AddMemberButton> )}
                    </AddMemberButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupMembers
