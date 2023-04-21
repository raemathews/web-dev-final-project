import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {findBooksThunk} from "../../services/books/library-thunk";
import BookTile from "../search/BookTile";
var randomWords = require('random-words');

const BooksForYou = () => {
    const dispatch = useDispatch()
    const {numResults, books, loading} =
        useSelector(store => store.library)

    useEffect(() => {
        dispatch(findBooksThunk(randomWords(1).join(" ")))
    }, [])
    let suggested = books.slice(0,12)
    return (
        <>
            <h5 className={"mt-3"}>Books For You</h5>
            {
                loading &&
                <div className="spinner-grow m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {
                suggested.map((book) =>
                    <BookTile book={book} />
                )
            }
        </>
    )
}

export default BooksForYou