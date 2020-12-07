import React, {useRef} from 'react'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../style/buttons'
import close from '../../assets/icons/stark_close_icon.svg'
import ellipse from '../../assets/icons/stark_modal_ellipse.png'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userLogout} from '../../store/user/actions/authentication/userLoginAction'
import {deleteUserProfile} from '../../store/user/actions/user/userAction'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer} from './styles'
import {ModalText} from '../../style/text'
import {ActiveInputLabel} from '../../style/labels'
import {BaseInput} from '../../style/inputs'
import {CloseIcon, Ellipse} from '../../style/images'

const AddDeleteModal = ({setShowConfirmation}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    let password = useRef('')

    const deleteUserHandler = (password) => {
        const currentPassword = {password}
        console.log(currentPassword)
        // dispatch(deleteUserProfile())
        // dispatch(userLogout())
        // history.push('/registration')
    }

    return (
        <AddDeleteModalExternalContainer>
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
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton onClick={() => deleteUserHandler(password.current.value)}>Yes, delete account</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </AddDeleteModalInternalContainer>

        </AddDeleteModalExternalContainer>
    )
}

export default AddDeleteModal
