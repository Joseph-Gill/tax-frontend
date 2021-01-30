import styled from 'styled-components/macro'
import {ProjectDescriptionTextArea} from '../../../../style/textarea'


export const TaxConsequenceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.white};
    padding-top: 3px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
`

export const TaxConsequenceLocationErrorContainer = styled.div`
    height: 10px;
    margin-left: 15px;
`

export const TaxConsequenceDescriptionErrorContainer = styled.div`

`

export const TaxConsequenceTitleContainer = styled.div`
    width: 100%;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TaxConsequenceButtonContainer = styled.div`
    display: flex;
    margin-right: 15px;
`

export const TaxConsequenceButton = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.primaryBlue};
    margin-left: 20px;

    :hover {
        cursor: pointer;
    }
`

export const GrayTaxConsequenceButton = styled(TaxConsequenceButton)`
    color: ${props => props.theme.grayTwo};
`

export const TaxConsequenceTextUsernameContainer = styled.div`
    width: 100%;
    padding: 0 15px;
    margin-top: 10px;
`

export const TaxConsequenceTextContainer = styled.div`
    width: 100%;
    max-height: 75px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
`

export const NewTaxConsequenceText = styled(ProjectDescriptionTextArea)`
    height: 110px;
    width: 100%;
    border-style: none;
    border-color: transparent;
    background: ${props => props.theme.grayFive};
    vertical-align: top;
    padding: 7px;
    border-radius: 0;
`

export const TaxConsequenceUserDateText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.grayTwo};
    margin-top: 10px;
`

export const TaxConsequenceCountryLabel = styled.div`
    padding: 2px 6px;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.taxConsequenceLabelBlue};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.primaryBlue};
    margin-left: 15px;
`

export const GreenReviewedText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.green};

    :hover {
        cursor: pointer;
    }
`
