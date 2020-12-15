import React, {useRef} from 'react'
import styled from 'styled-components/macro'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer, AddDeleteModalTitleContainer} from '../DeleteAccountModal/styles'
import {useSpring} from 'react-spring'
import {CloseIcon} from '../../style/images'
import close from '../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../style/titles'
import {ModalText} from '../../style/text'
import {ActiveInputLabel} from '../../style/labels'
import {BaseInput} from '../../style/inputs'
import {useDispatch} from 'react-redux'
import {AuthenticatedButtonCancel, BaseButton} from '../../style/buttons'
import {resetErrors} from '../../store/errors/actions/errorAction'


const BlueAddMemberButton = styled(BaseButton)`
    width: 125px;
    height: 32px;
    margin-left: 20px;
`

const AddMemberModalText = styled(ModalText)`
    margin-left: 19px;
`

const AddMemberModalButtonContainer = styled(AddDeleteModalButtonContainer)`
    display: flex;
    justify-content: flex-end;
`


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
            <AddDeleteModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowAddMember(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Add Team Member</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <AddMemberModalText>For a New User: They must complete their registration email, then they can be added to your Group from the Invited Members panel</AddMemberModalText>
                    <AddMemberModalText>For an Existing User: They will be added to your Group immediately</AddMemberModalText>
                    <AddMemberModalText>Once a user is added, you can assign projects by clicking on the User</AddMemberModalText>
                </div>
                <div>
                    <ActiveInputLabel>Email</ActiveInputLabel>
                    <BaseInput
                        name='email'
                        placeholder='Enter user email address'
                        ref={email}
                        type='email'
                    />
                </div>
                <AddMemberModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
                    <BlueAddMemberButton>Send Invite</BlueAddMemberButton>
                </AddMemberModalButtonContainer>
            </AddDeleteModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddMemberModal
