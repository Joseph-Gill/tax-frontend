import styled from 'styled-components/macro'
import {DisplayTitleWithButtonContainer} from '../../style/containers'
import {BaseButton} from '../../style/buttons'


export const DisplayMembersTitleContainer = styled(DisplayTitleWithButtonContainer)`
    margin-top: 0;
`

export const ActionFilterDropdownContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`

export const AddMemberButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
`

export const AddMemberButton = styled(BaseButton)`
    width: 183px;
    margin-top: 40px;
`

export const MemberTableContainer = styled.div`
    width: 860px;
    height: 375px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
