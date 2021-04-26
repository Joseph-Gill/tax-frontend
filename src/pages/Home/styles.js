import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'

export const NoAccessContainer = styled.div`
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

export const ProjectAccessContainer = styled(NoAccessContainer)`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const HomeGroupListContainer = styled.div`
    margin-bottom: 42px;
    display: grid;
    grid-auto-rows: auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
    ${props => {
        if (props.numCards < 2) {
                return `grid-template-columns: repeat(${props.numCards}, 1fr)`
        } else {
                return 'grid-template-columns: repeat(2, 1fr)'
            }
        }
    };

    @media ${devices.laptopL} {
        ${props => {
            if (props.numCards < 3) {
                    return `grid-template-columns: repeat(${props.numCards}, 1fr)`
            } else {
                    return 'grid-template-columns: repeat(3, 1fr)'
                }
            }
        };
    }

    @media ${devices.desktop} {
        ${props => {
            if (props.numCards < 4) {
                    return `grid-template-columns: repeat(${props.numCards}, 1fr)`
            } else {
                    return 'grid-template-columns: repeat(4, 1fr)'
                }
            }
        };
    }
`
