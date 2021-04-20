import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {device as devices} from '../../style/devices'


export const AddProjectButton = styled(BaseButton)`
    width: 168px;
    height: 32px;
`

export const ProjectCardListContainer = styled.div`
    width: 860px;
    margin: 30px 0 42px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    @media ${devices.laptopL} {
        width: 1156px;
        grid-template-columns: repeat(4, 1fr)
    }

    @media ${devices.desktop} {
        width: 1452px;
        grid-template-columns: repeat(5, 1fr);

    }
`

