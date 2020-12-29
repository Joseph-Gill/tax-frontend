import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {CountryDropdown} from 'react-country-region-selector'
import {CardInfoText} from '../../../../style/text'
import {
    GrayTaxConsequenceButton, GreenReviewedText,
    NewTaxConsequenceText,
    TaxConsequenceButton,
    TaxConsequenceButtonContainer,
    TaxConsequenceContainer,
    TaxConsequenceCountryLabel,
    TaxConsequenceTextContainer,
    TaxConsequenceTextUsernameContainer,
    TaxConsequenceTitleContainer, TaxConsequenceUserDateText
} from './styles'
import {createNewTaxConsequenceAction, getAllTaxConsequencesForStepAction, updateTaxConsequenceAction} from '../../../../store/taxConsequence/actions'
import Spinner from '../../../../components/Spinner'


const TaxConsequenceCard = ({cancelNewTaxConsequenceHandler, step, taxConsequence}) => {
    const dispatch = useDispatch()
    const [editStatus, setEditStatus] = useState(false)
    const [countryName, setCountryName] = useState('')
    const [taxDescription, setTaxDescription] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!taxConsequence.id) {
            setEditStatus(true)
        }
        setTaxDescription(taxConsequence.description)
        setCountryName(taxConsequence.location)
    }, [taxConsequence.id, taxConsequence.description, taxConsequence.location])

    const saveNewTaxConsequenceHandler = async () => {
        setLoading(true)
        const newTaxConsequenceData = {
            location: countryName,
            description: taxDescription
        }
        const response = await dispatch(createNewTaxConsequenceAction(newTaxConsequenceData, step.id))
        if (response.status === 201) {
            const response = dispatch(getAllTaxConsequencesForStepAction(step.id))
            if (response) {
                setLoading(false)
            }
        }
    }

    const updateTaxConsequenceHandler = async () => {
        setLoading(true)
        const updatedTaxConsequenceData = {
            location: countryName,
            description: taxDescription
        }
        const response = await dispatch(updateTaxConsequenceAction(updatedTaxConsequenceData, taxConsequence.id))
        if (response.status === 200) {
            const response = dispatch(getAllTaxConsequencesForStepAction(step.id))
            if (response) {
                setLoading(false)
            }
        }
    }

    return (
        <TaxConsequenceContainer>
            {loading ? <Spinner /> : null}
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
                        {taxConsequence.id ? (
                            <>
                                <GrayTaxConsequenceButton onClick={() => setEditStatus(false)}>Cancel</GrayTaxConsequenceButton>
                                <TaxConsequenceButton onClick={updateTaxConsequenceHandler}>Save</TaxConsequenceButton>
                            </>) : (
                                <>
                                    <GrayTaxConsequenceButton onClick={cancelNewTaxConsequenceHandler}>Cancel</GrayTaxConsequenceButton>
                                    <TaxConsequenceButton onClick={saveNewTaxConsequenceHandler}>Save</TaxConsequenceButton>
                                </>)}
                    </TaxConsequenceButtonContainer>) : (
                        <TaxConsequenceButtonContainer>
                            {taxConsequence.reviewed ?
                                <GreenReviewedText>reviewed by {taxConsequence.reviewing_user.user.first_name} {taxConsequence.reviewing_user.user.last_name}</GreenReviewedText> : (
                                    <>
                                        <TaxConsequenceButton onClick={() => setEditStatus(true)}>Edit</TaxConsequenceButton>
                                        <TaxConsequenceButton>Review</TaxConsequenceButton>
                                    </>)}
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
                            <TaxConsequenceUserDateText>
                                created by {taxConsequence.creating_user.user.first_name} {taxConsequence.creating_user.user.last_name} on {taxConsequence.created.slice(0, 10)}
                            </TaxConsequenceUserDateText> : null}
                    </TaxConsequenceTextUsernameContainer>)}
        </TaxConsequenceContainer>
    )
}

export default TaxConsequenceCard
