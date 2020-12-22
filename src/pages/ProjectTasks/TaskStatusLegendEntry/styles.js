import styled from 'styled-components'


export const TaskStatusEntryColor = styled.div`
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin-right: 10px;

    ${props => {
        if (props.status === 'Ongoing / Planned') {
            return `
                    background: ${props.theme.yellow};
                    `
            }
        }
    };

    ${props => {
        if (props.status === 'Completed') {
            return `
                    background: ${props.theme.green};
                    `
            }
        }
    };

    ${props => {
        if (props.status === 'Not Started') {
            return `
                    background: ${props.theme.red};
                    `
            }
        }
    };
`
