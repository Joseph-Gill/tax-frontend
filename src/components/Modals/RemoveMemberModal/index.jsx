import React, {useState} from 'react'
import Draggable from 'react-draggable'
import {useDispatch, useSelector} from 'react-redux'
import RemoveMemberModalText from './RemoveMemberModalText'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {removeMembersFromGroupAction} from '../../../store/member/actions'
import {getGroupAction} from '../../../store/group/actions'
import {GROUPS, MEMBERS} from '../../../routes/paths'
import {AddDeleteModalInternalContainer} from '../styles'


//Used by GroupMembers to remove members from a group
const RemoveMemberModal = ({activeMembers, group, history, invitedMembers, setShowConfirmation,
                               showConfirmation}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    const [password, setPassword] = useState('')

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowConfirmation(false)
    }

    const removeButtonHandler = async () => {
        dispatch(resetErrors())
        const membersToRemove = activeMembers.filter(member => member.isChecked)
        const invitedToRemove = invitedMembers.filter(member => member.isChecked)
        const removeData = {
            users: membersToRemove,
            invited_users: invitedToRemove,
            password: password
        }
        const response = await dispatch(removeMembersFromGroupAction(removeData, group.id))
        if (response.status === 200) {
            setShowConfirmation(false)
            await dispatch(getGroupAction(group.id))
            history.push(`${GROUPS}${MEMBERS}`)
        } else if (response.status === 204) {
            dispatch(setError({detail: `Entered password doesn't match account password`}))
        }
    }

    return (
        <ModalExternalContainer
            setModalView={setShowConfirmation}
            showModalView={showConfirmation}
        >
            <Draggable>
                <AddDeleteModalInternalContainer>
                    <ModalClose modalDisplay={setShowConfirmation} />
                    <ModalTitle title='Remove Member(s)?' />
                    <RemoveMemberModalText />
                    <ModalInput
                        changeHandler={(e) => setPassword(e.target.value)}
                        error={error}
                        errorLocation={error.detail}
                        label='Password'
                        name='password'
                        placeholder='Enter your password to proceed'
                        type='password'
                        value={password}
                    />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={removeButtonHandler}
                        deleteText='Yes, remove member(s)'
                    />
                </AddDeleteModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default RemoveMemberModal
