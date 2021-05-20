import styled from 'styled-components/macro'
import {AddNewStepButton} from '../../style/buttons'
import {NoFilterResultsContainer, StatusLegendContainer} from '../../style/containers'
import {device as devices} from '../../style/devices'


export const NoStepsContainer = styled(NoFilterResultsContainer)`
`

export const NoStepsButton = styled(AddNewStepButton)`
    margin-top: 25px;

    :disabled {
        box-shadow: none;
        border: 1px solid ${props => props.theme.grayTwo};
        background: ${props => props.theme.grayTwo};
    }
`

export const StepStatusLegendContainer = styled(StatusLegendContainer)`
    width: 303px;
`

export const StepCardListContainer = styled.div`
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
