import styled from 'styled-components/macro'
import {BaseButton} from '../../../style/buttons'
import {HomeGroupText} from '../../../style/text'


export const HomeGroupV2Container = styled.div`
    height: 255px;
    width: 415px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    box-shadow: 0 0 20px ${props => props.theme.boxShadowColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px;

    :hover {
        transition: 167ms;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};
    }
`

export const TitlesGroupImageContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const TitlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const GroupTitle = styled.h4`
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.black};
    margin-bottom: 20px;
`

export const ProjectTitle = styled(GroupTitle)`
    font-size: 12px;
    margin-bottom: 0;
`

export const GroupImage = styled.img`
    height: 56px;
    width: 56px;
    border-radius: 50%;
`

export const HomeGroupFavStatsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    border-bottom: 2px solid ${props => props.theme.grayFour};
    margin-bottom: 20px;
    padding-bottom: 20px;
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`

export const HomeGroupViewMoreProjectButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HomeGroupButton = styled(BaseButton)`
    height: 26px;
    width: 115px;
    font-size: 12px;
`

export const ViewMoreText = styled(HomeGroupText)`
    color: ${props => props.theme.primaryBlue};

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
