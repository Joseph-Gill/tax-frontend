import React from 'react'
import styled from 'styled-components/macro'


const StatusEntryContainer = styled.div`
    display: flex;
    align-items: center;
`

const StatusEntryText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.grayTwo};
`

const StatusEntryColor = styled.div`
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

const StatusLegendEntry = ({status}) => {
    return (
        <StatusEntryContainer>
            <StatusEntryColor status={status} />
            <StatusEntryText>{status}</StatusEntryText>
        </StatusEntryContainer>
    )
}

export default StatusLegendEntry
