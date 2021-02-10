import styled from 'styled-components/macro'


export const MembersFilterSearchContainer = styled.div`
    width: 500px;
    height: 36px;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    background: ${props => props.theme.white};
    margin-left: 30px;
`
