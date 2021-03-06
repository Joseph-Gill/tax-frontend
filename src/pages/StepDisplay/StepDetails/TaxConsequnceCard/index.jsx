import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CountryDropdown} from 'react-country-region-selector'
import {EditorState} from 'draft-js'
import Loading from '../../../../components/Loading'
import EditorHTML from '../../../../components/EditorHTML'
import SetReviewedModal from '../../../../components/Modals/SetReviewedModal'
import SetNotReviewedModal from '../../../../components/Modals/SetNotReviewedModal'
import {resetErrors} from '../../../../store/errors/actions/errorAction'
import {createNewTaxConsequenceAction, deleteTaxConsequenceAction, getAllTaxConsequencesForStepAction, resetStepTaxConsequences,
    setNotReviewedTaxConsequenceAction, setReviewedTaxConsequenceAction, updateTaxConsequenceAction} from '../../../../store/taxConsequence/actions'
import {convertContentToHTML, createSanitizedMarkup} from '../../../../helpers'
import {ErrorMessage} from '../../../../style/messages'
import {GrayTaxConsequenceButton, GreenReviewedText, RedTaxConsequenceButton, TaxConsequenceButton, TaxConsequenceButtonContainer,
    TaxConsequenceContainer, TaxConsequenceCountryLabel, TaxConsequenceDescriptionErrorContainer,
    TaxConsequenceLocationErrorContainer, TaxConsequenceTextContainer, TaxConsequenceTextUsernameContainer,
    TaxConsequenceTitleContainer, TaxConsequenceUserDateText} from './styles'
import DeleteTaxConsequenceModal from '../../../../components/Modals/DeleteTaxConsequenceModal'


const TaxConsequenceCard = ({step, taxConsequence}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    const [editStatus, setEditStatus] = useState(false)
    const [countryName, setCountryName] = useState('')
    const [descriptionState, setDescriptionState] = useState(() => EditorState.createEmpty())
    const [loading, setLoading] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showSecondConfirmation, setShowSecondConfirmation] = useState(false)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

    useEffect(() => {
        if (!taxConsequence.id) {
            setEditStatus(true)
        }
        setCountryName(taxConsequence.location)
    }, [taxConsequence])

    const saveNewTaxConsequenceHandler = async () => {
        dispatch(resetErrors())
        setLoading(true)
        const newTaxConsequenceData = {
            location: countryName,
            description: convertContentToHTML(descriptionState)
        }
        const response = await dispatch(createNewTaxConsequenceAction(newTaxConsequenceData, step.id))
        if (response.status === 201) {
            const response = dispatch(getAllTaxConsequencesForStepAction(step.id))
            if (response) {
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }

    const updateTaxConsequenceHandler = async () => {
        dispatch(resetErrors())
        setLoading(true)
        const updatedTaxConsequenceData = {
            location: countryName,
            description: convertContentToHTML(descriptionState)
        }
        const response = await dispatch(updateTaxConsequenceAction(updatedTaxConsequenceData, taxConsequence.id))
        if (response.status === 200) {
            const response = dispatch(getAllTaxConsequencesForStepAction(step.id))
            if (response) {
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }

    const cancelNewTaxConsequenceHandler = () => {
        dispatch(resetErrors())
        dispatch(resetStepTaxConsequences())
        dispatch(getAllTaxConsequencesForStepAction(step.id))
    }

    const setReviewedHandler = async () => {
        setLoading(true)
        const response = await dispatch(setReviewedTaxConsequenceAction(taxConsequence.id))
        if (response.status === 200) {
            const response = dispatch(getAllTaxConsequencesForStepAction(step.id))
            if (response) {
                setLoading(false)
            }
        }
    }

    const setNotReviewedHandler = async () => {
        setLoading(true)
        const response = await dispatch(setNotReviewedTaxConsequenceAction(taxConsequence.id))
        if (response.status === 200) {
            const response = dispatch(getAllTaxConsequencesForStepAction(step.id))
            if (response) {
                setLoading(false)
            }
        }
    }

    const deleteTaxConsequenceHandler = async () => {
        setLoading(true)
        const response = await dispatch(deleteTaxConsequenceAction(taxConsequence.id))
        if (response.status === 204) {
            const response = dispatch(getAllTaxConsequencesForStepAction(step.id))
            if (response) {
                setLoading(false)
            }
        }
    }

    return (
        <TaxConsequenceContainer>
            {showConfirmation &&
                <SetReviewedModal
                    setReviewedHandler={setReviewedHandler}
                    setShowConfirmation={setShowConfirmation}
                    showConfirmation={showConfirmation}
                />}
            {showSecondConfirmation &&
                <SetNotReviewedModal
                    setNotReviewedHandler={setNotReviewedHandler}
                    setShowSecondConfirmation={setShowSecondConfirmation}
                    showSecondConfirmation={showSecondConfirmation}
                />}
            {showDeleteConfirmation &&
                <DeleteTaxConsequenceModal
                    deleteTaxConsequenceHandler={deleteTaxConsequenceHandler}
                    setShowDeleteConfirmation={setShowDeleteConfirmation}
                    showDeleteConfirmation={showDeleteConfirmation}
                />}
            {loading ? <Loading /> : (
                <>
                    <TaxConsequenceLocationErrorContainer>
                        {error && editStatus && <ErrorMessage>{error.location}</ErrorMessage>}
                    </TaxConsequenceLocationErrorContainer>
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
                        <TaxConsequenceDescriptionErrorContainer>
                            {error && editStatus && <ErrorMessage>{error.tax_description}</ErrorMessage>}
                        </TaxConsequenceDescriptionErrorContainer>
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
                                        <GreenReviewedText onClick={() => setShowSecondConfirmation(true)}>
                                            {taxConsequence.reviewing_user ?
                                                `reviewed by ${taxConsequence.reviewing_user.user.first_name} ${taxConsequence.reviewing_user.user.last_name}` :
                                                `reviewed by N/A`}
                                        </GreenReviewedText> : (
                                            <>
                                                <TaxConsequenceButton onClick={() => setEditStatus(true)}>Edit</TaxConsequenceButton>
                                                <TaxConsequenceButton onClick={() => setShowConfirmation(true)}>Review</TaxConsequenceButton>
                                                <RedTaxConsequenceButton onClick={() => setShowDeleteConfirmation(true)}>Delete</RedTaxConsequenceButton>
                                            </>)}
                                </TaxConsequenceButtonContainer>)}
                    </TaxConsequenceTitleContainer>
                    {editStatus ?
                        <EditorHTML
                            componentCalling='TaxConsequenceCard'
                            editorState={descriptionState}
                            setEditorState={setDescriptionState}
                            textToLoad={taxConsequence.description}
                        /> : (
                            <TaxConsequenceTextUsernameContainer>
                                <TaxConsequenceTextContainer dangerouslySetInnerHTML={createSanitizedMarkup(taxConsequence.description)} />
                                {taxConsequence.editing_user ?
                                    <TaxConsequenceUserDateText>
                                        edited by {taxConsequence.editing_user.user.first_name} {taxConsequence.editing_user.user.last_name} on {taxConsequence.updated.slice(0, 10)}
                                    </TaxConsequenceUserDateText> :
                                    taxConsequence.creating_user ?
                                        <TaxConsequenceUserDateText>
                                            created by {taxConsequence.creating_user.user.first_name} {taxConsequence.creating_user.user.last_name} on {taxConsequence.created.slice(0, 10)}
                                        </TaxConsequenceUserDateText> : null}
                            </TaxConsequenceTextUsernameContainer>)}
                </>)}
        </TaxConsequenceContainer>
    )
}

export default TaxConsequenceCard
