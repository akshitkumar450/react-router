import _ from 'lodash'

export const createStreamReducer = (state = {}, action) => {
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
        default:
            return state
    }
}