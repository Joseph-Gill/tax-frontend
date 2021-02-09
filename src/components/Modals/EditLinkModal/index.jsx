import React, {useState, useMemo} from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import ModalInput from '../ModalComponents/ModalInput'
import ModalClose from '../ModalComponents/ModalClose'
import ModalEditTitle from '../ModalComponents/ModalEditTitle'
import ModalEditButtons from '../ModalComponents/ModalEditButtons'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {EntityFormSelect} from '../../../style/select'
import {DropdownOption, EntityOption} from '../../../style/options'
import {AddDeleteModalExternalContainer, EditEntityLinkInternalContainer, EditEntityLinkRowContainer,
    EntityErrorContainer} from '../styles'


const EditLinkModal = ({clinks, entities, linkOptions, saveEditLinkHandler, setShowEditLink, slinks}) => {
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

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
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
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <Draggable>
                <EditEntityLinkInternalContainer>
                    <ModalClose modalDisplay={setShowEditLink} />
                    <ModalEditTitle title='Choose Link to Edit' />
                    <EditEntityLinkRowContainer>
                        <EntityFormSelect
                            onChange={(e) => linkToEditChangeHandler(e)}
                            value={targetLink.id}
                        >
                            <DropdownOption disabled value=''>Select a Link</DropdownOption>
                            {linkOptions}
                        </EntityFormSelect>
                        <ModalInput
                            changeHandler={(e) => setTargetLink({...targetLink, label: e.target.value})}
                            label='Label'
                            name='label'
                            placeholder='Enter your label'
                            type='text'
                            value={targetLink.label}
                        />
                    </EditEntityLinkRowContainer>
                    <EditEntityLinkRowContainer>
                        <div>
                            <ActiveInputLabel>From</ActiveInputLabel>
                            <EntityFormSelect
                                disabled={!targetLink.linkSelected}
                                onChange={(e) => setTargetLink({...targetLink, from: e.target.value})}
                                value={targetLink.from}
                            >
                                {renderEditLinkToFromOptions}
                            </EntityFormSelect>
                            <EntityErrorContainer>
                                {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
                            </EntityErrorContainer>
                        </div>
                        <div>
                            <ActiveInputLabel>To</ActiveInputLabel>
                            <EntityFormSelect
                                disabled={!targetLink.linkSelected}
                                onChange={(e) => setTargetLink({...targetLink, to: e.target.value})}
                                value={targetLink.to}
                            >
                                {renderEditLinkToFromOptions}
                            </EntityFormSelect>
                            <EntityErrorContainer>
                                {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
                            </EntityErrorContainer>
                        </div>
                    </EditEntityLinkRowContainer>
                    <EditEntityLinkRowContainer>
                        <div>
                            <ActiveInputLabel>Type</ActiveInputLabel>
                            <EntityFormSelect
                                disabled={!targetLink.linkSelected}
                                onChange={(e) => setTargetLink({...targetLink, type: e.target.value})}
                                value={targetLink.type}
                            >
                                <DropdownOption disabled value=''>Select a type</DropdownOption>
                                <DropdownOption value='clink'>C Link</DropdownOption>
                                <DropdownOption value='slink'>S Link</DropdownOption>
                            </EntityFormSelect>
                        </div>
                        <div>
                            <ActiveInputLabel>Color</ActiveInputLabel>
                            <EntityFormSelect
                                disabled={!targetLink.linkSelected}
                                onChange={(e) => setTargetLink({...targetLink, template: e.target.value})}
                                value={targetLink.template}
                            >
                                <DropdownOption disabled value=''>Select a color</DropdownOption>
                                <DropdownOption value='blue'>Blue</DropdownOption>
                                <DropdownOption value='yellow'>Yellow</DropdownOption>
                                <DropdownOption value='orange'>Orange</DropdownOption>
                            </EntityFormSelect>
                            <EntityErrorContainer />
                        </div>
                    </EditEntityLinkRowContainer>
                    <ModalEditButtons
                        cancelButtonHandler={cancelButtonHandler}
                        saveButtonHandler={saveButtonHandler}
                    />
                </EditEntityLinkInternalContainer>
            </Draggable>
        </AddDeleteModalExternalContainer>
    )
}

export default EditLinkModal
