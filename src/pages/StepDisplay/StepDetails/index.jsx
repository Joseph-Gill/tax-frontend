import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import {addNewTaxConsequence, getAllTaxConsequencesForStepAction} from '../../../store/taxConsequence/actions'
import Spinner from '../../../components/Spinner'
import TaxConsequenceCard from './TaxConsequnceCard'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import addConsequence from '../../../assets/icons/stark_add_country_consequence_icon.svg'
import save from '../../../assets/icons/stark_step_save_icon.svg'
import {NavbarTitle} from '../../../style/titles'
import {CardInfoText} from '../../../style/text'
import {
    DisplayStepButtonText,
    DisplayStepImage,
    DisplayStepImageButtonContainer, NewStepNoTaxConsequencesContainer, StepDescriptionTaxTitleContainer,
    StepDescriptionTitleContainer, StepDetailErrorContainer,
    StepDetailsContainer,
    StepInfoCancelButton,
    StepInfoDescriptionContainer,
    StepInfoSaveButton,
    StepInfoSaveImage,
    StepInfoTextArea, TaxConsequencesContainer
} from './styles'
import {ErrorMessage} from '../../../style/messages'
import {resetErrors} from '../../../store/errors/actions/errorAction'



const StepDetails = ({description, editStatus, saveNewStepHandler, setDescription, setEditStatus, step, updateExistingStepHandler}) => {
    const dispatch = useDispatch()
    const taxConsequences = useSelector(state => state.taxConsequenceReducer.taxConsequences)
    const loaded = useSelector(state => state.taxConsequenceReducer.loaded)
    const error = useSelector(state => state.errorReducer.error)

    useEffect(() => {
        if (step.id) {
            dispatch(getAllTaxConsequencesForStepAction(step.id))
        }
    }, [dispatch, step.id])

    const addNewTaxConsequenceHandler = () => {
        dispatch(addNewTaxConsequence())
    }


    const cancelEditStepHandler = () => {
        dispatch(resetErrors())
        setEditStatus(false)
        setDescription(step.description)
    }

    const renderTaxConsequences = React.useMemo(() => (
        taxConsequences.map(taxConsequence => (
            <TaxConsequenceCard
                key={uuidv4()}
                step={step}
                taxConsequence={taxConsequence}
            />
        ))
    ), [taxConsequences, step])

    return (
        <StepDetailsContainer>
            <StepDescriptionTitleContainer>
                <NavbarTitle>Step Description</NavbarTitle>
                {!editStatus ? (
                    <DisplayStepImageButtonContainer onClick={() => setEditStatus(true)}>
                        <DisplayStepImage alt='edit' src={pencil} />
                        <DisplayStepButtonText>Edit</DisplayStepButtonText>
                    </DisplayStepImageButtonContainer>) : (
                        <DisplayStepImageButtonContainer>
                            <StepInfoCancelButton onClick={cancelEditStepHandler}>Cancel</StepInfoCancelButton>
                            <DisplayStepImageButtonContainer>
                                <StepInfoSaveImage alt='save' src={save} />
                                {step.id ?
                                    <StepInfoSaveButton onClick={updateExistingStepHandler}>Save</StepInfoSaveButton> :
                                    <StepInfoSaveButton onClick={saveNewStepHandler}>Save</StepInfoSaveButton>}
                            </DisplayStepImageButtonContainer>
                        </DisplayStepImageButtonContainer>)}
            </StepDescriptionTitleContainer>
            {!editStatus ? (
                <StepInfoDescriptionContainer>
                    <CardInfoText>{step.description ? step.description : "No Step Description to display, please edit and enter a Step Description."}</CardInfoText>
                </StepInfoDescriptionContainer>) : (
                    <StepInfoTextArea
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Write your step description...'
                        value={description}
                    />)}
            <StepDetailErrorContainer>
                {error && <ErrorMessage>{error.description}</ErrorMessage>}
            </StepDetailErrorContainer>
            {step.id ? (
                <>
                    <StepDescriptionTaxTitleContainer>
                        <NavbarTitle>Tax Consequences</NavbarTitle>
                        <DisplayStepImageButtonContainer>
                            <DisplayStepImage alt='add country consequence' src={addConsequence} />
                            <DisplayStepButtonText onClick={addNewTaxConsequenceHandler}>Add Country Consequence</DisplayStepButtonText>
                        </DisplayStepImageButtonContainer>
                    </StepDescriptionTaxTitleContainer>
                    <TaxConsequencesContainer>
                        {!loaded ? <Spinner /> : renderTaxConsequences}
                    </TaxConsequencesContainer>
                </>) : (
                    <NewStepNoTaxConsequencesContainer>
                        <p>You must save your step before you</p>
                        <p>can add Tax Consequences.</p>
                    </NewStepNoTaxConsequencesContainer>)}
        </StepDetailsContainer>
    )
}

export default StepDetails