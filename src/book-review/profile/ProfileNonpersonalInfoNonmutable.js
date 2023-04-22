import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUsersByIDThunk, findUsersThunk} from "../../services/users/users-thunk";
import {
    createFollowerThunk,
    deleteFollowerThunk, findFollowersByUserIdThunk,
    findFollowingByUserIdThunk
} from "../../services/followers/followers-thunk";

const ProfileNonpersonalInfoNonmutable = ({user}) => {
    // user is the ID from the param. We want to retrieve the details of the user by ID.
    const { currentUser } = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const {numResults, foundUsers, userFoundById, loading} =
        useSelector(store => store.users)
    const {followers, following, l} = useSelector(
        state => state.followers)
    useEffect(() => {
        if (currentUser) {
            dispatch(findFollowingByUserIdThunk(currentUser._id));
            //dispatch(findFollowersByUserIdThunk(currentUser._id));
        }
    }, [following, followers])

    useEffect(() => {
        dispatch(findUsersByIDThunk(user));
    }, [user])

    const getFollowBtn = (() => {
        if (!currentUser) {
            return (<h4>Log in to follow this account!</h4>);
        } else {
            const list = following.filter((u) => u.follower_id == user);
            if (list.length > 0) {
                // that means that you are already following this person. So show the unfollow button.
                return (<button
                    onClick={() => {
                        //const removeFollowing = {follower_id: currentUser._id, following_id: user}
                        //dispatch(deleteFollowerThunk(removeFollowing))
                    }}>Unfollow</button>);
            } else {
                return (<button
                    onClick={() => {
                        const newFollowing = {follower_id: currentUser._id, following_id: user}
                        dispatch(createFollowerThunk(newFollowing))
                    }}>Follow</button>);
            }
        }
    })

    return(
        <>
            <div className="col-4">
                <img src={userFoundById.profile_pic}
                     width="90%"
                     height="200px"/>
                {getFollowBtn()}
            </div>
            <div className="col-6">
                <div>
                    <div>
                        <text><b>Username: </b> {userFoundById.username}</text>
                    </div>
                    <div>
                        <text><b>Handle: </b> {userFoundById.handle}</text>
                    </div>
                    <div>
                        <text><b>Bio: </b> {userFoundById.bio}</text>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileNonpersonalInfoNonmutable;