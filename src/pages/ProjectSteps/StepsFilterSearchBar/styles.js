import styled from 'styled-components/macro'
import {BaseInput} from '../../../style/inputs'
import {DropdownContentContainer} from '../../../components/Dropdowns/styles'


export const StepsFilterSearchContainer = styled.div`
    width: 500px;
    height: 36px;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    background: ${props => props.theme.white};
`

export const StepFilterSearchButton = styled.div`
    width: 70px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: ${props => props.theme.inputBorderRadius};
    border-bottom-left-radius: ${props => props.theme.inputBorderRadius};
    background: ${props => props.theme.primaryBlue};
    color: ${props => props.theme.white};

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const StepFilterSearchText = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.white};
`

export const StepFilterLabelText = styled(StepFilterSearchText)`
    font-size: 10px;
`

export const StepFilterSearchInput = styled(BaseInput)`
    width: 260px;
    height: 34px;
    border: none;
    background: ${props => props.theme.white};
    padding: 10px 0 10px 10px;

    :hover {
        filter: none;
    }

    :focus {
        border: none;
    }
`

export const FilterDropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`

export const FilterDropdownContentContainer = styled(DropdownContentContainer)`
    width: 180px;
`

export const FilterSelectionContainer = styled.div`
    width: 75px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    background: ${props => props.theme.grayThree};
    border-radius: ${props => props.theme.buttonBorderRadius};
`
