import styled from 'styled-components/macro'


export const StepDisplayFooterContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: center;
    margin-top: 21px;
`

export const NodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BeginningNode = styled.div`
    width: 13px;
    height: 25px;
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 3px;
    background: ${props => props.theme.greenBright};

    :hover {
        cursor: pointer;
    };
`

export const EndingNode = styled(BeginningNode)`
    background: ${props => props.theme.grayFour};

    ${props => {
        if (props.endingActive) {
            return `background: ${props.theme.primaryBlue};`
            }
        }
    };
`

export const StepNode = styled(BeginningNode)`
    background: ${props => props.theme.grayFour};

    ${props => {
        if (props.isactive) {
            return `background: ${props.theme.primaryBlue};`
            }
        }
    };
`

export const StepDisplayText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
    position: absolute;
    margin-top: 30px;
`

export const BarNodeContainer = styled.div`
    display: flex;
    align-items: center;
`

export const BeginningEndingBar = styled.div`
    width: 57px;
    height: 4px;

    ${props => {
        if (props.type === 'beginning') {
            return `background: ${props.theme.greenBright};`
            }
        }
    };

    ${props => {
        if (props.type === 'ending') {
            return `background: ${props.theme.grayFour};`
            }
        }
    };
`

export const EndingLeftBar = styled.div`
    width: 102px;
    height: 4px;
    background: ${props => props.theme.grayFour};

    ${props => {
        if (props.endingActive) {
            return `background: ${props.theme.primaryBlue};`
            }
        }
    };
`

export const StepLeftBar = styled(EndingLeftBar)`
    ${props => {
        if (props.isactive) {
            return `background: ${props.theme.primaryBlue}`
            }
        }
    };
`
