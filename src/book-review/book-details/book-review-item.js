import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk, updateReviewThunk} from "../../services/reviews/reviews-thunk";
import {findUsersThunk} from "../../services/users/users-thunk";
import {useNavigate} from "react-router";

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
    let [user, setUser] = useState(defaultUser);
    let [commentVisibility, setCommentVisibility] = useState(false);
    let [toast, setToast] = useState(false);
    const {currentUser} = useSelector(store => store.currentUser);
    const {numResults, foundUsers, userFoundById, loading} =
        useSelector(store => store.users)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const visitBookDetail = () => {
        navigate(`/book-details/works/${review.book_id}`)
    }

    useEffect(() => {
        dispatch(findUsersThunk());
    }, [])

    useEffect(() => {
        // console.log(foundUsers);
        const list = foundUsers.filter((u) => u._id == review.user_id)
        if (list.length > 0) {setUser(list[0])};
    }, [foundUsers]);

    const deleteReviewHandler = (id) => {
        console.log("delete Review");
        dispatch(deleteReviewThunk(id));
    }
    const likeReviewHandler = (review) => {
        if (currentUser) {
            if (review.likes.includes(currentUser._id)) {
                // They've already liked it, unlike it
                // TODO: change to just remove this user
                const r = dispatch(updateReviewThunk({
                    ...review,
                    likes: review.likes.filter((r) => (r != currentUser._id))
                }));
            } else {
                // They haven't liked it yet, like it
                dispatch(updateReviewThunk({
                    ...review,
                    likes: [... review.likes, currentUser._id]
                }));
            }
        } else {
            // Display something telling them to log in/sign up
            setToast(true);
            setTimeout(function(){ setToast(false)}, 3000);
        }
    }

    function createReplyHandler() {
        // TODO: Create reply
    }

    const getProfileFile = () => {
        if (user.profile_pic) {
            return `/images/${user.profile_pic}`;
        }
        return `/images/${defaultUser.profile_pic}`;
    }

    const visitProfile = () => {
        navigate(currentUser && (review.user_id === currentUser._id) ? `/profile` : `/profile/${review.user_id}`)
    }

    const likedIcon = currentUser && review.likes.includes(currentUser._id) ? "fa-solid text-danger fa-heart" : "fa-regular fa-heart"

    const spoilerTag = review.spoiler_flag ?
        <i className="bi bi-exclamation-circle-fill fa-lg float-end mx-4 my-1"> Spoilers</i>
        : <span></span>

    return(
        <li onClick={visitBookDetail} className="list-group-item">
            <div className="row my-2 me-2">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <div className="row justify-content-center">
                        <img
                            width={40}
                             className="float-end"
                             src={getProfileFile()}
                             onClick={visitProfile}
                             style={{clipPath: "circle()"}}/>
                        {user.admin ?
                            <span className="badge bg-success position-relative"
                                  style={{ top:"-10px", width: "fit-content"}}>
                                <i className="d-none d-md-block bi fa-xl bi-book-half"></i>
                                <i className="d-block d-md-none bi fa-lg bi-book-half"></i>
                            </span>
                            : <></>}
                    </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                    <div>
                        {currentUser && (currentUser._id == review.user_id || currentUser.admin) ?
                            <i className="bi bi-x-lg float-end" onClick={() => deleteReviewHandler(review._id)}></i>
                            : <></>
                        }
                        <div onClick={visitProfile}>
                            <b>{user.username} </b>
                            {user.handle} | {review.time}
                        </div>
                    </div>
                    <div>
                        {spoilerTag}
                        <h3 className="mt-2">{review.review_title}</h3>
                    </div>

                    <div className="my-2">{review.body}</div>
                    <hr/>
                    <div className="my-2 mx-2">
                        <div className={`${toast ? "" : "visually-hidden"}`}>
                            <div className="alert alert-primary">
                                Log in or sign up for an account to like or comment!
                            </div>
                        </div>
                        <label className="col-5 me-3"
                                onClick={() => (currentUser? setCommentVisibility(!commentVisibility) : likeReviewHandler(review))}>
                            <i className="fa-regular fa-comment pe-2"></i>
                            {review.replied} Comments
                        </label>
                        <label className="col-5"
                               onClick={() => likeReviewHandler(review)}>
                            <i className={`${likedIcon} pe-2`}></i>
                            {review.likes ? review.likes.length : 0} Loves
                        </label>
                    </div>
                    <div>
                        <div className={`row mt-3 ${commentVisibility ? "" : "visually-hidden"}`}>
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