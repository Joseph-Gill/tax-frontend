import styled from 'styled-components/macro'
import {AuthenticatedText} from '../../style/text'

export const UserDetailsContainer = styled.div`
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    width: 860px;
    height: 494px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    margin-top: 20px;
`

export const UserProfileInputContainer = styled.div`
    height: 196px;
    width: 800px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    display: grid;
    grid-template-columns: 332px 1fr;
    grid-template-rows: 65px 1fr 1fr;
    margin-top: 20px;
`

export const UserProfileInputContainerLower = styled.div`
    height: 72px;
    width: 800px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    display: grid;
    grid-template-columns: 332px 1fr;
    grid-template-rows: 42px 42px 1fr;
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
        transition: 167ms;
        text-decoration: underline;
    }
`

export const SaveChangesButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`

export const UserProfileInputErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserProfileErrorContainer = styled.div`
    height: 10px;
`
