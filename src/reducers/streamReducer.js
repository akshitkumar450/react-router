import _ from 'lodash'

// we have used object as initial state rather than array bcz of easy operations on objects
const createStreamReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_STREAM':
            // key interpolation syntax
            return { ...state, [action.payload.id]: action.payload }
        case 'CREATE_STREAM':
            return { ...state, [action.payload.id]: action.payload }
        case 'EDIT_STREAM':
            return { ...state, [action.payload.id]: action.payload }
        case 'DELET_STREAM':
            return _.omit(state, action.payload)
        case 'FETCH_STREAMS':
            // mapkeys take an array and returns a object
            // mapkeys convert an array of objects to a object
            // mapkeys returns an object with all the key as id and value as values of id's
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state
    }
}
export default createStreamReducer