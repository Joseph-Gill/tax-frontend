import React, {useState, useEffect, useRef} from 'react'
import Draggable from 'react-draggable'
import RemoveEntityText from './RemoveEntityText'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import RemoveEntityDropdown from './RemoveEntityDropdown'
import ModalRemoveButtons from '../ModalComponents/ModalRemoveButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getEntityFromId, sortEntitiesByName} from '../../../helpers'
import {RemoveLinkEntityInternalContainer} from '../styles'


//Used by StepChart for deleting Entities of a StepChart
const RemoveEntityModal = ({componentCalling, dispatch, entities, entityToRemove, error, history, removeEntityHandler,
                               setEntityToRemove, setShowRemoveEntity, showRemoveEntity}) => {
    let searchEntityTerm = useRef('')
    const [showEntityRemoveSelect, setShowEntityRemoveSelect] = useState(false)
    // Used to contain a list of entities to remove that can be rolled back to when resetting the filter
    const [entitiesCanRemove, setEntitiesCanRemove] = useState([])
    // Used to render the possible entities to remove, array is filtered by the search input
    const [filteredEntitiesCanRemove, setFilteredEntitiesCanRemove] = useState([])


    useEffect(() => {
        const canEntityBeRemoved = testEntity => {
            let result = true
            for (let i = 0; i < entities.length; i++) {
                if (parseInt(entities[i].pid) === testEntity.id && !entities[i].remove){
                    result = false
                    break
                }
            }
            return result
        }
        const result = sortEntitiesByName(entities.filter(entity => canEntityBeRemoved(entity)))
        setEntitiesCanRemove([...result])
        setFilteredEntitiesCanRemove([...result])
    }, [entities])

    const handleEntityToRemoveChange = entityId => {
        setEntityToRemove(entityId)
        setShowEntityRemoveSelect(false)
    }

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowRemoveEntity(false)
    }

    // Used to store the id of an entity and keyword for the second half of the action created with entity histories
    const createAffectedParent = () => {
        const entity = getEntityFromId(entityToRemove, entities)
        if (entity.pid) {
            return [{
                id: parseInt(entity.pid),
                keyword: 'child'
            }]
        } else {
            return []
        }
    }

    return (
        <ModalExternalContainer
            setModalView={setShowRemoveEntity}
            showModalView={showRemoveEntity}
        >
            <Draggable>
                <RemoveLinkEntityInternalContainer componentCalling={componentCalling}>
                    <ModalClose modalDisplay={setShowRemoveEntity} />
                    <ModalTitle title='Select entity to remove' />
                    {componentCalling === 'GroupEdit' && <RemoveEntityText history={history} />}
                    <RemoveEntityDropdown
                        entitiesCanRemove={entitiesCanRemove}
                        entityToRemove={entityToRemove}
                        error={error}
                        filteredEntitiesCanRemove={filteredEntitiesCanRemove}
                        handleEntityToRemoveChange={handleEntityToRemoveChange}
                        searchEntityTerm={searchEntityTerm}
                        setFilteredEntitiesCanRemove={setFilteredEntitiesCanRemove}
                        setShowEntityRemoveSelect={setShowEntityRemoveSelect}
                        showEntityRemoveSelect={showEntityRemoveSelect}
                    />
                    <ModalRemoveButtons
                        cancelButtonHandler={cancelButtonHandler}
                        removeButtonHandler={() => removeEntityHandler(entities, 'remove_entity', createAffectedParent())}
                    />
                </RemoveLinkEntityInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default RemoveEntityModal
