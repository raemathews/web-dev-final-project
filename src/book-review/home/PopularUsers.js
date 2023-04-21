import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findFollowingByUserIdThunk} from "../../services/followers/followers-thunk";
import {findUsersThunk} from "../../services/users/users-thunk";
import UserTile from "../search/UserTile";

const PopularUsers = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(store => store.currentUser)
    const {follows, followsLoading, followersById} =
        useSelector(store => store.followers)
    const {numResults, foundUsers, loading} =
        useSelector(store => store.users)
    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])
    useEffect(() => {
        currentUser &&
        dispatch(findFollowingByUserIdThunk(currentUser._id))
    }, [])
    const cleanedFollows = currentUser ? foundUsers.filter((f) => !followersById.includes()) : foundUsers
    let top5Ids = cleanedFollows.slice(0, 5)
    return (
        <>
        <h5 className="mt-3">Popular Users</h5>
        <ul className="list-group">
            {
                top5Ids.map(profile =>
                    <UserTile user={profile} />
                )
            }
        </ul>
        </>
    )
}

export default PopularUsers