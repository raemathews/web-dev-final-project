import React from "react";
import {useSelector} from "react-redux";
const ReviewItem = (
    {review}
) => {
    const { currentUser } = useSelector((state) => state.currentUser);
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{review.review_title}
                        <i className="fas fa-check-circle"></i>
                        - {currentUser.username}
                    </div>
                    <div className="fw-bolder">{review.book_title}</div>
                    <div>{review.body}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`${review.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default ReviewItem;
