import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../style/titles'
import {BaseInput} from '../../style/inputs'


export const InputGroupInfoContainer = styled.div`
    width: 860px;
    height: 100px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    padding: 20px 20px 20px 20px;
    display: flex;
    margin-top: 20px;
`

export const InputLeftContainer = styled.div`
    width: 285px;
    height: 100%;
    border-right: 1px solid ${props => props.theme.grayFour};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InputRightContainer = styled.div`
    height: 60px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InputTitle = styled(AuthenticatedPageSectionTitle)`
    margin-top: 0;
    width: 113px;
`

export const GroupNameInput = styled(BaseInput)`
    width: 503px;
    height: 38px;
`

export const GroupImage = styled.img`
    height: auto;
    width: 40px;


`

export const GroupImageLowerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 33px;

`

export const GroupInfoErrorMessageContainer = styled.div`
    height: 10px;
`

export const GroupIntoNameErrorContainer = styled.div`
    display: flex;
`
