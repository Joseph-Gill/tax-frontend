import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {AuthenticatedPageTitleContainer} from '../../style/containers'


export const DisplayCardsContaner = styled.div`
    width: 860px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`

export const DisplayGroupTitleContainer = styled(AuthenticatedPageTitleContainer)`
    display: flex;
    justify-content: space-between;
`

export const EditGroupButton = styled(BaseButton)`
    width: 122px;
    height: 32px;
`
