import React from 'react'
import {Link} from "react-router-dom";
import StarRating from "./StarRating";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findBookByIdThunk, findBookCoverThunk, findBooksThunk} from "../../services/books/library-thunk";
import {findBookById, findBookCover} from "../../services/books/library-service";
import {useState} from "react";

const BookTileUsingId = ({bookId}) => {
    const {numResults, books, loading, booksByIds} = useSelector(store => store.library)
    let [bookItem, setBookItem] = useState({});
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookByIdThunk(bookId))
    }, []);

    console.log("THIS IS A BOOK BY ID: " + bookId)
    const maxTitleLength = 40;
    const maxAuthorLength = 25;
    let author = bookItem.author_name ? Object.values(bookItem.author_name) : [""];
    return (
        <Link to={"/book-details/works/" + bookId} className="book-link">

            <div className="d-inline-block">
                <div className="card m-3">
                    {bookItem.cover_i ?
                        <img className="card-img-top"
                         src={`https://covers.openlibrary.org/b/id/${bookItem.cover_i}-L.jpg`}
                         alt="book cover"/>
                        : <img className="card-img-top not-found"
                               src={"/images/no_cover.png"}
                               alt="book cover"/>               }
                    <div className="card-body">
                        <h5 className="card-title">
                            {/*{*/}
                            {/*    bookItem.title.length > maxTitleLength ?*/}
                            {/*        bookItem.title.substring(0, maxTitleLength - 3) + "..." :*/}
                            {/*        bookItem.title*/}
                            {/*}*/}
                        </h5>
                        <div className="card-text ">
                            {/*<h6>Author: {*/}
                            {/*    author[0].length > maxAuthorLength ?*/}
                            {/*        author[0].substring(0, maxAuthorLength - 3) + "..." :*/}
                            {/*        author[0]*/}
                            {/*}</h6>*/}
                            <StarRating rating={bookItem.ratings_average}
                                        numReviews={bookItem.ratings_count}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );

}

export default BookTileUsingId

// {
//     title,
//         publish_date,
//         want_to_read_count,
//         ratings_average,
//         ratings_count
// }