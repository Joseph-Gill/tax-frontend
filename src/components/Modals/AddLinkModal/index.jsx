import React from 'react'
import {useSpring} from 'react-spring'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTitleContainer, AddEntityLinkModalInternalContainer} from '../styles'
import {CloseIcon} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'


const AddLinkModal = ({setShowAddLink}) => {

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
                    <AuthenticatedPageTitle>Select Link options</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    Choose Type
                </div>
                <div>
                    Choose From
                </div>
                <div>
                    Choose To
                </div>
                <div>
                    Choose Color
                </div>
            </AddEntityLinkModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default AddLinkModal
