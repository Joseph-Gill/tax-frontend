import React from 'react'
import {AllTabBarContainer, BorderDisplay, DisplayTab, DisplayTabBar, DisplayTabTitle, FavoriteTabBarContainer, HomeTabBarContainer} from './styles'


const HomeProjectTabs = ({displayFavorites, setDisplayFavorites}) => {
    return (
        <HomeTabBarContainer>
            <DisplayTab
                displayFavorites={displayFavorites ? 1 : 0}
                onClick={() => setDisplayFavorites(!displayFavorites)}
            >
                <DisplayTabTitle>Favorite Projects</DisplayTabTitle>
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
                <DisplayTabTitle>All Projects</DisplayTabTitle>
                <AllTabBarContainer
                    displayFavorites={displayFavorites ? 0 : 1}
                >
                    <DisplayTabBar />
                </AllTabBarContainer>
            </DisplayTab>
            <BorderDisplay />
        </HomeTabBarContainer>
    )
}

export default HomeProjectTabs
