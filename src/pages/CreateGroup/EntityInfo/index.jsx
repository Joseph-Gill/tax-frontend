import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../../style/titles'


const InputEntityInfoContainer = styled.div`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: 20px;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    padding-top: 20px;
`

export const EntityTitle = styled(AuthenticatedPageSectionTitle)`
    width: 860px;
    margin-top: 0;
    padding-left: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${props => props.theme.entityTableBorderColor};
`

const EntityInfo = () => {
    return (
        <InputEntityInfoContainer>
            <EntityTitle>Entities</EntityTitle>
            test
        </InputEntityInfoContainer>
    )
}

export default EntityInfo
