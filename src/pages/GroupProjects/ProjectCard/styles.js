import styled from 'styled-components/macro'
import {CardTitleText} from '../../../style/text'
import {animated} from 'react-spring'


export const ProjectCardContainer = styled(animated.div)`
    width: 860px;
    height: 163px;
    box-shadow: ${props => props.theme.projectCardBoxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 30px;
    padding: 16px 16px 13px 16px;

    ${props => {
        if (props.status === 'Ongoing' || props.status === 'Not Started' ){
            return `background: ${props.theme.yellowLight};`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `background: ${props.theme.greenLight};`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Implemented') {
            return `background: ${props.theme.redLight};`
            }
        }
    };

    :hover {
        cursor: pointer;
    }
`

export const ProjectCardNameStatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`

export const ProjectCardMembersContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    margin-top: 13px;
`

export const ProjectCardNameText = styled(CardTitleText)`
    margin-top: 0;
`
