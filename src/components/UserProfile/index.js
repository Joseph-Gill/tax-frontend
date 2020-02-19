import React, {useState} from 'react'
import UpdateUser from './UpdateUser'
import {BaseBackground} from '../../style/background'
import {connect} from 'react-redux'
import {UserProfileContainer, EditUserProfileButton, InfoLabel, UserDetailsContainer, UserInfoWrapper} from './styles'
import astronaut from '../../assets/icons/astronaut.svg'


const UserProfile = ({user}) => {
    const [showEdit, setShowEdit] = useState(false)
    return <UserProfileContainer>
        <BaseBackground/>
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
            <EditUserProfileButton onClick={() => setShowEdit(!showEdit)}>Edit</EditUserProfileButton>
            {showEdit && <UpdateUser setShowEdit={setShowEdit} showEdit={showEdit}/>}
        </UserDetailsContainer>
    </UserProfileContainer>

}

const mapStateToProps = ({userLoginReducer: {user}}) => ({
    user
})

export default connect(mapStateToProps)(UserProfile)
