import React from 'react'
import addGroup from '../../assets/icons/stark_add_group.svg'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AddNewGroupContainer, AllTabBarContainer, BorderDisplay, CreateGroupImage, CreateGroupText, CreateGroupTextContainer,
    DisplayTab, DisplayTabBar, DisplayTabTitle, FavoriteTabBarContainer, TabsBarContainer} from './styles'


const HomeGroupsTabs = ({componmentCalling, displayFavorites, history, setDisplayFavorites}) => {
    return (
        <TabsBarContainer>
            <DisplayTab
                displayFavorites={displayFavorites ? 1 : 0}
                onClick={() => setDisplayFavorites(!displayFavorites)}
            >
                <DisplayTabTitle>
                    {componmentCalling === 'Home' ? 'Favorite Projects' : 'Favorite Groups'}
                </DisplayTabTitle>
                <FavoriteTabBarContainer
                    displayFavorites={displayFavorites ? 1 : 0}
                >
                    <DisplayTabBar />
                </FavoriteTabBarContainer>
            </DisplayTab>
            <DisplayTab
                displayFavorites={displayFavorites ? 0 : 1}
                onClick={() => setDisplayFavorites(!displayFavorites)}
            >
                <DisplayTabTitle>
                    {componmentCalling === 'Home' ? 'All Projects' : 'All Groups'}
                </DisplayTabTitle>
                <AllTabBarContainer
                    displayFavorites={displayFavorites ? 0 : 1}
                >
                    <DisplayTabBar />
                </AllTabBarContainer>
            </DisplayTab>
            <BorderDisplay />
            {componmentCalling === 'Groups' &&
                <AddNewGroupContainer onClick={() => history.push(`${GROUPS}${ADD_GROUP}`)}>
                    <CreateGroupImage alt='create new group' src={addGroup} />
                    <CreateGroupTextContainer>
                        <CreateGroupText>Create</CreateGroupText>
                        <CreateGroupText>New Group</CreateGroupText>
                    </CreateGroupTextContainer>
                </AddNewGroupContainer>}
        </TabsBarContainer>
    )
}

export default HomeGroupsTabs
