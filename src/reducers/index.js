import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducers'

export default combineReducers({
    auth: authReducer,
    // for storing form data in redux store  
    // key should be form only
    form: formReducer
})