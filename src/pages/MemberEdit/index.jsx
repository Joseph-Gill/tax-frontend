import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {EDIT_MEMBER, GROUPS, MEMBERS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {getMemberAction} from '../../store/member/actions'
import {useRouteMatch} from 'react-router-dom'
import Spinner from '../../components/Spinner'


const MemberInfoContainer = styled.div`
    width: 860px;
    height: 484px;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
`


const MemberEdit = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const group = useSelector(state => state.groupReducer.group)
    const member = useSelector(state => state.memberReducer.member)
    const loaded = useSelector(state => state.memberReducer.loaded)

    useEffect(() => {
        dispatch(getMemberAction(match.params.memberId))
    }, [dispatch, match.params.memberId])

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`, active: false},
                        {display: `MEMBER : ${member.user.email}`, to: `${GROUPS}${MEMBERS}${EDIT_MEMBER}/${member.id}`, active: true}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Edit Team Member</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    <MemberInfoContainer>

                    </MemberInfoContainer>
                </>
            )}
        </AuthenticatedPageContainer>
    )
}

export default MemberEdit
