import styled from 'styled-components/macro'


export const InputLabel = styled.label`
    position: absolute;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16.37px;
    margin-left: 17px;
    margin-top: -8px;
    z-index: 1;
    padding-left: 4px;
    padding-right: 4px;
`

export const ActiveInputLabel = styled(InputLabel)`
    background: linear-gradient(#FFFFFF, ${props => props.theme.graySix});
`

export const EmailInputLabel = styled(InputLabel)`
    background: linear-gradient(#FFFFFF, #FFFFFF, #d4d4d4, ${props => props.theme.grayFour});
`

export const ModalInputLabel = styled(ActiveInputLabel)`
    margin-top: -40px;
`

export const FilterLabel = styled.label`
    position: absolute;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.primaryBlue};
    z-index: 1;
    margin-top: 8px;
    margin-left: 44px;
`
