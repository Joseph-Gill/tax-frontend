import React from 'react'
import styled from 'styled-components/macro'
import {useHistory} from 'react-router-dom'
import {HomePageText} from '../../style/text'
import {AuthenticatedButtonLargest} from '../../style/buttons'
import {ADD_PROJECT, CREATEGROUP, GROUPS, PROJECTS} from '../../routes/paths'


const NoAccessContainer = styled.div`
    width: 860px;
    margin-top: 38px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    p {
    margin-bottom: 20px;
    }
`

const NoContentButton = styled(AuthenticatedButtonLargest)`
    ${props => {
        if (props.redirect === CREATEGROUP){
            return 'width: 144px;'
            }
        }
    };

    ${props => {
        if (props.redirect === `${GROUPS}${PROJECTS}${ADD_PROJECT}`){
            return 'width: 149px;'
            }
        }
    };
`


const NoContent = ({buttonText, redirect, text}) => {
    const history = useHistory()

    return (
        <NoAccessContainer>
            <HomePageText>{text}</HomePageText>
            <NoContentButton onClick={() => history.push(redirect)} redirect={redirect}>{buttonText}</NoContentButton>
        </NoAccessContainer>
    )
}

export default NoContent
