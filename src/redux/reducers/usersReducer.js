import {GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS} from "../types";

const initialState = {
    users: [],
    loading: false,
    error: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                loading: true,
                error: null,
                users: []
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: []
            }
        default:
            return state
    }
}
