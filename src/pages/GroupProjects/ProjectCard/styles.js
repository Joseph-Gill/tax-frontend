import styled from 'styled-components/macro'
import {CardTitleText} from '../../../style/text'
import {animated} from 'react-spring'


export const ProjectCardContainer = styled(animated.div)`
    width: 860px;
    height: 163px;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 30px;
    padding: 16px 16px 13px 16px;
    border: 1px solid ${props => props.theme.grayFour};

    ${props => {
        if (props.status === 'Ongoing' || props.status === 'Not Started' ){
            return `background: linear-gradient(0.10turn, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white},
                ${props.theme.white}, ${props.theme.white}, ${props.theme.yellowLight}, ${props.theme.yellow});`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `background: linear-gradient(0.10turn, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white},
                ${props.theme.white}, ${props.theme.white}, ${props.theme.greenBright}, ${props.theme.green});`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Implemented') {
            return `background: linear-gradient(0.10turn, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white},
                ${props.theme.white}, ${props.theme.white}, ${props.theme.redLight}, ${props.theme.red});`
            }
        }
    };

    :hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        transition: 167ms;
        border: 1px solid ${props => props.theme.primaryBlue};
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

export const ProjectNameTextContainer = styled.div`
    ${props => {
        if (props.status === 'Ongoing' || props.status === 'Not Started' ){
            return `border-bottom: 2px solid ${props.theme.yellow};`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `border-bottom: 2px solid ${props.theme.greenBright};`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Implemented') {
            return `border-bottom: 2px solid ${props.theme.red};`
            }
        }
    };
`
