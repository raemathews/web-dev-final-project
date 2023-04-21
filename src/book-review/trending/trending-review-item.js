import React from "react";
const TrendingReviewItem = (
    {
        review
    }
) => {
    return(

        <li className="list-group-item">
            <div className="row my-2">
                <div className="col-2">
                    <img className="float-end rounded-circle" src={`/images/${review.userImage}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"></i>
                        <b>{review.username} </b>
                        {review.handle} | {review.time}
                    </div>

                    <div>
                        <h3 className="mt-2">{review.title}</h3>
                    </div>

                    <div className="my-2">
                        <form id="textarea">
                            <textarea cols="40" rows="8" readOnly>{review.review}</textarea>
                        </form>

                    </div>
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
export default TrendingReviewItem;

