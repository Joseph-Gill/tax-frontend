import styled from 'styled-components/macro'
import {BaseButton, TableButton} from '../../style/buttons'


export const AddEntityButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
`

export const EntityTitleContainer = styled.div`
    width: 860px;
    height: 44px;
    background: ${props => props.theme.white};
    margin-top: 20px;
    padding-top: 20px;
    z-index: 1;
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
    border-bottom: 1px solid ${props => props.theme.grayFour};
`

export const CreateGroupCancelSaveContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 64px;

    button:nth-child(1) {
        margin-right: 13px;
    }
`

export const AddEntityButton = styled(BaseButton)`
    width: 129px;
    height: 26px;
    font-size: 12px;
`

export const CreateGroupCancelButton = styled(TableButton)`
    height: 32px;
    width: 92px;
    color: ${props => props.theme.grayTwo};
    border: 1px solid ${props => props.theme.grayTwo};
`

export const CreateGroupSaveButton = styled(BaseButton)`
    height: 32px;
    width: 78px;
    background: ${props => props.theme.green};

    :hover {
        background: ${props => props.theme.greenDark};
    }
`
