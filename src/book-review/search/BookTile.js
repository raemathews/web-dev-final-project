import React from 'react'
import {Link} from "react-router-dom";
import StarRating from "./StarRating";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findBookCoverThunk} from "../../services/books/library-thunk";
import {findBookCover} from "../../services/books/library-service";

const BookTile = ({book}) => {
    const maxTitleLength = 40;
    const maxAuthorLength = 25;
    let cover = findBookCover(book.cover_i);
    let author = book.author_name ? Object.values(book.author_name) : [""];
    return (
        <Link to={"/book-details" + (book.key || "/works/" + book.book_id)} className="book-link">
            <div className="d-inline-block">
                <div className="card m-3">
                    {book.cover_i ?
                    <img className="card-img-top"
                         src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                         alt="book cover"/>
                        : <img className="card-img-top not-found"
                               src={"/images/no_cover.png"}
                               alt="book cover"/>               }
                    <div className="card-body">
                        <h5 className="card-title">
                            {
                                book.title.length > maxTitleLength ?
                                book.title.substring(0, maxTitleLength - 3) + "..." :
                                book.title
                            }
                        </h5>
                        <div className="card-text ">
                            <h6>Author: {
                                author[0].length > maxAuthorLength ?
                                    author[0].substring(0, maxAuthorLength - 3) + "..." :
                                    author[0]
                            }</h6>
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