const initialState = {
    isSignedIn: null
}
// when the component first load ,the reducers get called on time  to initialize it
// and the initial state is set to state

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false }
        default:
            return state;
    }
}

export default authReducer