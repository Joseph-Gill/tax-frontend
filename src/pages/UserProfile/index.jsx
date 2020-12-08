import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {AuthenticatedPageSectionTitle, AuthenticatedPageTitle} from '../../style/titles'
import AddDeleteModal from '../../components/AddDeleteModal'
import {ActiveInputLabel} from '../../style/labels'
import {BaseInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import PhoneInput from "react-phone-input-2"
import {AuthenticatedText} from '../../style/text'
import {GreenLargeButton} from '../../style/buttons'
import {DeleteAccountText, SaveChangesButtonContainer, UserDetailsContainer, UserProfileFooterContainer, UserProfileInputContainer, UserProfileInputContainerLower} from './styles'
import BreadCrumb from '../../components/BreadCrumb'
import {updateProfileAction} from '../../store/profile/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import SuccessMessage from '../../components/SuccessMessage'
import {HOME} from '../../routes/paths'


const UserProfile = () => {
    const dispatch = useDispatch()
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const profile = useSelector(state => state.profileReducer.profile)
    const [profileInfo, setProfileInfo] = useState({
        phone: profile.phone_number,
        email: profile.user.email,
        first_name: profile.user.first_name,
        last_name: profile.user.last_name
    })
    let password = useRef('')
    let password_repeat = useRef('')

    const handleSaveChanges = async () => {
        dispatch(resetErrors())
        const updatedInfo = {
            phone_number: profileInfo.phone,
            email: profileInfo.email,
            first_name: profileInfo.first_name,
            last_name: profileInfo.last_name,
            password: password.current.value,
            password_repeat: password_repeat.current.value
        }
        const response = await dispatch(updateProfileAction(updatedInfo))
        if (response.status === 200) {
            setShowSuccess(!showSuccess)
        }
    }

    return (
        <AuthenticatedPageContainer>
            {showSuccess && <SuccessMessage
                message="Your profile has been successfully updated!"
                redirect={HOME}
                            />}
            <BreadCrumb breadCrumbArray={[{'USER ACCOUNT': '/userprofile'}]} />
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
                    {error && <ErrorMessage>{error.email}</ErrorMessage>}
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
                    <div>
                        <ActiveInputLabel>Confirm Password</ActiveInputLabel>
                        <BaseInput
                            name='password_repeat'
                            placeholder='Retype your new password'
                            ref={password_repeat}
                            type='password'
                        />
                    </div>
                    <div>
                        {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                        {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                    </div>
                </UserProfileInputContainerLower>
                <AuthenticatedPageSectionTitle>Delete Account</AuthenticatedPageSectionTitle>
                <UserProfileFooterContainer>
                    <AuthenticatedText>By deleting your account you will lose all your data</AuthenticatedText>
                    <DeleteAccountText onClick={() => setShowConfirmation(true)}>Delete account</DeleteAccountText>
                </UserProfileFooterContainer>
                {showConfirmation && <AddDeleteModal setShowConfirmation={setShowConfirmation} />}
            </UserDetailsContainer>
            <SaveChangesButtonContainer>
                <GreenLargeButton onClick={handleSaveChanges}>Save Changes</GreenLargeButton>
            </SaveChangesButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default UserProfile
