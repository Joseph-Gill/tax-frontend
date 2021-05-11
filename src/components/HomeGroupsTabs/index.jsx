import React from 'react'
import {AllTabBarContainer, BorderDisplay, DisplayTab, DisplayTabBar, DisplayTabTitle, FavoriteTabBarContainer, TabsBarContainer} from './styles'


const HomeGroupsTabs = ({componmentCalling, displayFavorites, setDisplayFavorites}) => {
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
        </TabsBarContainer>
    )
}

export default HomeGroupsTabs
