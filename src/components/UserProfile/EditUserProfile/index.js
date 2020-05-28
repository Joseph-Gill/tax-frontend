import React, {useRef, useState, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton, CloseButton} from '../../../style/buttons'
import {BaseInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {useDropzone} from 'react-dropzone'
import astronaut from '../../../assets/icons/astronaut.svg'
import {userUpdateAction} from '../../../store/user/actions/user/userAction'
import {SubTitle} from '../../../style/titles'
import {USERPROFILE} from '../../../routes/paths'
import {useHistory} from 'react-router-dom'
import {ModalExternalContainer} from '../../../style/containers'
import {useResetErrors} from '../../../hooks'
import {EditProfileForm} from '../../../style/forms'
import {Avatar} from '../../../style/images'


const EditUserProfile = () => {
    let username = useRef('')
    let first_name = useRef('')
    let last_name = useRef('')
    let location = useRef('')
    const history = useHistory()
    const user = useSelector(state => state.userLoginReducer.user)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    let [avatar, setAvatar] = useState(null)
    let [avatarPreview, setAvatarPreview] = useState(null)
    useResetErrors()

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()
        reader.onloadend = () => {
            setAvatarPreview(reader.result)
        }
        reader.readAsDataURL(acceptedFiles[0])
        setAvatar(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    useEffect(() => {
        console.log(avatar, avatarPreview)
    }, [avatar, avatarPreview])

    const updateUser = async e => {
        e.preventDefault()
        const credentials = {
            username: username.current.value,
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            location: location.current.value,
            avatar: avatar,
        }
        console.log(credentials)

        let success = await dispatch(userUpdateAction(credentials))
        if(success) history.push(USERPROFILE)
    }

    return <ModalExternalContainer>
        <EditProfileForm>
            <CloseButton onClick={() => history.push(USERPROFILE)}>X</CloseButton>
            <Avatar src={avatarPreview || (!user.avatar ? astronaut : user.avatar)} alt="user avatar"/>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the Avatar here ...</p> :
                        <p>Upload or Drop Avatar</p>
                }
            </div>
            <SubTitle>Username:</SubTitle>
            <BaseInput
                type='text'
                name='username'
                placeholder='username'
                defaultValue={user.username}
                ref={username}
            />
            {error && <ErrorMessage>{error.username}</ErrorMessage>}
            <SubTitle>First Name:</SubTitle>
            <BaseInput
                type='text'
                name='first_name'
                placeholder='first name'
                defaultValue={user.first_name}
                ref={first_name}
            />
            {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
            <SubTitle>Last Name:</SubTitle>
            <BaseInput
                type='text'
                name='last_name'
                placeholder='last name'
                defaultValue={user.last_name}
                ref={last_name}
            />
            <SubTitle>Location:</SubTitle>
            <BaseInput
                type='text'
                name='location'
                placeholder='location'
                defaultValue={user.location}
                ref={location}
            />
            {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
            {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
            <BaseButton onClick={updateUser}>Update</BaseButton>
        </EditProfileForm>
    </ModalExternalContainer>
}


export default EditUserProfile
