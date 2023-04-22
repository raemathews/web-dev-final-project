import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk, updateReviewThunk} from "../../services/reviews/reviews-thunk";
import {findUsersByIDThunk, findUsersThunk} from "../../services/users/users-thunk";

const defaultUser =({
    handle: "@user_handle",
    admin: false,
    username: "user",
    bio: "No bio found",
    password: "password",
    email: "email@domain.com",
    phone_number: "123-456-7890",
    profile_pic: "profile.jpg"
});
const ReviewItem = (
    {
        review = {
            "_id": 234,
            "book_id": 123,
            "user_id": 123,
            "review_title": "Can't Recommend",
            "book_title": "It Ends With Us",
            "time": "02/03/2022",
            "likes": 100,
            "replied": 200,
            "spoiler_flag": true,
            "body": ""
        }
    }
) => {
    let [currentComment, setCurrentComment] = useState('');
    const dispatch = useDispatch();
    const {numResults, foundUsers, userFoundById, loading} =
        useSelector(store => store.users)

    let [user, setUser] = useState(defaultUser);
    useEffect(() => {
        dispatch(findUsersThunk());
    }, [])
    useEffect(() => {
        console.log(foundUsers);
        const list = foundUsers.filter((u) => u._id == review.user_id)
        if (list.length > 0) {setUser(list[0])};
    }, [foundUsers]);

    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    const likeReviewHandler = (review) => {
        // TODO: add current user to the list of users who liked this review
    }

    function createReplyHandler() {
        // TODO: add current user to the list of users who liked this review
    }

    const getProfileFile = () => {
        if (user.profile_pic) {
            return `/images/${user.profile_pic}`;
        }
        return `/images/${defaultUser.profile_pic}`;
    }

    const likedIcon = review.liked ? "fa-solid text-danger fa-heart" : "fa-regular fa-heart"

    const spoilerTag = review.spoiler_flag ?
        <i className="bi bi-exclamation-circle-fill fa-lg float-end mx-4 my-1"> Spoilers</i>
        : <span></span>

    return(
        <li className="list-group-item">
            <div className="row my-2 me-2">
                <div className="col-1">
                    <img width={40}
                         className="float-end rounded-circle"
                         src={getProfileFile()}/>
                </div>
                <div className="col-11">
                    <div>
                        {/*TODO: Make only visible to user who wrote the review*/}
                        <i className="bi bi-x-lg float-end" onClick={() => deleteReviewHandler(review)}></i>
                        <b>{user.username} </b>
                        {user.handle} | {review.time}
                    </div>

                    <div>
                        {spoilerTag}
                        <h3 className="mt-2">{review.review_title}</h3>
                    </div>

                    <div className="my-2">{review.body}</div>
                    <hr/>
                    <div className="my-2 mx-2">
                        <label className="col-2 me-3">
                            <i className="fa-regular fa-comment pe-2"></i>
                            {review.replied} Comments
                        </label>
                        <label className="col-2">
                            <i className={`${likedIcon} pe-2`} onClick={() => likeReviewHandler(review)}></i>
                            {review.likes ? review.likes.length : 0} Loves
                        </label>
                    </div>
                    <div>
                        <div className="row mt-3">
                            {/*TODO: Make a comment reply section*/}
                            <div className="col-11">
                                <textarea value={currentComment} placeholder="Write a reply here..."
                                          className="form-control border-1"
                                          onChange={(event) => setCurrentComment(event.target.value)}>
                                </textarea>
                            </div>
                            <button type="button"
                                    className="btn btn-primary col-1"
                                    onClick={() => createReplyHandler()}>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default ReviewItem;