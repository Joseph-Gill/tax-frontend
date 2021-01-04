import styled from 'styled-components/macro'
import {NavbarTitle} from '../../../style/titles'


export const StatusToggleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StatusToggleLabel = styled(NavbarTitle)`
    width: 90px;
`


export const ToggleContainer = styled.label`
    position: relative;
    cursor: pointer;
    margin-top: 2px;

    input {
        appearance: none;
        display: none;

        :checked ~ i {
            left: 71px;

            ::before {
                content: 'Invited'
            }
        }
    }

    span {
        position: relative;
        display: block;
        background: rgba(224, 224, 224, 0.5);
        box-shadow: inset 0 2px 4px rgba(44, 33, 120, 0.1), inset 0 1px 2px rgba(44, 33, 120, 0.1);
        border-radius: 8px;
        width: 150px;
        height: 40px;

        div {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            p {
                font-family: ${props => props.theme.nunitoFontFamily};
                font-weight: 600;
                font-size: 14px;
                line-height: 22px;
                color: ${props => props.theme.grayOne};
            }
        }
    }

    i {
        position: absolute;
        top: 0;
        left: 0;
        width: 69px;
        height: 30px;
        background: ${props => props.theme.white};
        box-shadow: 0 1px 2px rgba(97, 97, 97, 0.1), 0 2px 4px rgba(97, 97, 97, 0.1);
        border-radius: 6px;
        margin: 5px 0 0 5px;
        transition: 0.5s;

        ::before {
            content: 'Active';
            position: absolute;
            font-family: ${props => props.theme.nunitoFontFamily};
            font-weight: 600;
            font-size: 14px;
            line-height: 22px;
            font-style: normal;
            color: ${props => props.theme.grayOne};
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: 0.5s;
        }
    }
`
