import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import AddMemberCenterText from './AddMemberCenterText'
import AddMemberRedText from './AddMemberRedText'
import AddMemberEmailInput from './AddMemberEmailInput'
import AddMemberButtons from './AddMemberButtons'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {addMemberToGroupAction} from '../../../store/member/actions'
import {AddDeleteModalExternalContainer} from '../styles'
import {AddTeamMemberModalContainer} from './styles'

//Used by GroupMembers and MemberEdit for adding new members to a group
const AddMemberModal = ({groupId, setShowAddMember}) => {
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

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowAddMember(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
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
        </AddDeleteModalExternalContainer>
    )
}

export default AddMemberModal
