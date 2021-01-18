import styled from 'styled-components/macro'
import {StatusDropdown} from '../../../style/dropdowns'
import {BaseInput} from '../../../style/inputs'


export const AddEntityTitle = styled.label`
    width: 70px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
`

export const AddEntityTitleInputContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const AddEntityTypeColorLabelDropdown = styled(StatusDropdown)`
    width: 125px;
`

export const AddEntityFromToDropdown = styled(StatusDropdown)`
    width: 225px;
`

export const AddEntityLabelInput = styled(BaseInput)`
  width: 200px;
`
