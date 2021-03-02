import React, {useState} from 'react'
import {StepChartButtonsContainer} from './styles'
import AddEntityLinkDropdown from '../../../../components/Dropdowns/AddEntityLinkDropdown'
import RemoveEntityLinkDropdown from '../../../../components/Dropdowns/RemoveEntityLinkDropdown'
import EditEntityLinkDropdown from '../../../../components/Dropdowns/EditEntityLinkDropdown'


const StepChartButtons = ({currentStepEntities, indexOfStepToDisplay, setShowAddEntity, setShowAddLink,
                              setShowEditEntity, setShowEditLink, setShowRemoveEntity, setShowRemoveLink, steps}) => {
    const [showAddDropdown, setShowAddDropdown] = useState(false)
    const [showRemoveDropdown, setShowRemoveDropdown] = useState(false)
    const [showEditDropdown, setShowEditDropdown] = useState(false)

    return (
        <StepChartButtonsContainer
            hide={!steps[indexOfStepToDisplay].id ? true : !currentStepEntities.length}
        >
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
