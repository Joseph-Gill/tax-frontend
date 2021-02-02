import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import {BaseInput} from '../../../style/inputs'
import {CloseIcon} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddEntitySaveButton, EntityErrorContainer} from '../styles'
import {ActiveInputLabel} from '../../../style/labels'
import {EditEntityButtonContainer, EditEntityInternalContainer, EditEntityModalTitleContainer, EditEntityRowContainer} from './styles'


const EditEntityModal = ({setShowEditEntity}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <EditEntityInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowEditEntity(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <EditEntityModalTitleContainer>
                    <AuthenticatedPageTitle>Choose Entity to Edit</AuthenticatedPageTitle>
                </EditEntityModalTitleContainer>
                <EditEntityRowContainer>
                    <div>
                        <BaseInput />
                        <EntityErrorContainer />
                    </div>
                    <div>
                        <ActiveInputLabel>Name</ActiveInputLabel>
                        <BaseInput />
                        <EntityErrorContainer />
                    </div>
                </EditEntityRowContainer>
                <EditEntityRowContainer>
                    <div>
                        <ActiveInputLabel>Parent</ActiveInputLabel>
                        <BaseInput />
                        <EntityErrorContainer />
                    </div>
                    <div>
                        <ActiveInputLabel>Location</ActiveInputLabel>
                        <BaseInput />
                        <EntityErrorContainer />
                    </div>
                </EditEntityRowContainer>
                <EditEntityRowContainer>
                    <div>
                        <ActiveInputLabel>Legal Form</ActiveInputLabel>
                        <BaseInput />
                        <EntityErrorContainer />
                    </div>
                    <div>
                        <ActiveInputLabel>Tax Rate (optional)</ActiveInputLabel>
                        <BaseInput />
                        <EntityErrorContainer />
                    </div>
                </EditEntityRowContainer>
                <EditEntityButtonContainer>
                    <AuthenticatedButtonCancel>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton>Save</AddEntitySaveButton>
                </EditEntityButtonContainer>
            </EditEntityInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default EditEntityModal
