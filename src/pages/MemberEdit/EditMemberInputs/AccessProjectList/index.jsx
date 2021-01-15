import React from 'react'
import {checkBoxChangeHandler} from '../../../../helpers'
import {CheckBox} from '../../../../style/inputs'
import {AuthenticatedText} from '../../../../style/text'
import {AccessProjectListContainer, AccessProjectListLowerContainer, AccessProjectListUpperContainer, ProjectNameCheckboxContainer} from './styles'


const AccessProjectList = ({allGroupProjects, allProjectsChecked, setAllGroupProjects, setAllProjectsChecked}) => {
    const checkAllProjectsChangeHandler = () => {
        const dataCopy = [...allGroupProjects]
        dataCopy.forEach(project => {
            project.isChecked = !allProjectsChecked
        })
        setAllGroupProjects([...dataCopy])
        setAllProjectsChecked(!allProjectsChecked)
    }

    const renderProjectNameWithCheckBox = () => (
        allGroupProjects.map((project, index) => (
            <ProjectNameCheckboxContainer key={project.id}>
                <CheckBox
                    checked={allGroupProjects[index].isChecked}
                    onChange={(e) => checkBoxChangeHandler(e, allGroupProjects, setAllGroupProjects)}
                    type='checkbox'
                    value={index}
                />
                <AuthenticatedText>{project.name}</AuthenticatedText>
            </ProjectNameCheckboxContainer>)))

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
                {renderProjectNameWithCheckBox()}
            </AccessProjectListLowerContainer>
        </AccessProjectListContainer>
    )
}

export default AccessProjectList
