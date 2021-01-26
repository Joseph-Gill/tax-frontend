import React, {useEffect} from 'react'
import {checkBoxChangeHandler} from '../../../../helpers'
import {CheckBox} from '../../../../style/inputs'
import {AccessProjectLabel, AccessProjectListContainer, AccessProjectListLowerContainer, AccessProjectListUpperContainer, ProjectNameCheckboxContainer} from './styles'


const AccessProjectList = ({allGroupProjects, allProjectsChecked, setAllGroupProjects, setAllProjectsChecked}) => {
    useEffect(() => {
        setAllProjectsChecked(!allGroupProjects.filter(project => !project.isChecked).length)
    }, [allGroupProjects, setAllProjectsChecked])

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
                <AccessProjectLabel htmlFor={project.name}>{project.name}</AccessProjectLabel>
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
                <AccessProjectLabel htmlFor='all'>{allProjectsChecked ? 'Unselect All' : 'Select All'}</AccessProjectLabel>
            </AccessProjectListUpperContainer>
            <AccessProjectListLowerContainer>
                {renderProjectNameWithCheckBox()}
            </AccessProjectListLowerContainer>
        </AccessProjectListContainer>
    )
}

export default AccessProjectList
