import styled from 'styled-components/macro'
import {CardInfoText, CardTitleText} from '../../../style/text'


export const ProjectCardContainer = styled.div`
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

export const StatusText = styled(CardInfoText)`
    ${props => {
        if (props.status === 'Ongoing' || props.status === 'Not Started' ){
            return `color: ${props.theme.yellowDark};`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `color: ${props.theme.greenDark};`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Implemented') {
            return `color: ${props.theme.redDark};`
            }
        }
    };

`

export const ProjectCardNameText = styled(CardTitleText)`
    margin-top: 0;
`
