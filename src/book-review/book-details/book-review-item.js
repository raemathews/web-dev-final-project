import React from "react";
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
    const spolierTag = review.spoilers ?
        <i className="bi bi-exclamation-circle-fill fa-lg float-end mx-4 my-1"> Spoliers</i>
        : <span></span>
    return(
        <li className="list-group-item">
            <div className="row my-2">
                <div className="col-1">
                    <img width={40} className="float-end rounded-circle" src={`/images/${review.userImage}`}/>
                </div>
                <div className="col-11">
                    <div>
                        <i className="bi bi-x-lg float-end"></i>
                        <b>{review.username} </b>
                        {review.handle} | {review.time}
                    </div>

                    <div>
                        {spolierTag}
                        <h3 className="mt-2">{review.title}</h3>
                    </div>

                    <div className="my-2">{review.review}</div>
                    <div>
                        <label className="col-3"><i className="fa-regular fa-comment pe-1"></i>{review.replies}</label>
                        <label className="col-3"><i className="fa-regular fa-heart pe-1"></i>{review.likes}</label>
                        <label className="col-3"><i className="fa-solid fa-share-nodes pe-1"></i></label>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default ReviewItem;