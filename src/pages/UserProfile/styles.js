import styled from 'styled-components/macro'
import {AuthenticatedText} from '../../style/text'

export const UserDetailsContainer = styled.div`
    box-shadow: 0 0 20px #EFEFEF;
    border-radius: ${props => props.theme.borderRadius};
    width: 860px;
    height: 494px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
`

export const UserProfileInputContainer = styled.div`
    height: 134px;
    width: 800px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    display: grid;
    grid-template-columns: 332px 1fr;
    grid-template-rows: 60px 1fr 1fr;
    margin-top: 20px;
`

export const UserProfileInputContainerLower = styled.div`
    height: 145px;
    width: 800px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    display: grid;
    grid-template-columns: 332px 1fr;
    grid-template-rows: 42px 1fr;
    margin-top: 20px;
`

export const UserProfileFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin-top: 10px;
`
export const DeleteAccountText = styled(AuthenticatedText)`
    color: ${props => props.theme.colorDelete};

    :hover {
      cursor: pointer;
    }
`

export const SaveChangesButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
`
