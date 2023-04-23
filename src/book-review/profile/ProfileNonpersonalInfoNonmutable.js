import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUsersByIDThunk, findUsersThunk} from "../../services/users/users-thunk";
import {
    createFollowerThunk, deleteFollowerThunk,
    findFollowingByUserIdThunk
} from "../../services/followers/followers-thunk";
import ProfilePersonalInfoMutable from "./ProfilePersonalInfoMutable";
import Login from "../login/Login";
import {Link} from "react-router-dom";

const ProfileNonpersonalInfoNonmutable = ({user}) => {
    // user is the ID from the param. We want to retrieve the details of the user by ID.
    const {currentUser} = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const {numResults, foundUsers, userFoundById, loading} =
        useSelector(store => store.users)
    const {followers, following, follows, l} = useSelector(
        state => state.followers)
    useEffect(() => {
        if (currentUser) {
            dispatch(findFollowingByUserIdThunk(currentUser._id))
        }
    }, [])

    useEffect(() => {
    }, [following])

    useEffect(() => {
        dispatch(findUsersByIDThunk(user));
    }, [user])

    const getFollowBtn = (() => {
        if (!currentUser) {
            return (
                <div className={"list-group"}>
                    <Link to={"/login"} className={"btn btn-success list-group-item"}>Log in to Follow</Link>
                </div>
            );
        } else {
            const list = following.filter((u) => u.following_id === user);
            if (list.length > 0) {
                // that means that you are already following this person. So show the unfollow button.
                return (<button className={"btn btn-outline-danger"}
                                onClick={() => {
                                    dispatch(deleteFollowerThunk(list[0]._id));
                                }}>Unfollow</button>);
            } else {
                return (<button className={"btn btn-success"}
                                onClick={() => {
                                    const newFollower = {follower_id: currentUser._id, following_id: user}
                                    dispatch(createFollowerThunk(newFollower));
                                }}>Follow</button>);
            }
        }
    })
    // const handle = userFoundById.handle
    // console.log("handle: " + handle)
    // let handleCleaned = userFoundById &&
    // handle[0] === "@" ?
    //     handle : `@${handle}`

    // let handleCleaned = "@" + userFoundById.handle
    const fillerProfilePic = "/images/profile.jpg"
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col-12 col-md-4">
                    <img className="rounded-circle shadow-lg align-items-center justify-content-center" alt="avatar2"
                         src={userFoundById.profile_pic || fillerProfilePic}/>
                </div>
                <div className="col-12 col-md-8">
                    <div className={"row"}>
                        <div className={"col-12 col-md-9"}>
                            <h4 className={"fw-bolder mt-2"}>{userFoundById.username}</h4>
                            <span className={"fw-bold text-muted"}>{userFoundById.handle}</span>
                        </div>
                        <div className={"col-12 col-md-3"}>
                            {getFollowBtn()}
                        </div>
                    </div>
                    <div className={`list-group mt-4 ${userFoundById.bio || "d-none"}`}>
                        <span className={"list-group-item"}>{userFoundById.bio}</span>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default ProfileNonpersonalInfoNonmutable;