import React from 'react'
import {Link} from "react-router-dom";
import StarRating from "../search/StarRating";

const BookOfTheMonth = ({book}) => {
    const maxTitleLength = 40;
    const maxAuthorLength = 25;
    let author = book.author_name ? Object.values(book.author_name) : [""];
    return (
        <Link to={"/book-details" + (book.key || "/works/" + book.book_id)} className="book-link">
            <div className="d-inline-block">
                <div className="card btn-outline-success border-2 m-3">
                    {book.cover_i ?
                        <img className="card-img-top"
                             style={{height: "380px"}}
                             src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                             alt="book cover"/>
                        : <img className="card-img-top not-found"
                               style={{height: "380px"}}
                               src={"/images/no_cover.png"}
                               alt="book cover"/>               }
                    <div className="card-body" style={{maxHeight: "fit-content"}}>
                        <h5 className="card-title fw-bold mt-1">
                            {
                                book && book.title && book.title.length > maxTitleLength ?
                                    book.title.substring(0, maxTitleLength - 3) + "..." :
                                    book.title
                            }
                        </h5>
                        <h6 className="card-subtitle fw-semibold mt-2">Author: {
                            author && author[0] && author[0].length > maxAuthorLength ?
                                author[0].substring(0, maxAuthorLength - 3) + "..." :
                                author ? author[0] : "--"
                        }</h6>
                        <div className="mt-2">
                            <StarRating rating={book.ratings_average}
                                        numReviews={book.ratings_count}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BookOfTheMonth