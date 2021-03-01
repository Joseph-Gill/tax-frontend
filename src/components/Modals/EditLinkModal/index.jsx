import React, {useState, useMemo} from 'react'
import Draggable from 'react-draggable'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import EditLinkTopRow from './EditLinkTopRow'
import EditLinkMiddleRow from './EditLinkMiddleRow'
import EditLinkBottomRow from './EditLinkBottomRow'
import ModalClose from '../ModalComponents/ModalClose'
import ModalEditTitle from '../ModalComponents/ModalEditTitle'
import ModalEditButtons from '../ModalComponents/ModalEditButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {EntityOption} from '../../../style/options'
import {EditEntityLinkInternalContainer} from '../styles'


const EditLinkModal = ({clinks, entities, linkOptions, saveEditLinkHandler, setShowEditLink,
                           showEditLink, slinks}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
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

    //Renders options for the From / To selects
    const renderEditLinkToFromOptions = useMemo(() => {
        if (entities.length) {
            return (
                <>
                    <EntityOption disabled value=''>Select entity to edit</EntityOption>
                    {entities.map(entity => (
                        <EntityOption
                            key={uuidv4()}
                            value={entity.id}
                        >{`${entity.name} (${entity.location})`}
                        </EntityOption>
                    ))}
                </>
            )
        } else {
            return (
                <EntityOption value=''>No entities</EntityOption>
            )
        }
    }, [entities])

    const linkToEditChangeHandler = (e) => {
        //Checks for link to edit in clinks first, sets input values to link values if found
        const targetCLink = clinks.filter(link => link.id === parseInt(e.target.value))
        if (targetCLink.length) {
            setTargetLink({
                ...targetLink,
                id: e.target.value,
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
            const targetSLink = slinks.filter(link => link.id === parseInt(e.target.value))
            setTargetLink({
                ...targetLink,
                id: e.target.value,
                from: targetSLink[0].from,
                to: targetSLink[0].to,
                label: targetSLink[0].label,
                template: targetSLink[0].template ? targetSLink[0].template : 'orange',
                type: 'slink',
                originalType: 'slink',
                linkSelected: true,
            })
        }
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
                        linkOptions={linkOptions}
                        linkToEditChangeHandler={linkToEditChangeHandler}
                        setTargetLink={setTargetLink}
                        targetLink={targetLink}
                    />
                    <EditLinkMiddleRow
                        error={error}
                        renderEditLinkToFromOptions={renderEditLinkToFromOptions}
                        setTargetLink={setTargetLink}
                        targetLink={targetLink}
                    />
                    <EditLinkBottomRow
                        setTargetLink={setTargetLink}
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
