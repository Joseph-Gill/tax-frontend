import React, {useRef} from 'react'
import {useSpring} from 'react-spring'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalErrorContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer} from '../styles'
import {CloseIcon, Ellipse} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../style/text'
import {ActiveInputLabel} from '../../../style/labels'
import {BaseInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../style/buttons'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {removeMembersFromGroupAction} from '../../../store/member/actions'
import {GROUPS, MEMBERS} from '../../../routes/paths'
import {getGroupAction} from '../../../store/group/actions'


const RemoveMemberModal = ({activeMembers, group, history, invitedMembers, setShowConfirmation}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    let password = useRef('')

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

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
            password: password.current.value
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
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <AddDeleteModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Remove Member(s)?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>User will lose access to your group.</ModalText>
                    </AddDeleteModalTextContainer>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>User will lose access to all group projects.</ModalText>
                    </AddDeleteModalTextContainer>
                </div>
                <div>
                    <ActiveInputLabel>Password</ActiveInputLabel>
                    <BaseInput
                        name='password'
                        placeholder='Enter your password to proceed'
                        ref={password}
                        type='password'
                    />
                </div>
                <AddDeleteModalErrorContainer>
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                </AddDeleteModalErrorContainer>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton onClick={removeButtonHandler}>Yes, remove member(s)</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </AddDeleteModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default RemoveMemberModal