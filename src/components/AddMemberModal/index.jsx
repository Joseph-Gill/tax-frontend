import React, {useRef} from 'react'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer} from '../DeleteAccountModal/styles'
import {useSpring} from 'react-spring'
import {CloseIcon} from '../../style/images'
import close from '../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../style/titles'
import {ModalText} from '../../style/text'
import {ActiveInputLabel} from '../../style/labels'
import {BaseInput} from '../../style/inputs'
import {useDispatch} from 'react-redux'
import {AuthenticatedButtonCancel} from '../../style/buttons'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {AddMemberCenterTextContainer, AddMemberModalButtonContainer, AddTeamMemberContentContainer, AddTeamMemberModalContainer, AddTeamMemberRedText, BlueAddMemberButton} from './styles'


const AddMemberModal = ({setShowAddMember}) => {
    let email = useRef('')
    const dispatch = useDispatch()

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
                </AddTeamMemberContentContainer>
                <AddMemberModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
                    <BlueAddMemberButton>Send Invite</BlueAddMemberButton>
                </AddMemberModalButtonContainer>
            </AddTeamMemberModalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddMemberModal
