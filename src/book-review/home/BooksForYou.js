import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {findBookByIdThunk, findBooksThunk} from "../../services/books/library-thunk";
import BookTile from "../search/BookTile";
import {findReadByUserIdThunk} from "../../services/want-to-read/want-to-read-thunk";
var randomWords = require('random-words');

const BooksForYou = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state) => state.currentUser);
    const {numResults, books, loading, booksByIds} = useSelector(store => store.library)
    const {read, wantToRead, readLoading} = useSelector(store => store.readingList)

    useEffect(() => {
        !currentUser &&
        dispatch(findBooksThunk(randomWords(2).join(" ")))

        currentUser &&
        dispatch(findReadByUserIdThunk(currentUser._id))
    }, [])
    let suggested = currentUser ? wantToRead : books.slice(0,5)
    return (
        <>
            <h5 className={"mt-3 fw-bolder"}>{currentUser ? "Next in Your Queue" : "Suggested Books"}</h5>
            {
                loading &&
                <div className="spinner-grow m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {
                suggested.map((b) =>
                    <BookTile book={b} />
                )
            }
            {
                suggested.length === 0 && !loading
                &&
                <ul className="list-group">
                    <div className="list-group-item">
                        No books in your reading list. Start exploring now!
                    </div>
                </ul>
            }
        </>
    )
}

export default BooksForYou