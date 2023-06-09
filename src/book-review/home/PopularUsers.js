import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findFollowingByUserIdThunk} from "../../services/followers/followers-thunk";
import {findUsersThunk} from "../../services/users/users-thunk";
import UserTile from "../search/UserTile";

const PopularUsers = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(store => store.currentUser)
    const {followers,
        following,
        follows,
        loading} =
        useSelector(store => store.followers)
    const {numResults, foundUsers, usersloading} =
        useSelector(store => store.users)
    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])
    useEffect(() => {
        currentUser &&
        dispatch(findFollowingByUserIdThunk(currentUser._id))
    }, [])
    const followingIds = following.map((f) => f.following_id)
    const cleanedSuggestions = currentUser ?
        foundUsers.filter((u) => !followingIds.includes(u._id)) : foundUsers
    const removeSelf = currentUser ? cleanedSuggestions.filter((u) => !(u._id === currentUser._id) ) : cleanedSuggestions
    let top5Ids = removeSelf.slice(0,5)
    return (
        <>
            <h5 className="mt-3 fw-bolder">Popular Users</h5>
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