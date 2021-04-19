import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'


export const AddProjectButton = styled(BaseButton)`
    width: 168px;
    height: 32px;
`

export const ProjectCardListContainer = styled.div`
    width: 860px;
    margin: 30px 0 42px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
`
