import React from 'react'
import styled from 'styled-components/macro'

const DisplayStepFooterContainer = styled.div`
    width: 860px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BeginningNodeContainer = styled.div`
    width: 13px;
    height: 25px;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.greenBright};
`


const DisplayStepFooter = ({steps}) => {
    return (
        <DisplayStepFooterContainer>
            <BeginningNodeContainer />
        </DisplayStepFooterContainer>
    )
}

export default DisplayStepFooter
