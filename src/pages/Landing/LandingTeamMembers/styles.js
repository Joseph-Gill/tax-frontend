import styled from 'styled-components/macro'


export const LandingTeamTitle = styled.span`
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: ${props => props.theme.white};
    margin-bottom: 50px;
`

export const LandingTeamMembersRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
`

export const TeamMemberCardContainer = styled.div`
    width: 484px;
    height: 507px;
    background: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
    border-radius: ${props => props.theme.borderRadius};
`

export const TeamMemberImage = styled.img`
    border-radius: 50%;
    height: 128px;
    width: 128px;
`

export const TeamMemberInfoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-family: ${props => props.theme.spartanFontFamily};
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
    }
`

export const TeamMemberNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 5px;
        margin-right: 10px;
    }

    img {
        :hover {
            cursor: pointer;
        }
    }
`
