import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUsersByIDThunk, findUsersThunk} from "../../services/users/users-thunk";
import {findFollowersByUserIdThunk, findFollowingByUserIdThunk} from "../../services/followers/followers-thunk";
import ProfilePersonalInfoMutable from "./ProfilePersonalInfoMutable";

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
            dispatch(findFollowingByUserIdThunk(currentUser._id))
        }
    }, [])

    useEffect(() => {
        dispatch(findUsersByIDThunk(user));
    }, [user])

    const getFollowBtn = (() => {
        if (!currentUser) {
            return (<h4>Log in to follow this account!</h4>);
        } else {
            following.map(f => {console.log("Users in following: " + JSON.stringify(f))});
            console.log("The user info is " + user);
            const list = following.filter((u) => u.follower_id == user);
            console.log("The list is " + list);
            if (list.length > 0) {
                // that means that you are already following this person. So show the unfollow button.
                console.log("UNFOLLOW");
                return (<button>Unfollow</button>);
            } else {
                console.log("FOLLOW");
                return (<button>Follow</button>);
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