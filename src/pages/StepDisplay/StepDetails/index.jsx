import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import TaxConsequenceCard from './TaxConsequnceCard'
import EditorHTML from '../../../components/EditorHTML'
import LogoLoading from '../../../components/LogoLoading'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {decrementStepToView, removeNewStep} from '../../../store/step/actions'
import {addNewTaxConsequence, getAllTaxConsequencesForStepAction} from '../../../store/taxConsequence/actions'
import {createSanitizedMarkup} from '../../../helpers'
import pencil from '../../../assets/icons/stark_edit_pencil_icon.svg'
import addConsequence from '../../../assets/icons/stark_add_country_consequence_icon.svg'
import save from '../../../assets/icons/stark_step_save_icon.svg'
import {ErrorMessage} from '../../../style/messages'
import {StepDetailsTitle} from '../../../style/titles'
import {DisplayStepButtonText, DisplayStepImage, DisplayStepImageButtonContainer, NewStepNoTaxConsequencesContainer, StepDescriptionTaxTitleContainer,
    StepDescriptionTitleContainer, StepDetailErrorContainer, StepDetailsContainer, StepInfoCancelButton, StepInfoDescriptionContainer, StepInfoSaveButton,
    StepInfoSaveImage, TaxConsequencesContainer} from './styles'



const StepDetails = ({descriptionState, editStatus, saveNewStepHandler, setDescriptionState, setEditStatus, setStepStatus, step, steps, updateExistingStepHandler}) => {
    const dispatch = useDispatch()
    const taxConsequences = useSelector(state => state.taxConsequenceReducer.taxConsequences)
    const loaded = useSelector(state => state.taxConsequenceReducer.loaded)
    const error = useSelector(state => state.errorReducer.error)

    useEffect(() => {
        //If the step being displayed isn't from "Add New Step" it has an id
        //gets the tax consequences for the displayed step
        if (step.id) {
            dispatch(getAllTaxConsequencesForStepAction(step.id))
        }
    }, [dispatch, step.id])

    const addNewTaxConsequenceHandler = () => {
        dispatch(addNewTaxConsequence())
    }


    const cancelEditStepHandler = () => {
        dispatch(resetErrors())
        if (!step.id) {
            dispatch(decrementStepToView())
            dispatch(removeNewStep(steps.slice(0, -1)))
            setEditStatus(false)
        } else {
            setStepStatus(step.status)
            setEditStatus(false)
        }
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
                <StepDetailsTitle>Step Description</StepDetailsTitle>
                {!editStatus ? step.status === 'Completed' ? <div /> : (
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
            {!editStatus ?
                <StepInfoDescriptionContainer dangerouslySetInnerHTML={createSanitizedMarkup(step.description)} /> :
                <EditorHTML
                    componentCalling='StepDisplay'
                    editorState={descriptionState}
                    setEditorState={setDescriptionState}
                    textToLoad={step.description}
                />}
            <StepDetailErrorContainer>
                {error && <ErrorMessage>{error.description}</ErrorMessage>}
            </StepDetailErrorContainer>
            {step.id ? (
                <>
                    <StepDescriptionTaxTitleContainer>
                        <StepDetailsTitle>Tax Consequences</StepDetailsTitle>
                        <DisplayStepImageButtonContainer>
                            <DisplayStepImage alt='add country consequence' src={addConsequence} />
                            <DisplayStepButtonText onClick={addNewTaxConsequenceHandler}>Add Country Consequence</DisplayStepButtonText>
                        </DisplayStepImageButtonContainer>
                    </StepDescriptionTaxTitleContainer>
                    <TaxConsequencesContainer editStatus={editStatus ? 1 : 0}>
                        {!loaded ? <LogoLoading /> : renderTaxConsequences}
                    </TaxConsequencesContainer>
                </>) : (
                    <NewStepNoTaxConsequencesContainer>
                        <p>You must save your step before you can</p>
                        <p>add Tax Consequences or create a Chart.</p>
                    </NewStepNoTaxConsequencesContainer>)}
        </StepDetailsContainer>
    )
}

export default StepDetails
