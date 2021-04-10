import axios from 'axios'

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = (formValues) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3001/streams', formValues)
        dispatch({
            type: 'CREATE_STREAM',
            payload: response.data
        })
    }
}