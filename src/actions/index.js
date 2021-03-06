import axios from 'axios'
import history from '../history'
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
    return async (dispatch, getState) => {
        // getState is used to get info from redux store
        // for connecting streams with user
        // user must be signed to get userId
        const { userId } = getState().auth
        const response = await axios.post('http://localhost:3001/streams', { ...formValues, userId: userId })
        dispatch({
            type: 'CREATE_STREAM',
            payload: response.data
        })
        // to redirect to home page after stream is created
        history.push('/')
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/streams')
        dispatch({
            type: 'FETCH_STREAMS',
            payload: response.data
        })
    }
}
export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/streams/${id}`)
        dispatch({
            type: 'FETCH_STREAM',
            payload: response.data
        })
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        // with put we updates all record will remove values which are not present in formValues
        // with patch we update only update property present in formValues and rest will be remain same
        const response = await axios.patch(`http://localhost:3001/streams/${id}`, formValues)
        dispatch({
            type: 'EDIT_STREAM',
            payload: response.data
        })
        history.push('/')
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:3001/streams/${id}`)
        dispatch({
            type: 'DELETE_STREAM',
            // when action creater will run it will dispatch an action object which will omit/delete the payload which is and id,
            payload: id
        })
        history.push('/')

    }
}