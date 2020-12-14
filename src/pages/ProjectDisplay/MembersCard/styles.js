import styled from 'styled-components/macro'


export const MemberBox = styled.div`
    width: 123px;
    height: 62px;
    display: flex;
    //align-items: center;
    padding-left: 43px;
    padding-right: 42px;
    padding-top: 24.5px;
    background: ${props => props.theme.primaryBlueLight};
    border-radius: ${props => props.theme.borderRadius};
`

export const MemberText = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.primaryBlue};
`

export const MemberImage = styled.img`
    height: 14px;
    margin-right: 4.5px;
`
