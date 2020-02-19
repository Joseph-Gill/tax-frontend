import React, {useRef, useState, useCallback} from 'react'
import {connect} from 'react-redux'
import {BaseButton} from '../../../style/buttons'
import {BaseInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {EditUserContainerExternal, FormWrapper, EditProfileCloseButton, EditUserContainerInternal, ProfileInputTitle} from './styles'
import {useDropzone} from 'react-dropzone'
import astronaut from '../../../assets/icons/astronaut.svg'
import {userUpdateAction} from '../../../store/user/actions/user/userAction'


const UpdateUser = ({showEdit, setShowEdit, dispatch, error, user}) => {
    let username = useRef('')
    let first_name = useRef('')
    let last_name = useRef('')
    let location = useRef('')
    let [avatar, setAvatar] = useState(null)
    let [avatarPreview, setAvatarPreview] = useState(null)

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()
        reader.onloadend = () => {
            setAvatarPreview(reader.result)
        }
        reader.readAsDataURL(acceptedFiles[0])

        setAvatar(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const updateUser = async e => {
        e.preventDefault()
        const credentials = {
            username: username.current.value,
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            location: location.current.value,
            avatar: avatar,
        }

        let success = await dispatch(userUpdateAction(credentials))
        success && setShowEdit(!showEdit)
    }

    return <>
        <EditUserContainerExternal>
            <EditUserContainerInternal>
                <EditProfileCloseButton onClick={() => setShowEdit(!showEdit)}>X</EditProfileCloseButton>
                <FormWrapper>
                    <img style={{width: '50px', height: '50px'}} src={avatarPreview || (!user.avatar ? astronaut : user.avatar)} alt="user profile"/>

                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the Avatar here ...</p> :
                                <p>Upload or Drop Avatar</p>
                        }
                    </div>

                    <ProfileInputTitle>
                        Username: <br/>
                        <BaseInput
                            type='text'
                            name='username'
                            placeholder='username'
                            defaultValue={user.username}
                            ref={username}
                        />
                    </ProfileInputTitle>
                    {error && <ErrorMessage>{error.username}</ErrorMessage>}
                    <ProfileInputTitle>
                        First Name: <br/>
                        <BaseInput
                            type='text'
                            name='first_name'
                            placeholder='first name'
                            defaultValue={user.first_name}
                            ref={first_name}
                        />
                    </ProfileInputTitle>
                    {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
                    <ProfileInputTitle>
                        Last Name: <br/>
                        <BaseInput
                            type='text'
                            name='last_name'
                            placeholder='last name'
                            defaultValue={user.last_name}
                            ref={last_name}
                        />
                    </ProfileInputTitle>
                    <ProfileInputTitle>
                        Location: <br/>
                        <BaseInput
                            type='text'
                            name='location'
                            placeholder='location'
                            defaultValue={user.location}
                            ref={location}
                        />
                    </ProfileInputTitle>
                    {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
                    {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}

                    <BaseButton onClick={updateUser}>Update</BaseButton>
                </FormWrapper>
            </EditUserContainerInternal>
        </EditUserContainerExternal>
    </>
}

const mapStateToProps = ({userLoginReducer: {user}, errorReducer: {error}}) => ({
    user,
    error
})

export default connect(mapStateToProps)(UpdateUser)
