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
import {stepReducer} from './step/stepReducer'
import {taxConsequenceReducer} from './taxConsequence/taxConsequenceReducer'
import {taskReducer} from './task/taskReducer'
import {sideBarReducer} from './sideBar/sideBarReducer'

// Reducers
export const reducers = combineReducers({
    userLoginReducer,
    errorReducer,
    feedbackReducer,
    profileReducer,
    groupReducer,
    projectReducer,
    memberReducer,
    stepReducer,
    taxConsequenceReducer,
    taskReducer,
    sideBarReducer
})

// Thunk
const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export const store = createStore(reducers, enhancer)
