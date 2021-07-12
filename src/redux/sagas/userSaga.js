import {put, takeEvery} from "redux-saga/effects"
import {getUsersFailure, getUsersSuccess} from "../actions/usersAction";
import {GET_USERS} from "../types";

const APIurl = "https://jsonplaceholder.typicode.com/users"

function getUsersFromAPI() {
    return fetch(APIurl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => response.json)
        .catch((error) => {throw error})
}

function* fetchUsers() {
    try {
        const users = yield getUsersFromAPI()
        yield put(getUsersSuccess(users))
    } catch (e) {
        yield put(getUsersFailure(e))
    }
}

function* userSaga() {
    yield takeEvery(GET_USERS, fetchUsers)
}

export default userSaga
