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
`
