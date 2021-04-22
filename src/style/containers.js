import styled from 'styled-components/macro'
import {CancelButton} from './buttons'
import {animated} from 'react-spring'
import {device as devices} from '../style/devices'


export const BasePageContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const AuthenticatedPageContainer = styled(BasePageContainer)`
    background-color: ${props => props.theme.grayFive};
    padding-left: 200px;
    justify-content: flex-start;
`

export const AuthenticatedPageTitleContainer = styled.div`
    width: 860px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    padding-bottom: 10px;
    margin-top: 28px;
`

export const LinkContainer = styled.div`
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    font-family: ${props => props.theme.nunitoFontFamily};
    margin-right: 10px;
`

export const LoginLogoContainer = styled.div`
    position: absolute;
    top: 23px;
    width: 50%;
    display: flex;
    justify-content: start;
`

export const GroupCommentTaskNumberContainer = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-right: 10px;
`

export const GroupCommentTaskContainer = styled.div`
    display: flex;
`

export const TableContainer = styled.div`
    min-height: 203.2px;
    max-height: 203.2px;
    overflow: scroll;
    overflow-x: hidden;
    width: 779px;
    margin-top: 11px;
    margin-bottom: 20px;
`

export const HomeExpandCollapseContainer = styled(animated.div)`
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: space-between;
    height: 26px;
    color: ${props => props.theme.primaryBlue};

    :hover {
        cursor: pointer;
        text-decoration: underline;
        transition: 167ms;
    }
`

export const DisplayTitleWithButtonContainer = styled(AuthenticatedPageTitleContainer)`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    align-items: flex-end;
    margin-top: 24px;
`

export const StepPageTitleWithButtonContainer = styled(DisplayTitleWithButtonContainer)`
    margin-top: 15px;
`

export const AddEditProjectNameStatusContainer = styled.div`
    width: 860px;
    height: 92px;
    margin-top: 30px;
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    display: flex;
    padding: 16px 16px 6px 16px;
`

export const AddEditProjectDescriptionContainer = styled(AddEditProjectNameStatusContainer)`
    width: 860px;
    height: 342px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid ${props => props.theme.grayFour};
    padding: 16px;

    @media ${devices.laptopL} {
        height: 592px;
    }
`

export const ProjectInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 30px;
`

export const ProjectSaveCancelButtonContainer = styled.div`
    width: 860px;
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;

    ${CancelButton} {
        margin-right: 13px;
    }
`

export const ErrorMessageContainer = styled.div`
    height: 10px;
`

export const EntityTitleContainer = styled.div`
    width: 860px;
    height: 44px;
    background: ${props => props.theme.white};
    margin-top: 20px;
    z-index: 1;
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AddEntityButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
`

export const CreateGroupCancelSaveContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    button:nth-child(1) {
        margin-right: 13px;
    }
`

export const DropdownChoiceContainer = styled.div`
    width: 100%;
    height: 42px;
    padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${props => props.theme.white};
`

export const DropDownChoiceWithBorder = styled(DropdownChoiceContainer)`
    border-bottom: 1px solid ${props => props.theme.grayFive};
`

export const ActionDropDownChoice = styled(DropdownChoiceContainer)`
    color: ${props => props.theme.red};

    :hover {
        cursor: pointer;
        text-decoration: underline;
        transition: 167ms;
    }
`

export const ActionDropdownChoiceWithBorder = styled(DropDownChoiceWithBorder)`
    color: ${props => props.theme.primaryBlue};

    :hover {
        cursor: pointer;
        text-decoration: underline;
        transition: 167ms;
    }
`

export const NoFilterResultsContainer = styled.div`
    width: 860px;
    height: 462px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NoFilterTextContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StatusEntryContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StatusLegendContainer = styled.div`
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 0 20px;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
`

export const TooltipRowContainer = styled.div`
    display: flex;
    align-items: center;
`

export const TaskInputsContainer = styled.div`
    width: 860px;
    height: 520px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    margin-top: 30px;
    padding: 20px 20px 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media ${devices.height1080p} {
        height: 620px
    }
`

export const TaskCancelSaveButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;

    button {
        margin-left: 20px;
    }
`

export const TaskInputRow = styled.div`
    display: flex;
    align-items: center;
`

export const TaskUpperLabelRow = styled(TaskInputRow)`
    align-items: flex-start;
    height: 160px;

    @media ${devices.height1080p} {
            height: 260px;
        }
`

export const TaskErrorContainer = styled.div`
    height: 10px;
    margin-left: 213px;
`

export const TaskLowerInputsContainer = styled.div`
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TaskLowerLeftContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DocumentContainer = styled.div`
    max-height: 110px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
`

export const EntryResponsibleContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const EntryDocumentsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const EntryDocumentsTextContainer = styled.div`
    width: 130px;
    max-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
`

export const NoTasksOrTaxConsequencesDisplay = styled.div`
    width: 100%;
    height: 202px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const EntityInfoSpaceContainer = styled.div`
    height: 315px;
`

export const EntityInfoErrorContainer = styled.div`
    margin-top: 5px;
    width: 860px;
    height: 10px;
    display: flex;
    justify-content: center;
`

export const NoFilteredTasksStepsContainer = styled.div`
    width: 860px;
    height: 202px;
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
`

export const NoChartToDisplay = styled.div`
    width: 860px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media ${devices.laptopL} {
        height: 750px;
        width: 1160px;
    }

    p {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        line-height: 19px;
        color: ${props => props.theme.grayTwo};
    }
`

export const GroupAddEditErrorContainer = styled.div`
    height: 26px;
    display: flex;
    align-items: center;
`

export const GroupAddEditButtonContainer = styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;
`

export const FilterResetImgContainer = styled.div`
    width: 13.5px;
    height: 36px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
    }
`

export const FilterImgContainer = styled.div`
    width: 16px;
    height: 36px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    :hover {
        cursor: pointer;
    }
`

export const ProjectAddEditInputTooltipContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const ProjectAddEditStatusInputContainer = styled(ProjectInputContainer)`
    margin-right: 0;
`

// Template Containers

// if needed to create an internal div in the modal
export const ModalInternalContainer = styled.div`
  width: 50%;
  height: 50%;
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: open 0.4s;
  @keyframes open {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 35%;
        opacity: 1;
      }
    }
`
