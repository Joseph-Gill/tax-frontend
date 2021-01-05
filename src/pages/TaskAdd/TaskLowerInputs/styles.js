import styled from 'styled-components/macro'


export const DocumentUploadAreaText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`

export const TaskLowerInputsContainer = styled.div`
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TaskLowerLeftContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TaskLowerRightContainer = styled.div`
    width: 285px;
    height: 130px;
    max-height: 130px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
