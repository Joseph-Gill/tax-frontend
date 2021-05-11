import React, {useState} from 'react'
import {useSpring} from 'react-spring'
import ToggleFavorite from '../../../components/FavoriteToggle'
import {getGroupAction} from '../../../store/group/actions'
import {GROUPS, MEMBERS, PROJECTS} from '../../../routes/paths'
import groupImagePH from '../../../assets/icons/stark_group_card_image_ph.png'
import {GoToGroupButton, GroupCardContainerV2, GroupCardLogo, GroupCardUpperContainer, GroupCardUpperLeftContainer,
    GroupName, GroupToggleContainer} from './styles'


const GroupCardV2 = ({group, history, dispatch}) => {
    const [favoriteGroup, setFavoriteGroup] = useState(false)

    //From react-spring, causes to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const toggleFavoriteClickHandler = async () => {
        // Needs logic to trigger toggle in backend and update local state
        setFavoriteGroup(!favoriteGroup)
    }

    const membersProjectsClickHandler = async (pushLocation) => {
        const response = await dispatch(getGroupAction(group.id))
        if (response) {
            history.push(pushLocation)
        }
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <GroupCardContainerV2 style={props}>
            <GroupCardUpperContainer>
                <GroupCardUpperLeftContainer>
                    <span
                        onClick={() => membersProjectsClickHandler(`${GROUPS}${MEMBERS}`)}
                    >
                        {group.users.length === 1 ? `${group.users.length} Member` : `${group.users.length} Members`}
                    </span>
                    <span
                        onClick={() => membersProjectsClickHandler(`${GROUPS}${PROJECTS}`)}
                    >
                        {group.projects.length === 1 ? `${group.projects.length} Project` : `${group.projects.length} Projects`}
                    </span>
                </GroupCardUpperLeftContainer>
                <GroupCardLogo alt='group logo' src={group.avatar ? group.avatar : groupImagePH} />
            </GroupCardUpperContainer>
            <GroupToggleContainer>
                <ToggleFavorite
                    favorite={favoriteGroup}
                    toggleFavoriteClickHandler={toggleFavoriteClickHandler}
                    tooltipText='Mark this as a favorite Group'
                />
                <GoToGroupButton onClick={() => history.push(`/groups/${group.id}/`)}>
                    Go to Group
                </GoToGroupButton>
            </GroupToggleContainer>
            <div>
                <GroupName onClick={() => history.push(`/groups/${group.id}/`)}>
                    {group.name}
                </GroupName>
            </div>
        </GroupCardContainerV2>
    )
}

export default GroupCardV2
