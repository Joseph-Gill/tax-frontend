import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../../style/titles'
import {TableButton} from '../../../style/buttons'
import {DateText} from '../../../style/text'


export const HomeViewMoreInternalContainer = styled.div`
    padding: 20px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ExpandedGroupContainer = styled.div`
    background: ${props => props.theme.grayFive};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: inset 0 2px 4px rgba(44, 33, 120, 0.1), inset 0 1px 2px rgba(44, 33, 120, 0.1);
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s; /* Firefox */
    -webkit-animation: fadein 0.5s; /* Safari and Chrome */
    -o-animation: fadein 0.5s; /* Opera */

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`

export const NextStepContainer = styled.div`
    height: 82px;
    width: 820px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    padding-left: 20px;
`

export const GroupSectionTitle = styled(AuthenticatedPageSectionTitle)`
    padding-top: 20px;
    margin-top: 0;
`

export const AccountInfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
    justify-content: space-between;
    margin-top: 10px;
`

export const CommentsContainer = styled.div`
    width: 820px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    padding-left: 20px;
`

export const TaskContainer = styled.div`
    width: 820px;
    padding-left: 20px;
    padding-bottom: 20px;
`

export const TaskButtonContainer = styled.div`
    width: 774px;
    display: flex;
    justify-content: flex-end;
`

export const TaskTableButton = styled(TableButton)`
    width: 115px;
    height: 26px;
`

export const StepDateTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const GroupExpandedDateText = styled(DateText)`
    margin-left: 4px;
`

export const ProjectStepsButton = styled(TableButton)`
    width: 140px;
`

export const TitleNextStepContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
`

export const NextStepTitle = styled.h2`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 10px;
    font-style: normal;
    font-weight: bold;
    line-height: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${props => props.theme.graySeven};
`

export const ViewMoreTitle = styled.h4`
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    color: ${props => props.theme.black};
    justify-self: flex-end;
    margin-right: 20px;
`

export const StepNumDateContainer = styled.div`
    display: flex;
`
