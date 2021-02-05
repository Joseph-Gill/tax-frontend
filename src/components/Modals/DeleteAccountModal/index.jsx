import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import ModalInput from '../ModalComponents/ModalInput'
import DeleteAccountModalText from './DeleteAccountModalText'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {deleteUserProfileAction} from '../../../store/user/actions/user/userAction'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {AddDeleteModalExternalContainer, AddDeleteModalInternalContainer} from '../styles'


//Used by UserProfile for deleting a user's account
const DeleteAccountModal = ({history, setShowConfirmation}) => {
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

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
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
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteAccountModal
