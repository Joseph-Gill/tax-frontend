import React from 'react'
import DateInput from '../../../../components/DateInput'
import {DateInputLabelText} from '../../../../style/text'
import {DateInputAddStepButtonContainer, DisabledDateInput, StepDisplayAddStepButton} from './styles'
import {notAbleToAddStep} from '../../../../helpers'
import TooltipAnchorText from '../../../../components/Tooltips/TooltipComponents/TooltipAnchorText'
import ReactTooltip from 'react-tooltip'


const StepDisplayTitleEffectiveDate = ({addNewStepHandler, date, editStatus, indexOfStepToDisplay, project, setDate, steps}) => {
    return (
        <DateInputAddStepButtonContainer>
            {editStatus ? (
                <DateInput
                    date={date}
                    indexOfStepToDisplay={indexOfStepToDisplay}
                    label
                    setDate={setDate}
                    steps={steps}
                />) : (
                    <>
                        <DateInputLabelText>Effective Date:</DateInputLabelText>
                        <DisabledDateInput
                            disabled
                            type='text'
                            value={steps[indexOfStepToDisplay].effective_date ? steps[indexOfStepToDisplay].effective_date : 'None'}
                        />
                    </>)}
            {indexOfStepToDisplay + 1 === steps.length && steps[indexOfStepToDisplay].id &&
                <div data-for='addStep' data-tip>
                    <StepDisplayAddStepButton
                        disabled={notAbleToAddStep(project)}
                        onClick={addNewStepHandler}
                    >
                        Add New Step
                    </StepDisplayAddStepButton>
                </div>}
            {notAbleToAddStep(project) &&
                <ReactTooltip
                    backgroundColor='#FFDB99'
                    effect="solid"
                    id='addStep'
                    place="bottom"
                >
                    <TooltipAnchorText
                        displayEllipse={false}
                        tooltipText='You can only add Steps to a project with status Ongoing'
                    />
                </ReactTooltip>}
        </DateInputAddStepButtonContainer>
    )
}

export default StepDisplayTitleEffectiveDate
