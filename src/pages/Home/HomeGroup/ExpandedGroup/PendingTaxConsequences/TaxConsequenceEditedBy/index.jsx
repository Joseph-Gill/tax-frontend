import React, {useEffect, useState} from 'react'
import {EntryResponsibleText} from '../../../../../../style/text'
import {EntryResponsibleContainer} from '../../../../../../style/containers'
import {getRolesForProfileGroupAction} from '../../../../../../store/projectRole/actions'
import {useDispatch} from 'react-redux'
import Loading from '../../../../../../components/Loading'


const TaxConsequenceEditedBy = ({user, groupId}) => {
    const dispatch = useDispatch()
    const [userRole, setUserRole] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getRoleForUser = async () => {
            const response = await dispatch(getRolesForProfileGroupAction(user.user_profile.id, groupId))
            if (response) {
                setUserRole(response[0].role)
            }
        }
        setLoading(true)
        getRoleForUser()
            .then(() => setLoading(false))
    }, [dispatch, setLoading, user, groupId])

    return (
        <EntryResponsibleContainer>
            {loading ? <Loading /> : (
                <>
                    <EntryResponsibleText>{user.user_profile.country}</EntryResponsibleText>
                    <EntryResponsibleText>{userRole}</EntryResponsibleText>
                    <EntryResponsibleText>{`${user.first_name.charAt(0)}. ${user.last_name}`}</EntryResponsibleText>
                </>)}
        </EntryResponsibleContainer>
    )
}

export default TaxConsequenceEditedBy
