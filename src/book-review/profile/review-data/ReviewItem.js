import React from "react";
import {useNavigate} from "react-router";
const ReviewItem = (
    {review}
) => {

    const navigate = useNavigate();
    const visitProfile = () => {
        navigate(`/book-details/works/${review.book_id}`)
    }

    return(
        <div onClick={visitProfile}>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-10">
                        <div>{review.review_title}
                        </div>
                        <div className="fw-bolder">{review.book_title}</div>
                        <div>{review.body}</div>
                    </div>
                    <div className="col-2">
                        <img width={70} className="float-end rounded-3" src={`${review.image}`}/>
                    </div>
                </div>
            </li>
        </div>
    );
};
export default ReviewItem;
