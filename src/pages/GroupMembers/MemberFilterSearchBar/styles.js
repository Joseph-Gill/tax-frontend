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

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
    }
`
