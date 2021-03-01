import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import AddMemberCenterText from './AddMemberCenterText'
import AddMemberRedText from './AddMemberRedText'
import AddMemberEmailInput from './AddMemberEmailInput'
import AddMemberButtons from './AddMemberButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {addMemberToGroupAction} from '../../../store/member/actions'
import {AddTeamMemberModalContainer} from './styles'

//Used by GroupMembers and MemberEdit for adding new members to a group
const AddMemberModal = ({groupId, setShowAddMember, showAddMember}) => {
    let email = useRef('')
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)

    const addUserHandler = async() => {
        dispatch(resetErrors())
        const newUserEmail = {
            email: email.current.value}
        const response = await dispatch(addMemberToGroupAction(newUserEmail, groupId))
        if (response.status === 201) {
            setShowAddMember(false)
        }
    }

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowAddMember(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowAddMember}
            showModalView={showAddMember}
        >
            <Draggable>
                <AddTeamMemberModalContainer>
                    <ModalClose modalDisplay={setShowAddMember} />
                    <ModalTitle title='Add Team Member' />
                    <AddMemberCenterText />
                    <AddMemberRedText />
                    <AddMemberEmailInput
                        email={email}
                        error={error}
                    />
                    <AddMemberButtons
                        addUserHandler={addUserHandler}
                        cancelButtonHandler={cancelButtonHandler}
                    />
                </AddTeamMemberModalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default AddMemberModal
