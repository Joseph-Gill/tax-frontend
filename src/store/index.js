import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer} from './user/userLoginReducer'
import {errorReducer} from './errors/errorReducer'
import {feedbackReducer} from './feedback/feedbackReducer'
import {profileReducer} from './profile/profileReducer'
import {groupReducer} from './group/groupReducer'
import {projectReducer} from './project/projectReducer'
import {memberReducer} from './member/memberReducer'

// Reducers
export const reducers = combineReducers({
    userLoginReducer,
    errorReducer,
    feedbackReducer,
    profileReducer,
    groupReducer,
    projectReducer,
    memberReducer
})

// Thunk
const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export const store = createStore(reducers, enhancer)
