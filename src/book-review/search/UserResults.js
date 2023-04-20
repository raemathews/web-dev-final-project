import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUsersThunk} from "../../services/users/users-thunk";
import UserTile from "./UserTile";

const UserResults = () => {
    const {query} = useParams();
    const dispatch = useDispatch();

    const {numResults, foundUsers, loading} =
        useSelector(store => store.users)

    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])
    let qualifyingUsers = foundUsers.filter((u) => u.username.includes(query))
    return (
        <div className="col-xs-12 col-sm-5 col-lg-3 col-xl-3">
            <div className="d-none d-sm-none d-md-block">
                <h5 className="p-4">{`Profiles (${numResults} found)`}</h5>
                <hr/>
            </div>
            <div className="list-group">
                {
                    foundUsers.map(user =>
                    <UserTile key={user.username} user={user} />
                    )
                }
            </div>
        </div>
    )
}

export default UserResults