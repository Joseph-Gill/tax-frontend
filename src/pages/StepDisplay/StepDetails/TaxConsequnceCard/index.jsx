import React, {useState, useEffect} from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import {CardInfoText} from '../../../../style/text'
import {
    GrayTaxConsequenceButton,
    NewTaxConsequenceText,
    TaxConsequenceButton,
    TaxConsequenceButtonContainer,
    TaxConsequenceContainer,
    TaxConsequenceCountryLabel,
    TaxConsequenceTextContainer,
    TaxConsequenceTextUsernameContainer,
    TaxConsequenceTitleContainer, TaxConsequenceUserDateText
} from './styles'


const TaxConsequenceCard = ({cancelNewTaxConsequenceHandler, taxConsequence}) => {
    const [editStatus, setEditStatus] = useState(false)
    const [countryName, setCountryName] = useState('')
    const [taxDescription, setTaxDescription] = useState('')

    useEffect(() => {
        if (!taxConsequence.id) {
            setEditStatus(true)
        }
        setTaxDescription(taxConsequence.description)
    })

    return (
        <TaxConsequenceContainer>
            <TaxConsequenceTitleContainer>
                {editStatus ?
                    <CountryDropdown
                        onChange={(val) => setCountryName(val)}
                         // eslint-disable-next-line react/forbid-component-props
                        style={{
                            width: '124px',
                            height: '19px',
                            fontSize: '10px',
                            lineHeight: '14px',
                            background: '#FFFFFF',
                            border: '1px solid #D3D8DD',
                            borderRadius: '4px',
                            fontFamily: 'Nunito Sans, sans-serif',
                            marginLeft: '15px',
                        }}
                        value={countryName}
                    /> :
                    <TaxConsequenceCountryLabel>{taxConsequence.location}</TaxConsequenceCountryLabel>}
                {editStatus ? (
                    <TaxConsequenceButtonContainer>
                        {taxConsequence.id ?
                            <GrayTaxConsequenceButton onClick={() => setEditStatus(false)}>Cancel</GrayTaxConsequenceButton> :
                            <GrayTaxConsequenceButton onClick={cancelNewTaxConsequenceHandler}>Cancel</GrayTaxConsequenceButton>}
                        <TaxConsequenceButton>Save</TaxConsequenceButton>
                    </TaxConsequenceButtonContainer>) : (
                        <TaxConsequenceButtonContainer>
                            <TaxConsequenceButton onClick={() => setEditStatus(true)}>Edit</TaxConsequenceButton>
                            <TaxConsequenceButton>Review</TaxConsequenceButton>
                        </TaxConsequenceButtonContainer>)}
            </TaxConsequenceTitleContainer>
            {editStatus ?
                <NewTaxConsequenceText
                    onChange={(e) => setTaxDescription(e.target.value)}
                    value={taxDescription}
                /> : (
                    <TaxConsequenceTextUsernameContainer>
                        <TaxConsequenceTextContainer>
                            <CardInfoText>{taxConsequence.description}</CardInfoText>
                        </TaxConsequenceTextContainer>
                        {taxConsequence.creating_user ?
                            <TaxConsequenceUserDateText>created by PH User on 01/09/20</TaxConsequenceUserDateText> : null}
                    </TaxConsequenceTextUsernameContainer>)}
        </TaxConsequenceContainer>
    )
}

export default TaxConsequenceCard
