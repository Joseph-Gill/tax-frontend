import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useSpring} from 'react-spring'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {addMemberToGroupAction} from '../../../store/member/actions'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {ModalText} from '../../../style/text'
import {ActiveInputLabel} from '../../../style/labels'
import {BaseInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer} from '../styles'
import {AddMemberCenterTextContainer, AddMemberErrorMessageContainer, AddMemberModalButtonContainer, AddTeamMemberContentContainer, AddTeamMemberModalContainer, AddTeamMemberRedText, BlueAddMemberButton} from './styles'

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
            <AddTeamMemberModalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowAddMember(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Add Team Member</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <AddMemberCenterTextContainer>
                    <ModalText>For a New User:</ModalText>
                    <ModalText>Must complete their registration email, to be added in a group.</ModalText>
                    <ModalText>For an Existing User:</ModalText>
                    <ModalText>Will be added to group immediately.</ModalText>
                </AddMemberCenterTextContainer>
                <AddTeamMemberContentContainer>
                    <AddTeamMemberRedText>Once user(s) added, you can assign projects by clicking on the user role.</AddTeamMemberRedText>
                </AddTeamMemberContentContainer>
                <AddTeamMemberContentContainer>
                    <ActiveInputLabel>Email</ActiveInputLabel>
                    <BaseInput
                        name='email'
                        placeholder='Enter user email address'
                        ref={email}
                        type='email'
                    />
                    <AddMemberErrorMessageContainer>
                        {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                        {error && <ErrorMessage>{error.email}</ErrorMessage>}
                    </AddMemberErrorMessageContainer>
                </AddTeamMemberContentContainer>
                <AddMemberModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
                    <BlueAddMemberButton onClick={addUserHandler}>Send Invite</BlueAddMemberButton>
                </AddMemberModalButtonContainer>
            </AddTeamMemberModalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddMemberModal
