import React, {useState, useEffect, useRef} from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import RemoveEntityDropdown from './RemoveEntityDropdown'
import ModalRemoveButtons from '../ModalComponents/ModalRemoveButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {sortEntitiesByName} from '../../../helpers'
import {RemoveLinkEntityInternalContainer} from '../styles'


//Used by StepChart for deleting Entities of a StepChart
const RemoveEntityModal = ({entities, entityToRemove, removeEntityHandler, setEntityToRemove,
                               setShowRemoveEntity, showRemoveEntity}) => {
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
        setShowRemoveEntity(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowRemoveEntity}
            showModalView={showRemoveEntity}
        >
            <Draggable>
                <RemoveLinkEntityInternalContainer>
                    <ModalClose modalDisplay={setShowRemoveEntity} />
                    <ModalTitle title='Select entity to remove' />
                    <RemoveEntityDropdown
                        entitiesCanRemove={entitiesCanRemove}
                        entityToRemove={entityToRemove}
                        filteredEntitiesCanRemove={filteredEntitiesCanRemove}
                        handleEntityToRemoveChange={handleEntityToRemoveChange}
                        searchEntityTerm={searchEntityTerm}
                        setFilteredEntitiesCanRemove={setFilteredEntitiesCanRemove}
                        setShowEntityRemoveSelect={setShowEntityRemoveSelect}
                        showEntityRemoveSelect={showEntityRemoveSelect}
                    />
                    <ModalRemoveButtons
                        cancelButtonHandler={cancelButtonHandler}
                        removeButtonHandler={removeEntityHandler}
                    />
                </RemoveLinkEntityInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default RemoveEntityModal
