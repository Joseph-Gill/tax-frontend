import styled from 'styled-components/macro'


export const TeamMemberCardContainer = styled.div`
    display: flex;
`

export const TeamMemberCard = styled.div`
    width: 431px;
    height: 451px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h2 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 30px;
    }
`
