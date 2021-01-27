import React from 'react'
import {useSpring} from 'react-spring'
import AddLinkLabel from './AddLinkLabel'
import AddLinkTypeDropdown from './AddLinkTypeDropdown'
import AddLinkColorDropdown from './AddLinkColorDropdown'
import AddLinkFromToDropdown from './AddLinkFromToDropdown'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {ErrorMessage} from '../../../style/messages'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {
    AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer,
    AddDeleteModalTitleContainer, AddEntityLinkModalInternalContainer, AddEntitySaveButton, EntityErrorContainer
} from '../styles'


//Used by StepChart for adding new Links to a StepChart
const AddLinkModal = ({addLinkInfo, cancelNewEntityLinkHandler, error, fromToOptions, saveNewLinkHandler,
                          setAddLinkInfo, setShowAddLink}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <AddEntityLinkModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowAddLink(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Select link options</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <AddLinkFromToDropdown
                        addLinkInfo={addLinkInfo}
                        fromToOptions={fromToOptions}
                        name='from'
                        setAddLinkInfo={setAddLinkInfo}
                        title='From'
                    />
                    <EntityErrorContainer>
                        {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
                    </EntityErrorContainer>
                </div>
                <div>
                    <AddLinkFromToDropdown
                        addLinkInfo={addLinkInfo}
                        fromToOptions={fromToOptions}
                        name='to'
                        setAddLinkInfo={setAddLinkInfo}
                        title='To'
                    />
                    <EntityErrorContainer />
                </div>
                <div>
                    <AddLinkLabel
                        addLinkInfo={addLinkInfo}
                        setAddLinkInfo={setAddLinkInfo}
                    />
                    <EntityErrorContainer />
                </div>
                <div>
                    <AddLinkTypeDropdown
                        addLinkInfo={addLinkInfo}
                        setAddLinkInfo={setAddLinkInfo}
                    />
                    <EntityErrorContainer>
                        {error && <ErrorMessage>{error.linkType}</ErrorMessage>}
                    </EntityErrorContainer>
                </div>
                <div>
                    <AddLinkColorDropdown
                        addLinkInfo={addLinkInfo}
                        setAddLinkInfo={setAddLinkInfo}
                    />
                    <EntityErrorContainer>
                        {error && <ErrorMessage>{error.color}</ErrorMessage>}
                    </EntityErrorContainer>
                </div>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelNewEntityLinkHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton onClick={saveNewLinkHandler}>Save</AddEntitySaveButton>
                </AddDeleteModalButtonContainer>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddLinkModal
