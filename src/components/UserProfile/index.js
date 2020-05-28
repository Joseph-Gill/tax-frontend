import React, {useState} from 'react'
import UpdateUser from './EditUserProfile'
import {useDispatch, useSelector} from 'react-redux'
import {InfoLabel, UserDetailsContainer, UserInfoWrapper} from './styles'
import astronaut from '../../assets/icons/astronaut.svg'
import {BasePageContainer} from '../../style/containers'
import {DeleteButton, EditButton} from '../../style/buttons'
import {useHistory} from 'react-router-dom'
import {deleteUserProfile} from '../../store/user/actions/user/userAction'
import {EDITUSERPROFILE, LANDING_PAGE} from '../../routes/paths'


const UserProfile = () => {
    const [showEdit, setShowEdit] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.userLoginReducer.user)

    const deleteUserHandler = () => {
        dispatch(deleteUserProfile())
        history.push(LANDING_PAGE)
    }

    return <BasePageContainer>
        <UserDetailsContainer>
            <UserInfoWrapper>
                <img style={{width: '50px', height: '50px'}} src={!user.avatar ? astronaut : user.avatar} alt="user profile"/>
                <InfoLabel>
                    Email:
                    <p>{user.email}</p>
                </InfoLabel>
                <InfoLabel>
                    Username:
                    <p>{user.username}</p>
                </InfoLabel>
                <InfoLabel>
                    First Name:
                    <p>{user.first_name}</p>
                </InfoLabel>
                <InfoLabel>
                    Last Name:
                    <p>{user.last_name}</p>
                </InfoLabel>
                <InfoLabel>
                    Location:
                    <p>{user.location}</p>
                </InfoLabel>
                <InfoLabel>
                    Profile:
                    <p> Propulsion {user.is_admin ? 'administrator' : 'student'}</p>
                </InfoLabel>
            </UserInfoWrapper>
            <EditButton onClick={() => history.push(EDITUSERPROFILE)}>Edit</EditButton>
            <DeleteButton onClick={() => deleteUserHandler()}>Delete</DeleteButton>
            {showEdit && <UpdateUser setShowEdit={setShowEdit} showEdit={showEdit}/>}
        </UserDetailsContainer>
    </BasePageContainer>
}

export default UserProfile
