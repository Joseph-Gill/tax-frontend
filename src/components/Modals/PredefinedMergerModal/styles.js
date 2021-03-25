import styled from 'styled-components/macro'


export const CompleteMergerModalContainer = styled.div`
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    height: 410px;
    width: ${props => props.expanded ? '726px' : '363px'};
    transition: width 157ms;
    display: flex;
    margin-left: 200px;
`
