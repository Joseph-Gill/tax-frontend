import styled from 'styled-components/macro'


export const ComingSoonContainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 32px;
        font-weight: 600;
        line-height: 44px;
        color: ${props => props.theme.primaryBlue};
        margin-bottom: 32px;
    }
`

export const ComingSoonCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ComingSoonCard = styled.div`
    width: 570px;
    height: 214px;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.grayFour};
    box-shadow: ${props => props.theme.boxShadow};

    :hover {
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        transition: 167ms;
        border: 1px solid ${props => props.theme.primaryBlue};
    }
`

export const ComingSoonImageContainer = styled.div`
    width: 174px;
    height: 174px;
`

export const ComingSoonImage = styled.img`
    width: 174px;
    height: 174px;
`

export const ComingSoonCardTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 40px;

    h2 {
        margin-bottom: 12px;
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 22px;
        line-height: 28px;
        font-weight: 400;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 28px;
    }
`
