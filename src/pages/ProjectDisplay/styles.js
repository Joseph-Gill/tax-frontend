import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {AddEditProjectDescriptionContainer} from '../../style/containers'
import {AuthenticatedText} from '../../style/text'


export const ProjectDisplayInfoBoxesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 860px;
    margin-top: 20px;
`

export const ProjectDisplayInfoBox = styled.div`
    width: 226px;
    height: 174px;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const ProjectDisplayInfoBoxSmaller = styled(ProjectDisplayInfoBox)`
    width: 163px;
    justify-content: space-between;
`

export const ViewItemLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 7px;

    :hover {
        cursor: pointer;
    }
`

export const ViewItemLink = styled(Link)`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.primaryBlue};
    text-decoration: none;
    margin-right: 3.4px;
`

export const ProjectDisplayStatusesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 11px;
`

export const ProjectDisplayColorTextContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 9px;
`

export const ProjectDisplayColorText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    ${props => {
        if (props.status === 'Ongoing / Planned'){
            return `color: ${props.theme.yellowDark};`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `color: ${props.theme.greenDark};`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Started') {
            return `color: ${props.theme.redDark};`
            }
        }
    };
`

export const ProjectDisplayColorTextBackground = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-right: 10px;

    ${props => {
        if (props.status === 'Ongoing / Planned'){
            return `color: ${props.theme.yellowDark};`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `color: ${props.theme.greenDark};`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Started') {
            return `color: ${props.theme.redDark};`
            }
        }
    };

    ${props => {
        if (props.status === 'Ongoing / Planned'){
            return `background: ${props.theme.yellowLight};`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `background: ${props.theme.greenLight};`
            }
        }
    };

    ${props => {
        if (props.status === 'Not Started') {
            return `background: ${props.theme.redLight};`
            }
        }
    };
`

export const ProjectDisplayTitleDescriptionContainer = styled(AddEditProjectDescriptionContainer)`
    justify-content: flex-start;
`

export const ProjectDisplayDescriptionText = styled(AuthenticatedText)`
    margin-top: 10px;
`

export const ProjectDisplayTextContainer = styled.div`
    max-height: 284px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;

        ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.grayTwo};
    }
`
