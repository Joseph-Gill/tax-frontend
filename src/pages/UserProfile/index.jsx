import React, {useRef, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {AuthenticatedPageSectionTitle, AuthenticatedPageTitle} from '../../style/titles'
import {ActiveInputLabel} from '../../style/labels'
import {BaseInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import PhoneInput from "react-phone-input-2"
import {AuthenticatedText} from '../../style/text'
import {GreenLargeButton} from '../../style/buttons'
import {DeleteAccountText, SaveChangesButtonContainer, UserDetailsContainer, UserProfileFooterContainer, UserProfileInputContainer, UserProfileInputContainerLower, UserProfileInputErrorContainer} from './styles'
import BreadCrumb from '../../components/BreadCrumb'
import {getProfileAction, updateProfileAction} from '../../store/profile/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import SuccessMessage from '../../components/SuccessMessage'
import {HOME, USERPROFILE} from '../../routes/paths'
import {resetGroup} from '../../store/group/actions'
import {resetProject} from '../../store/project/actions'
import {CountryDropdown} from 'react-country-region-selector'
import Spinner from '../../components/Spinner'
import DeleteAccountModal from '../../components/Modals/DeleteAccountModal'


const UserProfile = ({history}) => {
    const dispatch = useDispatch()
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const profile = useSelector(state => state.profileReducer.profile)
    const loaded = useSelector(state => state.profileReducer.loaded)
    const [profileInfo, setProfileInfo] = useState({})
    let password = useRef('')
    let password_repeat = useRef('')

    useEffect(() => {
        const getProfileUpdateInfo = async () => {
            const response = await dispatch(getProfileAction())
            if (response) {
                setProfileInfo({
                    phone: response.phone_number,
                    email: response.user.email,
                    first_name: response.user.first_name,
                    last_name: response.user.last_name,
                    country: response.country
                })
            }
        }
        dispatch(resetGroup())
        dispatch(resetProject())
        if (!loaded) {
            getProfileUpdateInfo()
        } else {
            setProfileInfo({
                phone: profile.phone_number,
                email: profile.user.email,
                first_name: profile.user.first_name,
                last_name: profile.user.last_name,
                country: profile.country
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
            password: password.current.value,
            password_repeat: password_repeat.current.value
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
            {!loaded ? <Spinner /> : (
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
                            <ActiveInputLabel>Firstname</ActiveInputLabel>
                            <UserProfileInputErrorContainer>
                                <BaseInput
                                    name='first_name'
                                    onChange={e => setProfileInfo({...profileInfo, first_name: e.target.value})}
                                    placeholder='Enter your firstname'
                                    type='text'
                                    value={profileInfo.first_name}
                                />
                                {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
                            </UserProfileInputErrorContainer>
                            <UserProfileInputErrorContainer>
                                <ActiveInputLabel>Lastname</ActiveInputLabel>
                                <BaseInput
                                    name='last_name'
                                    onChange={e => setProfileInfo({...profileInfo, last_name: e.target.value})}
                                    placeholder='Enter your lastname'
                                    type='text'
                                    value={profileInfo.last_name}
                                />
                                {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
                            </UserProfileInputErrorContainer>
                            <UserProfileInputErrorContainer>
                                <ActiveInputLabel>Email</ActiveInputLabel>
                                <BaseInput
                                    name='email'
                                    onChange={e => setProfileInfo({...profileInfo, email: e.target.value})}
                                    placeholder='Enter your email'
                                    type='text'
                                    value={profileInfo.email}
                                />
                                {error && <ErrorMessage>{error.email}</ErrorMessage>}
                            </UserProfileInputErrorContainer>
                            <UserProfileInputErrorContainer>
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
                                {error && <ErrorMessage>{error.phone_number}</ErrorMessage>}
                            </UserProfileInputErrorContainer>
                            <UserProfileInputErrorContainer>
                                <ActiveInputLabel>Country</ActiveInputLabel>
                                <CountryDropdown
                                    onChange={(val) => setProfileInfo({...profileInfo, country: val})}
                                    // eslint-disable-next-line react/forbid-component-props
                                    style={{
                                        width: '302px',
                                        height: '42px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        lineHeight: '19px',
                                        background: '#FAFAFA',
                                        border: '1px solid #D3D8DD',
                                        borderRadius: '4px',
                                        fontFamily: 'Nunito Sans, sans-serif',
                                        paddingLeft: '7px',
                                    }}
                                    value={profileInfo.country}
                                />
                            </UserProfileInputErrorContainer>
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
