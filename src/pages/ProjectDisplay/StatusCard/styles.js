import styled from 'styled-components'


export const StatusBox = styled.div`
    width: 123px;
    height: 114px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius};

    ${props => {
        if (props.status === 'Ongoing' || props.status === 'Not Started' ){
            return `background: linear-gradient(0.90turn, ${props.theme.yellowLight}, ${props.theme.yellow}, ${props.theme.yellowDark});`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `background: linear-gradient(0.90turn, ${props.theme.greenBright}, ${props.theme.green}, ${props.theme.greenDark});`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Implemented') {
            return `background: linear-gradient(0.90turn, ${props.theme.redLight}, ${props.theme.red}, ${props.theme.redDark});`
            }
        }
    };
`
