import React, {useRef, useState} from 'react'
import UpdateUser from './EditUserProfile'
import {useSelector} from 'react-redux'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {useHistory} from 'react-router-dom'
import {EDITUSERPROFILE} from '../../routes/paths'
import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle, AuthenticatedPageTitle} from '../../style/titles'
import DeleteModal from './DeleteModal'
import {ActiveInputLabel} from '../../style/labels'
import {BaseInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import PhoneInput from "react-phone-input-2"
import {AuthenticatedText} from '../../style/text'
import {GreenLargeButton} from '../../style/buttons'
import {DeleteAccountText, SaveChangesButtonContainer, UserDetailsContainer, UserProfileFooterContainer, UserProfileInputContainer, UserProfileInputContainerLower} from './styles'

// FOR SOCIAL USE ONLY:
// import astronaut from '../../assets/icons/astronaut.svg'

const UserProfile = () => {
    const [showEdit, setShowEdit] = useState(false)
    const history = useHistory()
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const user = useSelector(state => state.userLoginReducer.user)
    const error = useSelector(state => state.errorReducer.error)
    const [profileInfo, setProfileInfo] = useState({...user})
    let password = useRef('')
    let password_repeat = useRef('')


    return (
        <AuthenticatedPageContainer>
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Profile</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <UserDetailsContainer>
                <AuthenticatedPageSectionTitle>Account Information</AuthenticatedPageSectionTitle>
                <UserProfileInputContainer>
                    <ActiveInputLabel>Firstname</ActiveInputLabel>
                    <div>
                        <BaseInput
                            name='first_name'
                            onChange={e => setProfileInfo({...profileInfo, first_name: e.target.value})}
                            placeholder='Enter your firstname'
                            type='text'
                            value={profileInfo.first_name}
                        />
                    </div>
                    <div>
                        <ActiveInputLabel>Lastname</ActiveInputLabel>
                        <BaseInput
                            name='last_name'
                            onChange={e => setProfileInfo({...profileInfo, last_name: e.target.value})}
                            placeholder='Enter your lastname'
                            type='text'
                            value={profileInfo.last_name}
                        />
                    </div>
                    <div>
                        <ActiveInputLabel>Email</ActiveInputLabel>
                        <BaseInput
                            name='email'
                            onChange={e => setProfileInfo({...profileInfo, email: e.target.value})}
                            placeholder='Enter your email'
                            type='text'
                            value={profileInfo.email}
                        />
                    </div>
                    <div>
                        <ActiveInputLabel>Phone</ActiveInputLabel>
                        <PhoneInput
                            country='ch'
                            inputClass='phoneInput'
                            inputStyle={{
                                background: '#FAFAFA',
                                height: '42px',
                                fontFamily: 'Nunito Sans, sans-serif',
                                fontSize: '14px'
                            }}
                            onChange={phone => setProfileInfo({...profileInfo, phone: phone})}
                            value={profileInfo.phone}
                        />
                    </div>
                </UserProfileInputContainer>
                <AuthenticatedPageSectionTitle>Change Password</AuthenticatedPageSectionTitle>
                <UserProfileInputContainerLower>
                    <div>
                        <ActiveInputLabel>Password</ActiveInputLabel>
                        <BaseInput
                            name='password'
                            placeholder='Enter your password'
                            ref={password}
                            type='password'
                        />
                    </div>
                    {error && <ErrorMessage>{error.password}</ErrorMessage>}
                    <div>
                        <ActiveInputLabel>Confirm Password</ActiveInputLabel>
                        <BaseInput
                            name='password_repeat'
                            placeholder='Retype your new password'
                            ref={password_repeat}
                            type='password'
                        />
                    </div>
                </UserProfileInputContainerLower>
                <AuthenticatedPageSectionTitle>Delete Account</AuthenticatedPageSectionTitle>
                <UserProfileFooterContainer>
                    <AuthenticatedText>By deleting your account you will lose all your data</AuthenticatedText>
                    <DeleteAccountText onClick={() => setShowDeleteConfirmation(true)}>Delete account</DeleteAccountText>
                </UserProfileFooterContainer>
                {showDeleteConfirmation && <DeleteModal setShowDeleteConfirmation={setShowDeleteConfirmation} />}
            </UserDetailsContainer>
            <SaveChangesButtonContainer>
                <GreenLargeButton>Save Changes</GreenLargeButton>
            </SaveChangesButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default UserProfile
