import React, {useState, useEffect} from 'react'
import {useSpring} from 'react-spring'
import ModalGroupCard from './ModalGroupCard'
import {getProfileAction} from '../../../store/profile/actions'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {useDispatch, useSelector} from 'react-redux'
import {CancelButton} from '../../../style/buttons'
import {AddDeleteModalExternalContainer} from '../styles'
import {ChooseGroupButtonContainer, ChooseGroupCardContainer, ChooseGroupInput, ChooseGroupModalCloseContainer, ChooseGroupModalInternalContainer,
    ChooseGroupModalTitleContainer, ChooseGroupTitleContainer} from './styles'
import Spinner from '../../Spinner'


const ChooseGroupModal = ({history, setShowChooseGroup}) => {
    const dispatch = useDispatch()
    const groups = useSelector(state => state.profileReducer.profile.groups)
    const loaded = useSelector(state => state.profileReducer.loaded)
    const [filterString, setFilterString] = useState('')

    useEffect(() => {
        if (!loaded) {
            dispatch(getProfileAction())
        }
    }, [loaded, dispatch])

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

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
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            {!loaded ?
                <Spinner /> :
                <ChooseGroupModalInternalContainer>
                    <ChooseGroupModalCloseContainer>
                        <CloseIcon alt='close' onClick={() => setShowChooseGroup(false)} src={close} />
                    </ChooseGroupModalCloseContainer>
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
                </ChooseGroupModalInternalContainer>}
        </AddDeleteModalExternalContainer>
    )
}

export default ChooseGroupModal
