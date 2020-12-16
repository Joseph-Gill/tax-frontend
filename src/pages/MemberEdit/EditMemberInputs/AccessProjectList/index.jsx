import React from 'react'
import {CheckBox} from '../../../../style/inputs'
import {AuthenticatedText} from '../../../../style/text'
import {AccessProjectListContainer, AccessProjectListLowerContainer, AccessProjectListUpperContainer, ProjectNameCheckboxContainer} from './styles'


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
