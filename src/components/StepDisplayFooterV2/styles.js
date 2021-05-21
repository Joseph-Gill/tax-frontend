import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'


export const StepDisplayContainer = styled.div`
    max-width: 756px;
    overflow-x: auto;
    display: flex;
    scroll-behavior: smooth;

    @media ${devices.laptopL} {
        max-width: 1056px;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;

`

export const StepNode = styled.li`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
    list-style-type: none;
    width: 102px;
    position: relative;
    text-align: center;

    :before {
        content: '';
        width: 13px;
        height: 25px;
        border-radius: ${props => props.theme.borderRadius};
        background: ${props => props.isactive ? props.theme.primaryBlue : props.theme.grayFour};
        display: block;
        margin: 0 auto 3px auto;

        ${props => {
            if(props.beginningNode || props.iscomplete){
                return `background: ${props.theme.green};`
                }
            }
        };

        ${props => {
            if(props.endingNode && !props.iscomplete){
                return `background: ${props.theme.primaryBlue};`
                }
            }
        };
    }

    :after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${props => props.isactive ? props.theme.primaryBlue : props.theme.grayFour};
        top: 12.5px;
        left: -43.5%;

        ${props => {
            if(props.iscomplete){
                return `background: ${props.theme.green};`
                }
            }
        };

        ${props => {
            if(props.endingNode && !props.iscomplete){
                return `background: ${props.theme.primaryBlue};`
                }
            }
        };
    }

    :first-child:after {
        content: none;
    }

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }
`

export const StepDisplayProgressBar = styled.ul`
    display: flex;
`

export const StepProgressBarButtonContainer = styled.div`
    margin-top: 21px;
    height: 70px;
    width: 860px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media ${devices.laptopL} {
        width: 1160px;
    }
`
