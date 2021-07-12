import React, {useEffect} from "react";
import CardComponent from "./CardComponent";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/actions/usersAction";

const UserComponent = () => {

    const dispatch = useDispatch()

    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)

    useEffect(() => {
        dispatch(getUsers([
            {
                id: 1,
                name: "Andrey Valverde",
                company: {
                    name: "Google",
                    catchPhrase: "Thank God for this day"
                }
            }
        ]))
    }, [dispatch])

    return (
        <>
            {loading && <p>Loading...</p>}
            {users.length > 0 && users.map((user) => (
                    <CardComponent user={user} key={user.id}/>
                )
            )}
            {users.length === 0 && <p>No users to display</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default UserComponent
