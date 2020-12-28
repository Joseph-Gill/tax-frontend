import React from 'react'
import styled from 'styled-components/macro'
import {NavbarTitle} from '../../../style/titles'

const DisplayToggleContainer = styled.div`
    display: flex;
    //flex-direction: column;
    align-items: center;
`

const DisplayToggleLabel = styled(NavbarTitle)`
    width: 120px;
`

const ToggleContainer = styled.label`
    position: relative;
    cursor: pointer;
    margin-top: 2px;

    input {
        appearance: none;
        display: none;

        :checked ~ i {
            left: 101px;

            ::before {
                content: 'Details'
            }
        }
    }

    span {
        position: relative;
        display: block;
        background: rgba(224, 224, 224, 0.5);
        box-shadow: inset 0 2px 4px rgba(44, 33, 120, 0.1), inset 0 1px 2px rgba(44, 33, 120, 0.1);
        border-radius: 8px;
        width: 222px;
        height: 40px;
    }

    i {
        position: absolute;
        top: 0;
        left: 0;
        width: 110px;
        height: 30px;
        background: ${props => props.theme.white};
        box-shadow: 0 1px 2px rgba(97, 97, 97, 0.1), 0 2px 4px rgba(97, 97, 97, 0.1);
        border-radius: 6px;
        margin: 5px 0 0 5px;
        transition: 0.5s;

        ::before {
            content: 'Chart';
            position: absolute;
            font-family: ${props => props.theme.nunitoFontFamily};
            font-weight: 600;
            font-size: 14px;
            line-height: 22px;
            color: ${props => props.theme.grayOne};
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: 0.5s;
        }
    }
`

const StepDisplayToggle = ({stepDetailStatus, setStepDetailStatus}) => {
    return (
        <DisplayToggleContainer>
            <ToggleContainer>
                <input
                    checked={stepDetailStatus}
                    onChange={() => setStepDetailStatus(!stepDetailStatus)}
                    type='checkbox'
                />
                <span />
                <i />
            </ToggleContainer>
        </DisplayToggleContainer>
    )
}

export default StepDisplayToggle
