import React, {useRef} from 'react'
import styled from 'styled-components/macro'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer} from '../styles'
import {useSpring} from 'react-spring'
import {CloseIcon} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle, NavbarTitle} from '../../../style/titles'
import {BaseInput} from '../../../style/inputs'
import {useSelector} from 'react-redux'
import ModalGroupCard from './ModalGroupCard'
import {BaseButton, CancelButton} from '../../../style/buttons'


const ChooseGroupModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 600px;
    height: 456px;
    padding: 15.41px 15.41px 34px 34px;
    align-items: flex-start;
    justify-content: flex-start;
`

const ChooseGroupModalCloseContainer = styled(AddDeleteModalCloseContainer)`
    width: 100%;
`

const ChooseGroupModalTitleContainer = styled.div`
    margin-top: 32px;
    width: 100%;
`

const ChooseGroupTitleContainer = styled(NavbarTitle)`
    margin-top: 20px;
`

const ChooseGroupInput = styled(BaseInput)`
    width: 532px;
    height: 38px;
    margin-top: 10px;
`

const ChooseGroupCardContainer = styled.div`
    height: 189px;
    max-height: 189px;
    width: 532px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 19.16px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.grayFive};
    }

    /* Handle */

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.grayTwo};
    }
`

const ChooseGroupButtonContainer = styled.div`
    width: 100%;
    margin-top: 25px;
    padding-right: 18.59px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const ChooseGroupSwitchButton = styled(BaseButton)`
    height: 32px;
    width: 91px;
    margin-left: 20px;
`


const ChooseGroupModal = ({history, setShowChooseGroup}) => {
    let groupName = useRef('')
    const groups = useSelector(state => state.profileReducer.profile.groups)

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <ChooseGroupModalInternalContainer>
                <ChooseGroupModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowChooseGroup(false)} src={close} />
                </ChooseGroupModalCloseContainer>
                <ChooseGroupModalTitleContainer>
                    <AuthenticatedPageTitle>Choose a group</AuthenticatedPageTitle>
                </ChooseGroupModalTitleContainer>
                <ChooseGroupTitleContainer>Group Name</ChooseGroupTitleContainer>
                <ChooseGroupInput
                    placeholder='Search for groups'
                    ref={groupName}
                    type='text'
                />
                <ChooseGroupCardContainer>
                    {groups.map(group => (
                        <ModalGroupCard
                            group={group}
                            history={history}
                            key={group.id}
                        />))}
                </ChooseGroupCardContainer>
                <ChooseGroupButtonContainer>
                    <CancelButton onClick={() => setShowChooseGroup(false)}>Cancel</CancelButton>
                    <ChooseGroupSwitchButton>Switch</ChooseGroupSwitchButton>
                </ChooseGroupButtonContainer>
            </ChooseGroupModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default ChooseGroupModal
