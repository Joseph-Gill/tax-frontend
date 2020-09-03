import React from 'react'
import styled from 'styled-components/macro'
import {device as devices} from '../../../style/devices'
import {BaseButton} from '../../../style/buttons'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {deleteUserProfile} from '../../../store/user/actions/user/userAction'


const DeleteModalExternal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0,0,0,0.68);
 `

const DeleteModalInternal = styled.div`
  width: 40%;
  max-width: 650px;
  min-width: 450px;
  height: 22%;
  min-height: 180px;
  max-height: 200px;
  background: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  border-radius: 6px;
  margin-left: 200px;
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
  
  @media ${devices.mobileL} {
      width: 30%;
      max-width: 450px;
      min-width: 350px;
      max-height: 180px;
      min-height: 150px;
      margin: 0;
      padding: 6% 3%;
      div {
        width: 90%;
      }
   }
`


const DeleteModal = ({setShowDeleteConfirmation}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const deleteUserHandler = () => {
        dispatch(deleteUserProfile())
        dispatch(userLogout())
        history.push('/registration')
    }

    return (
        <DeleteModalExternal>
            <DeleteModalInternal>
                Are you sure to delete your account?
                <div>
                    <BaseButton onClick={() => setShowDeleteConfirmation(false)}>Cancel</BaseButton>
                    <BaseButton onClick={deleteUserHandler}>Delete</BaseButton>
                </div>
            </DeleteModalInternal>

        </DeleteModalExternal>
    )
}

export default DeleteModal
