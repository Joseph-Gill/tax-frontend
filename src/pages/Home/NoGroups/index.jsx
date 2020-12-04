import React from 'react'
import {HomePageText} from '../../../style/text'
import {AuthenticatedButtonLargest} from '../../../style/buttons'
import styled from 'styled-components/macro'

const HomeNoGroupContainer = styled.div`
  width: 860px;
  height: 545px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    margin-bottom: 20px;
  }
`

const NoGroups = () => {
    return (
        <HomeNoGroupContainer>
            <HomePageText>You have not created or been granted access to a group/project yet.</HomePageText>
            <AuthenticatedButtonLargest>Go to groups overview</AuthenticatedButtonLargest>
        </HomeNoGroupContainer>
    )
}

export default NoGroups
