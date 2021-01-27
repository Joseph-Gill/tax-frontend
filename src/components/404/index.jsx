import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {set404Active} from '../../store/sideBar/actions'
import {BaseButton} from '../../style/buttons'
import {Container404} from './styles'


const Page404 = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    // Used to prevent the NavBar from displaying when on the 404 page of an "authenticated" account
    useEffect(() => {
        dispatch(set404Active())
    })

    return (
        <Container404>
            <h1>404</h1>
            <h2>Where am I?</h2>
            <BaseButton onClick={() => history.goBack()}>Take me out of here</BaseButton>
        </Container404>
    )
}

export default Page404
