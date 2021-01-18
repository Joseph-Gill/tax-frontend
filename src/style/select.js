import styled from 'styled-components/macro'


export const EntityLegalFormSelect = styled.select`
    width: ${props => props.callingComponent === 'AddEntityModal' ? '302px' : '157px'};
    height: ${props => props.callingComponent === 'AddEntityModal' ? '42px' : '34px'};
    margin: ${props => props.callingComponent === 'AddEntityModal' ? '0' : '17px 10px'};
    padding-left: ${props => props.callingComponent === 'AddEntityModal' ? '7px' : '0'};
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: ${props => props.callingComponent === 'AddEntityModal' ? '14px' : '10px'};
    line-height: ${props => props.callingComponent === 'AddEntityModal' ? '19px' : '16px'};
    color: ${props => props.theme.grayOne};

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 0.5s;
    }

    :focus {
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 1s;
    }
`

export const EntityParentSelect = styled(EntityLegalFormSelect)`
    width: ${props => props.callingComponent === 'AddEntityModal' ? '302px' : '98px'};
`
