import React, {useState} from 'react'
import AddEntityLinkDropdown from '../../../../components/Dropdowns/AddEntityLinkDropdown'
import RemoveEntityLinkDropdown from '../../../../components/Dropdowns/RemoveEntityLinkDropdown'
import EditEntityLinkDropdown from '../../../../components/Dropdowns/EditEntityLinkDropdown'
import PredefinedStepDropdown from '../../../../components/Dropdowns/PredefinedStepDropdown'
import {StepChartButtonsContainer} from './styles'
import PredefinedToolTip from './PredefinedToolTip'

const StepChartButtons = ({currentStepEntities, indexOfStepToDisplay, setShowAddEntity, setShowAddLink,
                              setShowEditEntity, setShowEditLink, setShowPredefinedChangeLegalForm,
                              setShowPredefinedContribution, setShowPredefinedDistribution, setShowPredefinedIncorporate,
                              setShowPredefinedIntercompanySale, setShowPredefinedLiquidation, setShowPredefinedMerger,
                              setShowRemoveEntity, setShowRemoveLink, steps}) => {

    const [showAddDropdown, setShowAddDropdown] = useState(false)
    const [showRemoveDropdown, setShowRemoveDropdown] = useState(false)
    const [showEditDropdown, setShowEditDropdown] = useState(false)
    const [showPredefinedStepsDropdown, setShowPredefinedStepsDropdown] = useState(false)

    return (
        <StepChartButtonsContainer
            hide={!steps[indexOfStepToDisplay].id ? true : !currentStepEntities.length}
        >
            <PredefinedStepDropdown
                setShowPredefinedChangeLegalForm={setShowPredefinedChangeLegalForm}
                setShowPredefinedContribution={setShowPredefinedContribution}
                setShowPredefinedDistribution={setShowPredefinedDistribution}
                setShowPredefinedIncorporate={setShowPredefinedIncorporate}
                setShowPredefinedIntercompanySale={setShowPredefinedIntercompanySale}
                setShowPredefinedLiquidation={setShowPredefinedLiquidation}
                setShowPredefinedMerger={setShowPredefinedMerger}
                setShowPredefinedStepsDropdown={setShowPredefinedStepsDropdown}
                showPredefinedStepsDropdown={showPredefinedStepsDropdown}
            />
            <PredefinedToolTip anchorId='predefined' />
            <AddEntityLinkDropdown
                setShowAddDropdown={setShowAddDropdown}
                setShowAddEntity={setShowAddEntity}
                setShowAddLink={setShowAddLink}
                showAddDropdown={showAddDropdown}
                stepChart
            />
            <RemoveEntityLinkDropdown
                setShowRemoveDropdown={setShowRemoveDropdown}
                setShowRemoveEntity={setShowRemoveEntity}
                setShowRemoveLink={setShowRemoveLink}
                showRemoveDropdown={showRemoveDropdown}
                stepChart
            />
            <EditEntityLinkDropdown
                setShowEditDropdown={setShowEditDropdown}
                setShowEditEntity={setShowEditEntity}
                setShowEditLink={setShowEditLink}
                showEditDropdown={showEditDropdown}
                stepChart
            />
        </StepChartButtonsContainer>
    )
}

export default StepChartButtons
