import React from 'react';
import BookTile from "./BookTile";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findBooksThunk} from "../../services/books/library-thunk";

const BookResults = () => {
    const {query} = useParams();
    const dispatch = useDispatch();

    const {numResults, books, booksById, loading} =
        useSelector(store => store.library)

    useEffect(() => {
        dispatch(findBooksThunk(query))

    }, [])
    return (
        <div className="col-xs-12 col-sm-7 col-lg-9 col-xl-9">
            <div className="d-none d-sm-none d-md-block">
                <h5 className="p-4">
                    {
                        `Results for "${query}"`
                    }
                    {
                        loading ? "" : ` (${numResults} found)`
                    }
                </h5>
                <hr/>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto align-top">
                    {
                        loading &&
                        <div className="spinner-grow m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                    {
                        books.map((b) => <BookTile key={b.key} book={b}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default BookResults