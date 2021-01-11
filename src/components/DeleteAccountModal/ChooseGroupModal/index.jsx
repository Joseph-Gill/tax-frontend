import React, {useState} from 'react'
import {AddDeleteModalExternalContainer} from '../styles'
import {useSpring} from 'react-spring'
import {CloseIcon} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {useSelector} from 'react-redux'
import ModalGroupCard from './ModalGroupCard'
import {CancelButton} from '../../../style/buttons'
import {ChooseGroupButtonContainer, ChooseGroupCardContainer, ChooseGroupInput, ChooseGroupModalCloseContainer, ChooseGroupModalInternalContainer,
    ChooseGroupModalTitleContainer, ChooseGroupTitleContainer} from './styles'


const ChooseGroupModal = ({history, setShowChooseGroup}) => {
    const groups = useSelector(state => state.profileReducer.profile.groups)
    const [filterString, setFilterString] = useState('')

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const searchedGroups = groups.filter(group =>
        group.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)

    const renderGroups = () => (
        searchedGroups.map(group => (
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
            <ChooseGroupModalInternalContainer>
                <ChooseGroupModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowChooseGroup(false)} src={close} />
                </ChooseGroupModalCloseContainer>
                <ChooseGroupModalTitleContainer>
                    <AuthenticatedPageTitle>Choose a group</AuthenticatedPageTitle>
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
        </AddDeleteModalExternalContainer>
    )
}

export default ChooseGroupModal
