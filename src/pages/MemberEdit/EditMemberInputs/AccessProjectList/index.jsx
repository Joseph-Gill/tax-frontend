import React from 'react'
import styled from 'styled-components/macro'
import {CheckBox} from '../../../../style/inputs'
import {AuthenticatedText} from '../../../../style/text'

const AccessProjectListContainer = styled.div`
    width: 302px;
    height: 180px;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
`

const AccessProjectListUpperContainer = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 59px 10px 13px;
`

const AccessProjectListLowerContainer = styled.div`
    width: 100%;
    max-height: 140px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 20px;

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

const ProjectNameCheckboxContainer = styled.div`
    padding-left: 13px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    input {
        margin-right: 14px;
    }
`


const AccessProjectList = ({allGroupProjects, allProjectsChecked, setAllGroupProjects, setAllProjectsChecked}) => {
    const projectCheckBoxChangeHandler = (e) => {
        const dataCopy = [...allGroupProjects]
        dataCopy[e.target.value].isChecked = !dataCopy[e.target.value].isChecked
        setAllGroupProjects([...dataCopy])
    }

    const checkAllProjectsChangeHandler = () => {
        const dataCopy = [...allGroupProjects]
        dataCopy.forEach(project => {
            project.isChecked = !allProjectsChecked
        })
        setAllGroupProjects([...dataCopy])
        setAllProjectsChecked(!allProjectsChecked)
    }

    const renderProjectNameWithCheckBox = (array) => {
        return array.map((project, index) => (
            <ProjectNameCheckboxContainer key={project.id}>
                <CheckBox
                    checked={allGroupProjects[index].isChecked}
                    onChange={(e) => projectCheckBoxChangeHandler(e)}
                    type='checkbox'
                    value={index}
                />
                <AuthenticatedText>{project.name}</AuthenticatedText>
            </ProjectNameCheckboxContainer>
        ) )
    }

    return (
        <AccessProjectListContainer>
            <AccessProjectListUpperContainer>
                <CheckBox
                    checked={allProjectsChecked}
                    onChange={checkAllProjectsChangeHandler}
                    type='checkbox'
                    value='all projects'
                />
                <AuthenticatedText>Select all projects in the group</AuthenticatedText>
            </AccessProjectListUpperContainer>
            <AccessProjectListLowerContainer>
                {renderProjectNameWithCheckBox(allGroupProjects)}
            </AccessProjectListLowerContainer>
        </AccessProjectListContainer>
    )
}

export default AccessProjectList
