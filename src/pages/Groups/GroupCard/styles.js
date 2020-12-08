import styled from 'styled-components/macro'
import {HomeGroupText, HomePageText} from '../../../style/text'


export const GroupCardContainer = styled.div`
    height: 245px;
    width: 256px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px 15px 18px 15px;
`

export const GroupCardInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

export const GroupCardTitleText = styled(HomePageText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
    margin-top: 16px;
`

export const GroupInfoText = styled(HomeGroupText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
`
