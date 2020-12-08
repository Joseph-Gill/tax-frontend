import styled from 'styled-components/macro'


export const CreateGroupCardContainer = styled.div`
    width: 256px;
    height: 182px;
    background: ${props => props.theme.grayFive};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CreateGroupTextContainer = styled.div`
    width: 116px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 19px;
`

export const CreateGroupImage = styled.img`
    margin-top: 39px;
`

export const CreateGroupText = styled.p`
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: ${props => props.theme.grayTwo};
`
