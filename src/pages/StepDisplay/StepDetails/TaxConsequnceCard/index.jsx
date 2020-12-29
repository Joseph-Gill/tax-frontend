import React, {useState} from 'react'
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


const TaxConsequenceCard = () => {
    const [editStatus, setEditStatus] = useState(false)
    const [countryName, setCountryName] = useState('')
    const [taxDescription, setTaxDescription] = useState('')

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
                    <TaxConsequenceCountryLabel>United States</TaxConsequenceCountryLabel>}
                {editStatus ? (
                    <TaxConsequenceButtonContainer>
                        <GrayTaxConsequenceButton onClick={() => setEditStatus(false)}>Cancel</GrayTaxConsequenceButton>
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
                            <CardInfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada laoreet risus, ac condimentum mauris viverra in. Nullam ultricies, mi non pulvinar vestibulum, purus ligula cursus lectus, id eleifend arcu enim eu velit. Ut dapibus eleifend consectetur. Nam elit nisl, mollis ac diam non, semper hendrerit massa. Nam risus ipsum, eleifend quis urna vel, suscipit finibus ligula. Sed suscipit eros ipsum, a laoreet lorem posuere ac. Aliquam consectetur velit in mi mattis tempus. Nulla non elit ornare, feugiat nibh lobortis, imperdiet metus. Vestibulum vel diam ipsum. Mauris vehicula massa mauris. Pellentesque non quam sit amet diam tempus fringilla nec eu massa.</CardInfoText>
                        </TaxConsequenceTextContainer>
                        <TaxConsequenceUserDateText>created by PH User on 01/09/20</TaxConsequenceUserDateText>
                    </TaxConsequenceTextUsernameContainer>)}
        </TaxConsequenceContainer>
    )
}

export default TaxConsequenceCard
