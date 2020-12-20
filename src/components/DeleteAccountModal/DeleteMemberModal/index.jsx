import React, {useRef} from 'react'
import {useSpring} from 'react-spring'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer} from '../styles'
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
import {resetErrors} from '../../../store/errors/actions/errorAction'


const DeleteMemberModal = ({memberEmails, history, setShowConfirmation}) => {
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

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <AddDeleteModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Delete Member(s)?</AuthenticatedPageTitle>
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
                <div>
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                </div>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton >Yes, delete member(s)</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </AddDeleteModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteMemberModal
