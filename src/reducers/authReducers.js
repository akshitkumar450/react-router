const initialState = {
    isSignedIn: null,
    userId: null
}
// when the component first load ,the reducers get called on time  to initialize it
// and the initial state is set to state

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state;
    }
}

export default authReducer