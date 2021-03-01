import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Draggable from 'react-draggable'
import ModalInput from '../ModalComponents/ModalInput'
import DeleteAccountModalText from './DeleteAccountModalText'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {deleteUserProfileAction} from '../../../store/user/actions/user/userAction'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {AddDeleteModalInternalContainer} from '../styles'


//Used by UserProfile for deleting a user's account
const DeleteAccountModal = ({history, setShowConfirmation, showConfirmation}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    const [password, setPassword] = useState('')

    const deleteUserHandler = async () => {
        dispatch(resetErrors())
        const currentPassword = {password}
        const response = await dispatch(deleteUserProfileAction(currentPassword))
        if (response.status === 200) {
            dispatch(userLogout())
            history.push('/registration')
        } else if (response.status === 204) {
            dispatch(setError({detail: `Entered password doesn't match account password`}))
        }
    }

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowConfirmation(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowConfirmation}
            showModalView={showConfirmation}
        >
            <Draggable>
                <AddDeleteModalInternalContainer>
                    <ModalClose modalDisplay={setShowConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <DeleteAccountModalText />
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
                        deleteButtonHandler={deleteUserHandler}
                        deleteText='Yes, delete account'
                    />
                </AddDeleteModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default DeleteAccountModal
