import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import SuccessMessage from '../../components/SuccessMessage'
import DeleteAccountModal from '../../components/Modals/DeleteAccountModal'
import UserProfileTextInput from './UserProfileTextInput'
import UserProfilePhone from './UserProfilePhone'
import UserProfileCountry from './UserProfileCountry'
import LogoLoading from '../../components/LogoLoading'
import {resetGroup} from '../../store/group/actions'
import {resetProject} from '../../store/project/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {getProfileAction, updateProfileAction} from '../../store/profile/actions'
import {HOME, USERPROFILE} from '../../routes/paths'
import {ErrorMessage} from '../../style/messages'
import {AuthenticatedText} from '../../style/text'
import {GreenLargeButton} from '../../style/buttons'
import {AuthenticatedPageSectionTitle, AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {DeleteAccountText, SaveChangesButtonContainer, UserDetailsContainer, UserProfileFooterContainer, UserProfileInputContainer, UserProfileInputContainerLower} from './styles'


const UserProfile = ({history}) => {
    const dispatch = useDispatch()
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const profile = useSelector(state => state.profileReducer.profile)
    const loaded = useSelector(state => state.profileReducer.loaded)
    const [profileInfo, setProfileInfo] = useState({})

    useEffect(() => {
        const getProfileUpdateInfo = async () => {
            //Gets profile for logged in user and sets input values
            const response = await dispatch(getProfileAction())
            if (response) {
                setProfileInfo({
                    phone: response.phone_number,
                    email: response.user.email,
                    first_name: response.user.first_name,
                    last_name: response.user.last_name,
                    country: response.country,
                    password: '',
                    password_repeat: ''
                })
            }
        }
        //Resets group stored in redux state
        dispatch(resetGroup())
        //Resets project stored in redux state
        dispatch(resetProject())
        //Gets profile if not loaded due to page refresh
        if (!loaded) {
            getProfileUpdateInfo()
        } else {
            setProfileInfo({
                phone: profile.phone_number,
                email: profile.user.email,
                first_name: profile.user.first_name,
                last_name: profile.user.last_name,
                country: profile.country,
                password: '',
                password_repeat: ''
            })
        }
    }, [dispatch, loaded, profile])

    const handleSaveChanges = async () => {
        dispatch(resetErrors())
        const updatedInfo = {
            phone_number: profileInfo.phone,
            first_name: profileInfo.first_name,
            last_name: profileInfo.last_name,
            country: profileInfo.country,
            password: profileInfo.password,
            password_repeat: profileInfo.password_repeat
        }
        if (profileInfo.email !== profile.user.email) {
            updatedInfo.email = profileInfo.email
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
            {!loaded ? <LogoLoading /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'USER ACCOUNT', to: USERPROFILE, active: false}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Profile</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    <UserDetailsContainer>
                        <AuthenticatedPageSectionTitle>Account Information</AuthenticatedPageSectionTitle>
                        <UserProfileInputContainer>
                            <UserProfileTextInput
                                error={error}
                                label='Firstname'
                                name='first_name'
                                placeholder='Enter your firstname'
                                profileInfo={profileInfo}
                                setProfileInfo={setProfileInfo}
                                type='text'
                            />
                            <UserProfileTextInput
                                error={error}
                                label='Lastname'
                                name='last_name'
                                placeholder='Enter your lastname'
                                profileInfo={profileInfo}
                                setProfileInfo={setProfileInfo}
                                type='text'
                            />
                            <UserProfileTextInput
                                error={error}
                                label='Email'
                                name='email'
                                placeholder='Enter your email'
                                profileInfo={profileInfo}
                                setProfileInfo={setProfileInfo}
                                type='email'
                            />
                            <UserProfileCountry
                                profileInfo={profileInfo}
                                setProfileInfo={setProfileInfo}
                            />
                            <UserProfilePhone
                                error={error}
                                profileInfo={profileInfo}
                                setProfileInfo={setProfileInfo}
                            />
                        </UserProfileInputContainer>
                        <AuthenticatedPageSectionTitle>Change Password</AuthenticatedPageSectionTitle>
                        <UserProfileInputContainerLower>
                            <UserProfileTextInput
                                label='Password'
                                name='password'
                                placeholder='Enter your password'
                                profileInfo={profileInfo}
                                setProfileInfo={setProfileInfo}
                                type='password'
                            />
                            <UserProfileTextInput
                                label='Confirm Password'
                                name='password_repeat'
                                placeholder='Retype your new password'
                                profileInfo={profileInfo}
                                setProfileInfo={setProfileInfo}
                                type='password'
                            />
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
                        {showConfirmation &&
                            <DeleteAccountModal
                                history={history}
                                setShowConfirmation={setShowConfirmation}
                            />}
                    </UserDetailsContainer>
                    <SaveChangesButtonContainer>
                        <GreenLargeButton onClick={handleSaveChanges}>Save Changes</GreenLargeButton>
                    </SaveChangesButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default UserProfile
