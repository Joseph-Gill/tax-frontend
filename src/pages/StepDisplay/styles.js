import styled from 'styled-components/macro'
import {NavbarTitle} from '../../style/titles'
import {device as devices} from '../../style/devices'

export const StepInfoText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
`

export const DisplayStepTitleContainer = styled.div`
    width: 100%;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DisplayStepSectionTitle = styled(NavbarTitle)`
    width: 113px;
`

export const DisabledDateLabelContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StepChartDetailsContainer = styled.div`
    width: 860px;
    height: 398px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.laptopL} {
        width: 1160px;
        height: 750px;
    }
`

export const StepDisplayErrorContainer = styled.div`
    width: 860px;
    height: 10px;
    display: flex;
    justify-content: flex-end;
`
