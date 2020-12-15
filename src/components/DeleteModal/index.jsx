import React, {useRef} from 'react'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../style/buttons'
import close from '../../assets/icons/stark_close_icon.svg'
import ellipse from '../../assets/icons/stark_modal_ellipse.png'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userLogout} from '../../store/user/actions/authentication/userLoginAction'
import {deleteUserProfile} from '../../store/user/actions/user/userAction'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer} from './styles'
import {ModalText} from '../../style/text'
import {ActiveInputLabel} from '../../style/labels'
import {BaseInput} from '../../style/inputs'
import {CloseIcon, Ellipse} from '../../style/images'
import {ErrorMessage} from '../../style/messages'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {useSpring} from 'react-spring'


const DeleteModal = ({setShowConfirmation}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const error = useSelector(state => state.errorReducer.error)
    let password = useRef('')

    const deleteUserHandler = async (password) => {
        dispatch(resetErrors())
        const currentPassword = {password}
        const response = await dispatch(deleteUserProfile(currentPassword))
        if (response.status === 204){
            dispatch(userLogout())
            history.push('/registration')
        }
    }

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowConfirmation(false)
    }

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <AddDeleteModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Are you sure?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>Your access to all groups will be deleted</ModalText>
                    </AddDeleteModalTextContainer>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>Your access to all projects will be deleted</ModalText>
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
                    <RedLargerButton onClick={() => deleteUserHandler(password.current.value)}>Yes, delete account</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </AddDeleteModalInternalContainer>

        </AddDeleteModalExternalContainer>
    )
}

export default DeleteModal
