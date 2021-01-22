import styled from 'styled-components/macro'


export const AccessProjectListContainer = styled.div`
    width: 302px;
    height: 180px;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
`

export const AccessProjectListUpperContainer = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 59px 10px 13px;

    input {
        margin-right: 14px;
    }
`

export const AccessProjectListLowerContainer = styled.div`
    width: 100%;
    max-height: 140px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 20px;

    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.grayTwo};
    }
`

export const ProjectNameCheckboxContainer = styled.div`
    padding-left: 13px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    input {
        margin-right: 14px;
    }
`

export const AccessProjectLabel = styled.label`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    font-style: normal;
    font-weight: normal;
    color: ${props => props.theme.grayOne};

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }
`
