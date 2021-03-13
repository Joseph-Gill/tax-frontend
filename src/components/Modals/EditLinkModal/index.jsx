import React, {useState, useRef, useEffect} from 'react'
import Draggable from 'react-draggable'
import {useDispatch, useSelector} from 'react-redux'
import EditLinkTopRow from './EditLinkTopRow'
import EditLinkMiddleRow from './EditLinkMiddleRow'
import EditLinkBottomRow from './EditLinkBottomRow'
import ModalClose from '../ModalComponents/ModalClose'
import ModalEditTitle from '../ModalComponents/ModalEditTitle'
import ModalEditButtons from '../ModalComponents/ModalEditButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {sortEntitiesByName} from '../../../helpers'
import {EditEntityLinkInternalContainer} from '../styles'


const EditLinkModal = ({clinks, entities, saveEditLinkHandler, setShowEditLink,
                           showEditLink, slinks}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    let searchFromEntityTerm = useRef('')
    let searchToEntityTerm = useRef('')
    const [filteredFromEntities, setFilteredFromEntities] = useState([])
    const [filteredToEntities, setFilteredToEntities] = useState([])
    const [showEditLinkSelect, setShowEditLinkSelect] = useState(false)
    const [showEditLinkFromSelect, setShowEditLinkFromSelect] = useState(false)
    const [showEditLinkToSelect, setShowEditLinkToSelect] = useState(false)
    const [showEditTypeSelect, setShowEditTypeSelect] = useState(false)
    const [showEditColorSelect, setShowEditColorSelect] = useState(false)
    const [targetLink, setTargetLink] = useState({
        id: '',
        to: '',
        from: '',
        linkSelected: false,
        label: '',
        type: '',
        originalType: '',
        template: ''
    })

    useEffect(() => {
        // Sorts the list of entities alphabetically before setting the filtered result to all entities
        // initially for both the From and To entities lists
        setFilteredFromEntities([...sortEntitiesByName(entities)])
        setFilteredToEntities([...sortEntitiesByName(entities)])
    }, [entities])

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowEditLink(false)
    }

    const saveButtonHandler = () => {
        if (parseInt(targetLink.to) === parseInt(targetLink.from)) {
            dispatch(setError({linkFromTo: `You must choose different entities for From and To.`}))
        } else {
            saveEditLinkHandler(targetLink)
        }
    }

    const linkToEditChangeHandler = linkId => {
        //Checks for link to edit in clinks first, sets input values to link values if found
        const targetCLink = clinks.filter(link => link.id === parseInt(linkId))
        if (targetCLink.length) {
            setTargetLink({
                ...targetLink,
                id: linkId,
                from: targetCLink[0].from,
                to: targetCLink[0].to,
                label: targetCLink[0].label,
                template: targetCLink[0].template ? targetCLink[0].template : 'orange',
                type: 'clink',
                originalType: 'clink',
                linkSelected: true,
            })
        //If link was not found in clinks, finds it in slinks, sets input values to link values
        } else {
            const targetSLink = slinks.filter(link => link.id === parseInt(linkId))
            setTargetLink({
                ...targetLink,
                id: linkId,
                from: targetSLink[0].from,
                to: targetSLink[0].to,
                label: targetSLink[0].label,
                template: targetSLink[0].template ? targetSLink[0].template : 'orange',
                type: 'slink',
                originalType: 'slink',
                linkSelected: true,
            })
        }
        setShowEditLinkSelect(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowEditLink}
            showModalView={showEditLink}
        >
            <Draggable>
                <EditEntityLinkInternalContainer>
                    <ModalClose modalDisplay={setShowEditLink} />
                    <ModalEditTitle title='Choose Link to Edit' />
                    <EditLinkTopRow
                        clinks={clinks}
                        entities={entities}
                        linkToEditChangeHandler={linkToEditChangeHandler}
                        setShowEditLinkSelect={setShowEditLinkSelect}
                        setTargetLink={setTargetLink}
                        showEditLinkSelect={showEditLinkSelect}
                        slinks={slinks}
                        targetLink={targetLink}
                    />
                    <EditLinkMiddleRow
                        entities={entities}
                        error={error}
                        filteredFromEntities={filteredFromEntities}
                        filteredToEntities={filteredToEntities}
                        searchFromEntityTerm={searchFromEntityTerm}
                        searchToEntityTerm={searchToEntityTerm}
                        setFilteredFromEntities={setFilteredFromEntities}
                        setFilteredToEntities={setFilteredToEntities}
                        setShowEditLinkFromSelect={setShowEditLinkFromSelect}
                        setShowEditLinkToSelect={setShowEditLinkToSelect}
                        setTargetLink={setTargetLink}
                        showEditLinkFromSelect={showEditLinkFromSelect}
                        showEditLinkToSelect={showEditLinkToSelect}
                        targetLink={targetLink}
                    />
                    <EditLinkBottomRow
                        setShowEditColorSelect={setShowEditColorSelect}
                        setShowEditTypeSelect={setShowEditTypeSelect}
                        setTargetLink={setTargetLink}
                        showEditColorSelect={showEditColorSelect}
                        showEditTypeSelect={showEditTypeSelect}
                        targetLink={targetLink}
                    />
                    <ModalEditButtons
                        cancelButtonHandler={cancelButtonHandler}
                        saveButtonHandler={saveButtonHandler}
                    />
                </EditEntityLinkInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default EditLinkModal
