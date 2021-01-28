import React, {useEffect} from 'react'
import {checkBoxChangeHandler} from '../../../../helpers'
import {CustomCheckbox} from '../../../../style/checkbox'
import {AccessProjectRoleLabel} from '../../../../style/labels'
import {AccessProjectListContainer, AccessProjectListLowerContainer, AccessProjectListUpperContainer,
    ProjectNameCheckboxContainer} from './styles'


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
                <CustomCheckbox>
                    <input
                        checked={allGroupProjects[index].isChecked}
                        id={project.name}
                        onChange={(e) => checkBoxChangeHandler(e, allGroupProjects, setAllGroupProjects)}
                        type='checkbox'
                        value={index}
                    />
                    <span className='checkmark' />
                    <AccessProjectRoleLabel htmlFor={project.name}>{project.name}</AccessProjectRoleLabel>
                </CustomCheckbox>
            </ProjectNameCheckboxContainer>)))

    return (
        <AccessProjectListContainer>
            <AccessProjectListUpperContainer>
                <CustomCheckbox>
                    <input
                        checked={allProjectsChecked}
                        id='all'
                        onChange={checkAllProjectsChangeHandler}
                        type='checkbox'
                        value='all projects'
                    />
                    <span className='checkmark' />
                    <AccessProjectRoleLabel htmlFor='all'>{allProjectsChecked ? 'Unselect All' : 'Select All'}</AccessProjectRoleLabel>
                </CustomCheckbox>
            </AccessProjectListUpperContainer>
            <AccessProjectListLowerContainer>
                {renderProjectNameWithCheckBox()}
            </AccessProjectListLowerContainer>
        </AccessProjectListContainer>
    )
}

export default AccessProjectList
