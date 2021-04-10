import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducers'
import createStreamReducer from './streamReducer'

export default combineReducers({
    auth: authReducer,
    streams: createStreamReducer,
    // for storing form data in redux store  
    // key should be form only
    form: formReducer
})