import React from 'react'
import {getMemberOrganizationNameAction} from '../store/organization/actions'
import {DropdownOption} from '../style/options'
import {FileListItem} from '../style/listitem'
import {createChartForStepAction, updateChartForStepAction} from '../store/chart/actions'

// User by components that are uploading images for avatars
export const imageClickHandler = (input) => {
    input.current.click();
}

// User by components that are uploading images for avatars
export const imageChangeHandler = (e, set) => {
    if (e.target.files[0]) {
        set({avatar: e.target.files[0], changed: true})
    }
}

// Used by components that have checkboxes where only one checkbox can be checked at a time
export const allowOnlyOneCheckedBox = (e, initialArray, arraySet) => {
    const dataCopy = [...initialArray]
    for (let i = 0; i < dataCopy.length; i++) {
        dataCopy[i].isChecked = i === parseInt(e.target.value);
    }
    arraySet([...dataCopy])
}

// Used by components that have checkboxes to toggle the checkbox
export const checkBoxChangeHandler = (e, initialArray, arraySet) => {
    const dataCopy = [...initialArray]
    dataCopy[e.target.value].isChecked = !dataCopy[e.target.value].isChecked
    arraySet([...dataCopy])
}

// Used by components that need to convert a Date Object into a string for Django DateField
export const convertDate = date => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

// Used by components that need to create an array of member information that also contains their respective Group Role
export const listMemberWithOrgAndRole = async (array, group, dispatch) => {
    const result = [];
    for(const member of array){
        const response = await dispatch(getMemberOrganizationNameAction(group.id, member.user.id))
        const project_roles = member.assigned_project_roles.filter(role => role.project.group === group.id)
        if(response){
            let data = {
                id: member.id,
                first_name: member.user.first_name,
                last_name: member.user.last_name,
                organization: response.name,
                project_role: project_roles.length ? project_roles[0].role : 'Unassigned Role',
            }
            result.push(data)
        } else {
            let data = {
                id: member.id,
                first_name: member.user.first_name,
                last_name: member.user.last_name,
                organization: 'Unassigned Organization',
                project_role: project_roles.length ? project_roles[0].role : 'Unassigned Role',
            }
            result.push(data)
        }
    }
    return result
}

// Used by components creating a select that needs to populate with Options containing a users Name, Role, and Organization
export const createTaskMemberSelectOptions = array => {
    return  array.map(user => (
        <DropdownOption
            key={user.id}
            value={user.id}
        >{`${user.first_name} ${user.last_name} (${user.project_role} : ${user.organization})`}
        </DropdownOption>
    ))
}

// Used by components created a select that needs to populate with Options containing a project's Steps
export const createTaskStepSelectOptions = array => {
    return array.map(step => (
        <DropdownOption
            key={step.id}
            value={step.id}
        >{`Step #${step.number}`}
        </DropdownOption>
    ))
}

// Used by components needing to render a list of files uploaded by the user, trims name length to be 18 characters or less, while keeping the file extension
export const createAcceptedFilesList = array => {
    return array.map(file => (
        <FileListItem key={file.path}>{file.path.length > 18 ? file.path.slice(0, 11).concat('....').concat(file.path.slice(-4)) : file.path}</FileListItem>
    ))
}

// Used by components displaying Charts to attach tags to nodes to give each Entity its proper shape
export const addLegalFormTag = legalForm => {
    switch (legalForm) {
        case 'Partnership':
            return 'partnership'
        case 'Branch':
            return 'branch'
        case 'Disregarded Entity':
            return 'disregardedEntity'
        case 'Representative Office':
            return 'representativeOffice'
        case 'Hybrid Entity':
            return 'hybridEntity'
        case 'Reverse Entity':
            return 'reverseHybridEntity'
        default:
            return null
    }
}

// Used by components displaying Charts to attach tags to nodes to give each Entity its proper shape
export const getEntitiesWithTags = entities => {
    return entities.map(entity => {
        let entityTag = addLegalFormTag(entity.legal_form)
        if(entityTag){
            return {...entity, tags: [entityTag]}
        } else {
            return entity
        }
    })
}

// Used by components to either create a new StepChart or update an existing StepChart
export const createUpdateStepChart = (chartData, dispatch, indexOfStepToDisplay, project, stepChartExists) => {
    if (!stepChartExists) {
        dispatch(createChartForStepAction(project.id, indexOfStepToDisplay + 1, chartData))
    } else {
        dispatch(updateChartForStepAction(project.id, indexOfStepToDisplay + 1, chartData))
    }
}
