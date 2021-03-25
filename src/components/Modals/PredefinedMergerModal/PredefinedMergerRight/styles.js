import styled from 'styled-components/macro'


export const NewCompanyInfoContainer = styled.div`
    height: 410px;
    width: 370px;
    display: ${props => props.expanded ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15.41px 0 36px 0;
`

export const NewCompanyTitle = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 18px;
    font-weight: 800;
    text-decoration: underline;
`
