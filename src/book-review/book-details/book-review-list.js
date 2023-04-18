import React, {useEffect, useState} from "react";
import ReviewItem from "./book-review-item";
import {useDispatch, useSelector}
    from "react-redux";
import {findReviewsByBookId, findReviewsThunk} from "../../services/reviews/reviews-thunk";

const ReviewList = () => {
    // const {reviews, loading} = useSelector(
    //     state => state.users)
    // const {reviews, loading} = usefindReviewsByBookId();
    const reviews = [{
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
        "review": "...I also think it is unacceptable for people to be recommending this book as just a “sad book” or a “book to make you cry”, because diminishing a book that explores such a difficult and serious topic like domestic abuse, to an object that simply serves the purpose of evoking emotions from you, is extremely disrespectful and shallow. Especially considering that this is such a personal book to Colleen Hoover."
    }];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsByBookId()) // TODO give ID from url
    }, [])
    return(
        <ul className="list-group mt-2">
            {
                // loading &&
                // <li className="list-group-item">
                //     Loading...
                // </li>
            }
            {
                reviews.map(review =>
                    <ReviewItem key={review._id} review={review}/>)
            }
        </ul>
    );
};
export default ReviewList;