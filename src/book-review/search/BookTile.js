import React from 'react'
import {Link} from "react-router-dom";
import StarRating from "./StarRating";

const BookTile = ({book}) => {
    return (
        <Link to={"/book-details" + book.key} className="book-link">
            <div className="d-inline-block">
                <div className="card m-3">
                    <img className="card-img-top"
                         src={"https://covers.openlibrary.org/b/id/" + book.cover_i +"-L.jpg"}
                         alt="book cover"/>
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <div className="card-text ">
                            <StarRating rating={book.ratings_average}
                                        numReviews={book.ratings_count}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );

}

export default BookTile

// {
//     title,
//         publish_date,
//         want_to_read_count,
//         ratings_average,
//         ratings_count
// }