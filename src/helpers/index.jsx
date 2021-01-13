import React from 'react'
import {getMemberOrganizationNameAction} from '../store/organization/actions'
import {DropdownOption} from '../style/options'
import {FileListItem} from '../style/listitem'


export const imageClickHandler = (input) => {
    input.current.click();
}

export const imageChangeHandler = (e, set) => {
    if (e.target.files[0]) {
        set({avatar: e.target.files[0], changed: true})
    }
}

export const allowOnlyOneCheckedBox = (e, initialArray, arraySet) => {
    const dataCopy = [...initialArray]
    for (let i = 0; i < dataCopy.length; i++) {
        dataCopy[i].isChecked = i === parseInt(e.target.value);
    }
    arraySet([...dataCopy])
}

export const checkBoxChangeHandler = (e, initialArray, arraySet) => {
    const dataCopy = [...initialArray]
    dataCopy[e.target.value].isChecked = !dataCopy[e.target.value].isChecked
    arraySet([...dataCopy])
}

export const convertDate = date => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

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

export const createTaskMemberSelectOptions = array => {
    return  array.map(user => (
        <DropdownOption
            key={user.id}
            value={user.id}
        >{`${user.first_name} ${user.last_name} (${user.project_role} : ${user.organization})`}
        </DropdownOption>
    ))
}

export const createTaskStepSelectOptions = array => {
    return array.map(step => (
        <DropdownOption
            key={step.id}
            value={step.id}
        >{`Step #${step.number}`}
        </DropdownOption>
    ))
}

export const createAcceptedFilesList = array => {
    return array.map(file => (
        <FileListItem key={file.path}>{file.path.length > 18 ? file.path.slice(0, 11).concat('....').concat(file.path.slice(-4)) : file.path}</FileListItem>
    ))
}
