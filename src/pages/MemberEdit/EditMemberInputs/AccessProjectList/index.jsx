import React from 'react'
import {checkBoxChangeHandler} from '../../../../helpers'
import {CheckBox} from '../../../../style/inputs'
import {AccessProjectLabel, AccessProjectListContainer, AccessProjectListLowerContainer, AccessProjectListUpperContainer, ProjectNameCheckboxContainer} from './styles'


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
                    id={project.name}
                    onChange={(e) => checkBoxChangeHandler(e, allGroupProjects, setAllGroupProjects)}
                    type='checkbox'
                    value={index}
                />
                <AccessProjectLabel for={project.name}>{project.name}</AccessProjectLabel>
            </ProjectNameCheckboxContainer>)))

    return (
        <AccessProjectListContainer>
            <AccessProjectListUpperContainer>
                <CheckBox
                    checked={allProjectsChecked}
                    id='all'
                    onChange={checkAllProjectsChangeHandler}
                    type='checkbox'
                    value='all projects'
                />
                <AccessProjectLabel for='all'>Select / Unselect All</AccessProjectLabel>
            </AccessProjectListUpperContainer>
            <AccessProjectListLowerContainer>
                {renderProjectNameWithCheckBox()}
            </AccessProjectListLowerContainer>
        </AccessProjectListContainer>
    )
}

export default AccessProjectList
