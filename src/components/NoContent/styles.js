import styled from 'styled-components/macro'
import {AuthenticatedButtonLargest} from '../../style/buttons'
import {ADD_GROUP, ADD_PROJECT, GROUPS, PROJECTS} from '../../routes/paths'
import {animated} from 'react-spring'


export const NoAccessContainer = styled(animated.div)`
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

export const NoContentButton = styled(AuthenticatedButtonLargest)`
    ${props => {
        if (props.redirect === `${GROUPS}${ADD_GROUP}`){
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
