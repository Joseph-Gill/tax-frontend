import React, {useState, useEffect} from 'react'
import {useSpring} from 'react-spring'
import Loading from '../../../components/Loading'
import ToggleFavorite from '../../../components/FavoriteToggle'
import {getGroupAction, toggleFavoriteGroupStatusAction} from '../../../store/group/actions'
import {GROUPS, MEMBERS, PROJECTS} from '../../../routes/paths'
import groupImagePH from '../../../assets/icons/stark_group_card_image_ph.png'
import {GoToGroupButton, GroupCardContainerV2, GroupCardLogo, GroupCardUpperContainer, GroupCardUpperLeftContainer,
    GroupName, GroupToggleContainer} from './styles'


const GroupCardV2 = ({group, groupsToDisplay, history, dispatch}) => {
    const [favoriteGroup, setFavoriteGroup] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setFavoriteGroup(group.user_favorite)
        setLoading(false)
    }, [group])

    //From react-spring, causes to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const toggleFavoriteClickHandler = async () => {
        const response = await dispatch(toggleFavoriteGroupStatusAction(group.id))
        if (response) {
            const targetGroupIndex = groupsToDisplay.findIndex(group => group.id === response.data.id)
            groupsToDisplay[targetGroupIndex].user_favorite = !groupsToDisplay[targetGroupIndex].user_favorite
            setFavoriteGroup(!favoriteGroup)
        }
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
            {loading ? <Loading /> : (
                <>
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
                </>
            )}
        </GroupCardContainerV2>
    )
}

export default GroupCardV2
