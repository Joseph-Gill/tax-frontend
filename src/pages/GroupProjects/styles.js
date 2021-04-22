import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {device as devices} from '../../style/devices'


export const AddProjectButton = styled(BaseButton)`
    width: 168px;
    height: 32px;
`

export const ProjectCardListContainer = styled.div`
    margin: 30px 0 42px 0;
    display: grid;
    grid-auto-rows: auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
    ${props => {
        if (props.numCards < 3) {
                return `grid-template-columns: repeat(${props.numCards}, 1fr)`
        } else {
                return 'grid-template-columns: repeat(3, 1fr)'
            }
        }
    };

    @media ${devices.laptopL} {
        ${props => {
            if (props.numCards < 4) {
                    return `grid-template-columns: repeat(${props.numCards}, 1fr)`
            } else {
                    return 'grid-template-columns: repeat(4, 1fr)'
                }
            }
        };
    }

    @media ${devices.desktop} {
        ${props => {
            if (props.numCards < 5) {
                    return `grid-template-columns: repeat(${props.numCards}, 1fr)`
            } else {
                    return 'grid-template-columns: repeat(5, 1fr)'
                }
            }
        };
    }
`

