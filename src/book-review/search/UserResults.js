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
    return (
        <div className="col-xs-12 col-sm-5 col-lg-3 col-xl-3">
            <div>
                <h5 className="p-4">Profiles</h5>
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