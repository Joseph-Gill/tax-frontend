import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {AddDeleteModalButtonContainer, AddDeleteModalInternalContainer} from '../DeleteAccountModal/styles'
import {ModalText} from '../../style/text'


export const BlueAddMemberButton = styled(BaseButton)`
    width: 125px;
    height: 32px;
    margin-left: 20px;
`

export const AddMemberModalButtonContainer = styled(AddDeleteModalButtonContainer)`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 16px;
`

export const AddTeamMemberModalContainer = styled(AddDeleteModalInternalContainer)`
    height: 467px;
    width: 370px;
    align-items: flex-start;
`

export const AddTeamMemberRedText = styled(ModalText)`
    color: ${props => props.theme.red};
    font-weight: 600;
    line-height: 19px;
    font-style: italic;
`

export const AddTeamMemberContentContainer = styled.div`
    margin-left: 19px;
`

export const AddMemberCenterTextContainer = styled.div`
    display: grid;
    grid-template-columns: 124px 1fr;
    grid-template-rows: 57px 1fr;
    grid-column-gap: 29px;
    grid-row-gap: 30px;
    margin-left: 19px;
`

export const AddMemberErrorMessageContainer = styled.div`
    height: 10px;
`
