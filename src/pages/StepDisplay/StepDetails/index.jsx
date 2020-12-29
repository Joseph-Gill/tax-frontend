import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import {addNewTaxConsequence, getAllTaxConsequencesForStepAction, resetStepTaxConsequences} from '../../../store/taxConsequence/actions'
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
    StepDescriptionTitleContainer,
    StepDetailsContainer,
    StepInfoCancelButton,
    StepInfoDescriptionContainer,
    StepInfoSaveButton,
    StepInfoSaveImage,
    StepInfoTextArea, TaxConsequencesContainer
} from './styles'



const StepDetails = ({description, editStatus, saveNewStepHandler, setDescription, setEditStatus, step, updateExistingStepHandler}) => {
    const dispatch = useDispatch()
    const taxConsequences = useSelector(state => state.taxConsequenceReducer.taxConsequences)
    const loaded = useSelector(state => state.taxConsequenceReducer.loaded)

    useEffect(() => {
        if (step.id) {
            dispatch(getAllTaxConsequencesForStepAction(step.id))
        }
    }, [dispatch, step.id])

    const addNewTaxConsequenceHandler = () => {
        dispatch(addNewTaxConsequence())
    }

    const cancelNewTaxConsequenceHandler = () => {
        dispatch(resetStepTaxConsequences())
        dispatch(getAllTaxConsequencesForStepAction(step.id))
    }

    const renderTaxConsequences = () => (
        taxConsequences.map(taxConsequence => (
            <TaxConsequenceCard
                cancelNewTaxConsequenceHandler={cancelNewTaxConsequenceHandler}
                key={uuidv4()}
                step={step}
                taxConsequence={taxConsequence}
            />
        ))
    )

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
                            <StepInfoCancelButton onClick={() => setEditStatus(false)}>Cancel</StepInfoCancelButton>
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
                        {!loaded ? <Spinner /> : renderTaxConsequences()}
                    </TaxConsequencesContainer>
                </>) : (
                    <NewStepNoTaxConsequencesContainer>
                        You must save your step before you can add Tax Consequences.
                    </NewStepNoTaxConsequencesContainer>)}
        </StepDetailsContainer>
    )
}

export default StepDetails
