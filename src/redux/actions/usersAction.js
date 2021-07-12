import {GET_USERS_FAILURE, GET_USERS_SUCCESS} from "../types";


export function getUsersSuccess(users) {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export function getUsersFailure(error) {
    return {
        type: GET_USERS_FAILURE,
        payload: error,
        error: true
    }
}

