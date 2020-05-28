import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer} from './user/userLoginReducer'
import {errorReducer} from './errors/errorReducer'

// Reducers
export const reducers = combineReducers({
    userLoginReducer,
    errorReducer
})

// Thunk
const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export const store = createStore(reducers, enhancer)
