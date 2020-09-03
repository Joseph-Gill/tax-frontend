import React, {useState} from 'react'
import UpdateUser from './EditUserProfile'
import {useDispatch, useSelector} from 'react-redux'
import {BasePageContainer} from '../../style/containers'
import {DeleteButton, EditButton} from '../../style/buttons'
import {useHistory} from 'react-router-dom'
import {deleteUserProfile} from '../../store/user/actions/user/userAction'
import {EDITUSERPROFILE, LOGIN} from '../../routes/paths'
import styled from 'styled-components/macro'
import {SubTitle, Title} from '../../style/titles'
import DeleteModal from './DeleteModal'

// FOR SOCIAL USE ONLY:
// import astronaut from '../../assets/icons/astronaut.svg'

const UserDetailsContainer = styled.div`
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    width: 500px;
    height: 500px;
    display: flex;
    margin-left: 200px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2%;
    background: white;
`

const UserProfile = () => {
    const [showEdit, setShowEdit] = useState(false)
    const history = useHistory()
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const user = useSelector(state => state.userLoginReducer.user)


    return (
        <BasePageContainer>
            <UserDetailsContainer>
                {/*SOCIAL USE ONLY*/}
                {/*<img style={{width: '50px', height: '50px'}} src={!user.avatar ? astronaut : user.avatar} alt="user profile"/>*/}
                <Title>Your Profile</Title>
                <SubTitle>Email:</SubTitle>
                <p>{user.email}</p>
                <SubTitle>Username:</SubTitle>
                <p>{user.username}</p>
                <SubTitle>First Name:</SubTitle>
                <p>{user.first_name}</p>
                <SubTitle>Last Name:</SubTitle>
                <p>{user.last_name}</p>
                {/*SOCIAL USE ONLY*/}
                {/*<SubTitle>Location:</SubTitle>*/}
                {/*<p>{user.location}</p>*/}
                <SubTitle>Profile Type:</SubTitle>
                <p> Propulsion {user.is_admin ? 'administrator' : 'student'}</p>
                <EditButton onClick={() => history.push(EDITUSERPROFILE)}>Edit</EditButton>
                <DeleteButton onClick={() => setShowDeleteConfirmation(true)}>Delete</DeleteButton>
                {showDeleteConfirmation && <DeleteModal setShowDeleteConfirmation={setShowDeleteConfirmation}/>}
                {showEdit && <UpdateUser
                    setShowEdit={setShowEdit}
                    showEdit={showEdit}
                             />}
            </UserDetailsContainer>
        </BasePageContainer>
    )
}

export default UserProfile
