import React from 'react'
import {getMemberOrganizationNameAction} from '../store/organization/actions'
import {createChartForStepAction, updateChartForStepAction} from '../store/chart/actions'
import {FileListItem} from '../style/listitem'
import {DropdownOption} from '../style/options'
import {ModalDropdownContent} from '../components/Dropdowns/styles'

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

//Used in filter search bar components where e.target.value is not available for onClick
export const allowOnlyOneCheckedBoxContainer = (value, initialArray, arraySet) => {
    const dataCopy = [...initialArray]
    for (let i = 0; i < dataCopy.length; i++) {
        dataCopy[i].isChecked = i === parseInt(value);
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

export const createDate = date => {
    return new Date(parseInt(date.slice(0,5)), (parseInt(date.slice(5,7)) - 1), parseInt(date.slice(-2)))
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

// Used by components displaying Charts to attach tags to nodes to give each Entity its proper shape, also removes the tag for Add/Delete versions of the nodes
export const addLegalFormTag = legalForm => {
    switch (legalForm) {
        case 'Corporation':
            return 'corporation'
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

// Used in the StepChart to add the appropriate tag for Highlighting the Entity that is being Added
export const highlightTagForAddEntity = legalForm => {
    switch (legalForm) {
        case 'Corporation':
            return 'corporationAdd'
        case 'Partnership':
            return 'partnershipAdd'
        case 'Branch':
            return 'branchAdd'
        case 'Disregarded Entity':
            return 'disregardedEntityAdd'
        case 'Representative Office':
            return 'representativeOfficeAdd'
        case 'Hybrid Entity':
            return 'hybridEntityAdd'
        case 'Reverse Entity':
            return 'reverseHybridEntityAdd'
        default:
            return null
    }
}

export const highlightTagForDeleteEntity = legalForm => {
    switch (legalForm){
        case 'Corporation':
            return 'corporationDelete'
        case 'Partnership':
            return 'partnershipDelete'
        case 'Branch':
            return 'branchDelete'
        case 'Disregarded Entity':
            return 'disregardedEntityDelete'
        case 'Representative Office':
            return 'representativeOfficeDelete'
        case 'Hybrid Entity':
            return 'hybridEntityDelete'
        case 'Reverse Entity':
            return 'reverseHybridEntityDelete'
        default:
            return null
    }
}

// Used by components displaying Charts to attach tags to nodes to give each Entity its proper shape
export const getEntitiesWithTags = (entities, stepChartExists) => {
    // If a StepChart does not already exist, it needs to had the add styling removed from added entities
    // and the deleted entities removed entirely from the chart
    if (!stepChartExists) {
        const entitiesWithoutDeleted = []
        entities.forEach(entity => {
            if (!entity.remove) {
                let entityTag = addLegalFormTag(entity.legal_form)
                entitiesWithoutDeleted.push({...entity, tags: [entityTag]})
            }
        })
        return entitiesWithoutDeleted
    } else {
        return entities
    }
}

// Used by components to either create a new StepChart or update an existing StepChart
export const createUpdateStepChart = (chartData, dispatch, indexOfStepToDisplay, project, stepChartExists) => {
    if (!stepChartExists) {
        return dispatch(createChartForStepAction(project.id, indexOfStepToDisplay + 1, chartData))
    } else {
        return dispatch(updateChartForStepAction(project.id, indexOfStepToDisplay + 1, chartData))
    }
}

// Used by components that add entities to handle input validation
export const entityInputErrorHandler = (dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm, isStepChart = false) => {
    if (!newEntityInfo.entityName) {
        isStepChart ? dispatch(setError({entityName: `You must choose a name for this entity.`}))
            : dispatch(setError({entityInput: `You must choose a name for this entity.`}))
        return true
    } else if (availableParentNames.length && !newEntityInfo.parentId) {
        isStepChart ? dispatch(setError({entityParent: `You must choose a parent for this entity.`}))
            : dispatch(setError({entityInput: `You must choose a parent for this entity.`}))
        return true
    } else if (!countryName) {
        isStepChart ? dispatch(setError({entityCountryName: `You must choose a location for this entity.`}))
            : dispatch(setError({entityInput: `You must choose a location for this entity.`}))
        return true
    } else if (!legalForm){
        isStepChart ? dispatch(setError({entityLegalForm: `You must choose a legal form for this entity.`}))
            : dispatch(setError({entityInput: `You must choose a legal form for this entity.`}))
        return true
    } else if (availableParentNames.filter(entity => entity.name.toLowerCase() === newEntityInfo.entityName.toLowerCase() && entity.location === countryName).length) {
        dispatch(setError({entityName: 'You cannot have the same name and location as another entity.'}))
        return true
    } else {
        return false
    }
}

// Used by components that edit entities to handle input validation
export const editEntityInputErrorHandler = (dispatch, setError, listOfEntities, editEntityInfo, countryName) => {
    const remainingEntities = listOfEntities.filter(entity => entity.id !== editEntityInfo.entityToEditId)
    if (!editEntityInfo.entitySelected) {
        dispatch(setError({entitySelect: `You must choose an entity to edit.`}))
        return true
    } else if (!editEntityInfo.entityName) {
        dispatch(setError({entityName: `You must choose a name for this entity.`}))
        return true
    } else if (!countryName) {
        dispatch(setError({entityCountryName: `You must choose a location for this entity.`}))
        return true
    } else if (remainingEntities.filter(entity => entity.name.toLowerCase() === editEntityInfo.entityName.toLowerCase() && entity.location === countryName).length) {
        dispatch(setError({entityName: 'You cannot have the same name and location as another entity.'}))
        return true
    } else {
        return false
    }
}

// Used by components that add links to handle input validation
export const linkInputErrorHandler = (dispatch, setError, addLinkInfo) => {
    if (!addLinkInfo.to || !addLinkInfo.from) {
        dispatch(setError({linkFromTo: `You must choose a From and To.`}))
        return true
    }  else if (addLinkInfo.from === addLinkInfo.to) {
        dispatch(setError({linkFromTo: `You must choose different entities for From and To.`}))
        return true
    } else if (!addLinkInfo.type) {
        dispatch(setError({linkType: `You must choose a type for this link.`}))
        return true
    } else if (!addLinkInfo.color) {
        dispatch(setError({color: `You must choose a color for this link.`}))
        return true
    } else {
        return false
    }
}

//Used to sort entities by parentId and put the "Ultimate" entity first in the array, prevents issues
//in the backend trying to create entities with parents that haven't been created yet.
export const sortEntitiesByParentId = (entities) => {
    const sortedEntities = entities.sort((a,b) => (a.pid > b.pid) ? 1 : ((b.pid > a.pid) ? -1 : 0))
    const ultimateEntity = sortedEntities.pop()
    sortedEntities.unshift(ultimateEntity)
    return sortedEntities
}

//Used by modals dealing with Links to get the name and location (only if nameAndLocation is true) of an entity by id
export const getEntityInfo = (array, id, nameAndLocation=false) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id)
            if (nameAndLocation) {
                return `${array[i].name} (${array[i].location})`
            } else {
                return `${array[i].name}`
            }
    }
}

//Used for editing CLinks and SLinks when type stays the same
export const editLinkSameType = (linkData, array, setArray) => {
    const arrayWithLinkToEdit = [...array]
    const targetLinkToEdit = arrayWithLinkToEdit.filter(link => link.id === parseInt(linkData.id))[0]

    targetLinkToEdit.to = parseInt(linkData.to)
    targetLinkToEdit.from = parseInt(linkData.from)
    targetLinkToEdit.label = linkData.label
    targetLinkToEdit.template = linkData.template === 'blue' ? 'blue' : linkData.template === 'yellow' ? 'yellow' : ''
    setArray([...arrayWithLinkToEdit])
    return arrayWithLinkToEdit
}

//Used for editing CLinks and SLinks when type is changed
export const editLinkDifferentType = (linkData, originalArray, setOriginalArray, newArray, setNewArray) => {
    const arrayToRemoveFrom = [...originalArray]
    const indexOfLinkToRemove = arrayToRemoveFrom.findIndex(link => link.id === parseInt(linkData.id))
    arrayToRemoveFrom.splice(indexOfLinkToRemove, 1)
    setOriginalArray([...arrayToRemoveFrom])
    const linkWithNewType = {
        to: parseInt(linkData.to),
        from: parseInt(linkData.from),
        label: linkData.label,
        template: linkData.template === 'blue' ? 'blue' : linkData.template === 'yellow' ? 'yellow' : '',
        id: Date.now()
    }
    const arrayToAddToWithNewLink = [...newArray, linkWithNewType]
    setNewArray(arrayToAddToWithNewLink)
    return [arrayToAddToWithNewLink, arrayToRemoveFrom]
}

//Used by components that can set Project status as Completed, to check if it is an available option
export const checkIfProjectCanBeCompleted = (array) => {
    return !!array.filter(index => index.status !== 'Completed').length
}

//Used by components that can set Project status as Completed, to check if it is an available option
export const checkIfProjectCanBeOngoing = (array) => {
    return !!array.filter(index => index.status === 'Ongoing').length
}

//Used by components that need to create list of parent choices, to remove entities with "Delete" highlighting as choices
export const createAvailableParentNamesWithoutDeletes = arrayOfEntities => {
    let listOfPotentialParents = []
    arrayOfEntities.forEach(entity => {
        // Checks if entity has {remove: true} key/value pair, applied to entities that have Delete Highlighting and that
        // should not be presented as options in menus
        if (!entity.remove) {
            listOfPotentialParents.push({name: entity.name, location: entity.location, id: entity.id})
        }
    })
    return listOfPotentialParents
}

//Used by modal dropdowns to sort the entities to be displayed
export const sortEntitiesByName = array => {
    return array.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
}

//Used by modal dropdowns to filter the entities to be displayed
export const filterEntitiesByTerm = (array, term) => {
    return array.filter(entity => entity.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)
}

//Used by edit/remove link modals to render link options for the dropdown
export const renderEditRemoveLinks = (clinks, slinks, linkChangeHandler, entities) => {
        if (!clinks.length && !slinks.length) {
            return (
                <ModalDropdownContent>
                    <span>No Links to edit</span>
                </ModalDropdownContent>
            )
        } else {
            return (
                clinks.map(link => (
                    <ModalDropdownContent
                        key={link.id}
                        onClick={() => linkChangeHandler(link.id)}
                    >
                        <span>{`From: ${getEntityInfo(entities, link.from, true)}`}</span>
                        <span>{`To : ${getEntityInfo(entities, link.to, true)}`}</span>
                    </ModalDropdownContent>
                )).concat(slinks.map(link => (
                    <ModalDropdownContent
                        key={link.id}
                        onClick={() => linkChangeHandler(link.id)}
                    >
                        <span>{`From: ${getEntityInfo(entities, link.from, true)}`}</span>
                        <span>{`To : ${getEntityInfo(entities, link.to, true)}`}</span>
                    </ModalDropdownContent>
                )))
            )
        }
    }

//Used to get the Entity when given an array and a parent Id
export const getEntityFromId = (entityId, array) => {
    return array.find(entity => parseInt(entity.id) === parseInt(entityId))
}

//Used by search input in Modals to filter the results
export const handleFilterEntities = (arrayToFilter, filterStateSet, term) => {
    const filterResults = filterEntitiesByTerm(arrayToFilter, term.current.value)
    filterStateSet([...sortEntitiesByName(filterResults)])
}

//Used by search input in Modals to reset to the original display of entities
export const handleResetFilterEntities = (term, filterStateSet, originalArray) => {
    term.current.value = ''
    filterStateSet([...sortEntitiesByName(originalArray)])
}

//Used by dropdown search fields to handle when enter is pressed to search/reset
export const handleSearchInputPressEnter = (e, array, setFilter, term) => {
    if (e.key === 'Enter') {
        handleFilterEntities(array, setFilter, term)
    }
}

//Used by modal custom dropdowns that render entity lists
export const renderEntitiesForModalDropdowns = (arrayOfEntities, handleSelectChange) => {
    //Removes entities that are only in the array for the purpose of delete highlighting
    const result = arrayOfEntities.filter(entity => !entity.remove)
    if (result.length) {
        return (
            arrayOfEntities.map(entity => (
                <ModalDropdownContent
                    key={entity.id}
                    onClick={() => handleSelectChange(entity.id)}
                >
                    <span>{entity.name}</span>
                    <span>{`(${entity.location})`}</span>
                </ModalDropdownContent>)))
    } else {
        return (
            <ModalDropdownContent>
                <span>No Entities to display</span>
            </ModalDropdownContent>
        )
    }
}

//Used by predefined Modals to find the direct children of a specific entity
export const sortedDirectChildrenOfEntity = (arrayOfEntities, parentId) => {
    return sortEntitiesByName(arrayOfEntities.filter(entity => parseInt(entity.pid) === parseInt(parentId)))
}

//Used by predefined Modals to find all entities that aren't the Ultimate entity and not delete highlighted
export const sortedNonUltimateEntities = (arrayOfEntities) => {
    return sortEntitiesByName(arrayOfEntities.filter(entity => entity.pid && entity.pid !== 'Ultimate' && !entity.remove))
}

//Used by predefined Modals to find out if entities are sister entities
export const areEntitiesSisters = (arrayOfEntities, entityIdOne, entityIdTwo) => {
    const entityOne = getEntityFromId(entityIdOne, arrayOfEntities)
    const entityTwo = getEntityFromId(entityIdTwo, arrayOfEntities)
    return parseInt(entityOne.pid) === parseInt(entityTwo.pid)
}

//Used to check if a entity matches a target entity's parentId
export const checkIfEntityIsParent = (entityParentId, targetParentId) => {
    return parseInt(entityParentId) === parseInt(targetParentId)
}

//Used by predefined Modals to find all descendants of a specified Entity
export const findAllDescendantsOfTargetEntity = (arrayOfEntities, targetEntityId) => {
    const result = []
    let parentId = ''
    arrayOfEntities.forEach(entity => {
        if (!entity.remove) {
            if (checkIfEntityIsParent(entity.pid, targetEntityId)) {
                result.push(entity)
            } else {
                if (entity.pid) {
                    parentId = entity.pid
                    while (parentId) {
                        const parentEntity = getEntityFromId(parentId, arrayOfEntities)
                        if (checkIfEntityIsParent(parentEntity.pid, targetEntityId)) {
                            result.push(entity)
                            break
                        } else {
                            if (parentEntity.pid) {
                                parentId = parentEntity.pid
                            } else {
                                parentId = ''
                            }
                        }
                    }
                }
            }
        }
    })
    // console.log(result)
    return result
}
