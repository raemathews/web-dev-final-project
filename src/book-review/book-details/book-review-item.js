import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteReviewThunk, updateReviewThunk} from "../../services/reviews/reviews-thunk";
import {useParams} from "react-router-dom";
const ReviewItem = (
    {
        review = {
            "_id": 234,
            "title": "Can't Recommend",
            "book": "It Ends With Us",
            "username": "kimmiefin",
            "handle": "@kimmiereviews",
            "time": "2h",
            "userImage": "profile.jpg",
            "liked": true,
            "likes": 2345,
            "replies": 432,
            "spoilers": true,
            "review": ""
        }
    }
) => {
    let [currentComment, setCurrentComment] = useState('');
    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    const likeReviewHandler = (review) => {
        // TODO: add current user to the list of users who liked this review
        // dispatch(updateReviewThunk({
        //     ...review,
        //     liked: !(review.liked),
        //     likes: (review.liked)? (review.likes - 1) : (review.likes + 1)
        // }));
    }

    const likedIcon = review.liked ? "fa-solid text-danger fa-heart pe-1" : "fa-regular fa-heart pe-1"

    const spoilerTag = review.spoilers ?
        <i className="bi bi-exclamation-circle-fill fa-lg float-end mx-4 my-1"> Spoilers</i>
        : <span></span>
    return(
        <li className="list-group-item">
            <div className="row my-2">
                <div className="col-1">
                    <img width={40} className="float-end rounded-circle" src={`/images/${review.userImage}`}/>
                </div>
                <div className="col-11">
                    <div>
                        {/*TODO: Make only visible to user who wrote the review*/}
                        <i className="bi bi-x-lg float-end" onClick={() => deleteReviewHandler(review)}></i>
                        <b>{review.username} </b>
                        {review.handle} | {review.time}
                    </div>

                    <div>
                        {spoilerTag}
                        <h3 className="mt-2">{review.title}</h3>
                    </div>

                    <div className="my-2">{review.review}</div>
                    <div>
                        <label className="col-3">
                            <i className="fa-regular fa-comment pe-1"></i>
                            {review.replies}
                        </label>
                        <label className="col-3">
                            <i className={likedIcon} onClick={() => likeReviewHandler(review)}></i>
                            {review.likes}
                        </label>
                        <label className="col-3"><i className="fa-solid fa-share-nodes pe-1"></i></label>
                    </div>
                    <div>
                        {/*TODO: Make a comment reply section*/}
                        <textarea value={currentComment} placeholder="Write a reply here..."
                                  className="form-control border-0"
                                  onChange={(event) => setCurrentComment(event.target.value)}>
                        </textarea>
                        <button type="button" className="btn btn-primary mt-2">Reply</button>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default ReviewItem;