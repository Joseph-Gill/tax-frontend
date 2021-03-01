import React, {useState, useEffect} from 'react'
import Draggable from 'react-draggable'
import ModalGroupCard from './ModalGroupCard'
import LogoLoading from '../../LogoLoading'
import ModalClose from '../ModalComponents/ModalClose'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {getProfileAction} from '../../../store/profile/actions'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {useDispatch, useSelector} from 'react-redux'
import {CancelButton} from '../../../style/buttons'
import {ChooseGroupButtonContainer, ChooseGroupCardContainer, ChooseGroupInput, ChooseGroupModalInternalContainer,
    ChooseGroupModalTitleContainer, ChooseGroupTitleContainer} from './styles'


//Used by NavBar for choosing which specific group the user is currently accessing
const ChooseGroupModal = ({history, showChooseGroup, setShowChooseGroup}) => {
    const dispatch = useDispatch()
    const groups = useSelector(state => state.profileReducer.profile.groups)
    const loaded = useSelector(state => state.profileReducer.loaded)
    const [filterString, setFilterString] = useState('')

    //If the user's profile is not loaded, gets the user's profile
    useEffect(() => {
        if (!loaded) {
            dispatch(getProfileAction())
        }
    }, [loaded, dispatch])

    //Used to filter the groups displayed by the modal by name of the group
    const searchedGroups = () => (
        groups.filter(group => group.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
    )

    const renderGroups = () => (
        searchedGroups().map(group => (
            <ModalGroupCard
                group={group}
                history={history}
                key={group.id}
                setShowChooseGroup={setShowChooseGroup}
            />
        ))
    )

    return (
        <ModalExternalContainer
            setModalView={setShowChooseGroup}
            showModalView={showChooseGroup}
        >
            {!loaded ?
                <LogoLoading /> :
                <Draggable>
                    <ChooseGroupModalInternalContainer>
                        <ModalClose modalDisplay={setShowChooseGroup} />
                        <ChooseGroupModalTitleContainer>
                            <AuthenticatedPageTitle>Choose a Group</AuthenticatedPageTitle>
                        </ChooseGroupModalTitleContainer>
                        <ChooseGroupTitleContainer>Group Name</ChooseGroupTitleContainer>
                        <ChooseGroupInput
                            onChange={(e) => setFilterString(e.target.value)}
                            placeholder='Search for groups'
                            type='text'
                            value={filterString}
                        />
                        <ChooseGroupCardContainer>
                            {renderGroups()}
                        </ChooseGroupCardContainer>
                        <ChooseGroupButtonContainer>
                            <CancelButton onClick={() => setShowChooseGroup(false)}>Cancel</CancelButton>
                        </ChooseGroupButtonContainer>
                    </ChooseGroupModalInternalContainer>
                </Draggable>}
        </ModalExternalContainer>
    )
}

export default ChooseGroupModal
