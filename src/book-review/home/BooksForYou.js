import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {findBooksThunk} from "../../services/books/library-thunk";
import BookTile from "../search/BookTile";
import {findReadByUserIdThunk} from "../../services/reading-list/reading-list-thunk";

var randomWords = require('random-words');

const BooksForYou = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state) => state.currentUser);
    const {numResults, books, loading} = useSelector(store => store.library)
    const {read, wantToRead, readLoading} = useSelector(store => store.readingList)


    useEffect(() => {
        !currentUser &&
        dispatch(findBooksThunk(randomWords(1).join(" ")))

        currentUser &&
        dispatch(findReadByUserIdThunk(currentUser._id))
    }, [])
    let suggested = currentUser ? wantToRead : books.slice(0, 10)
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
                suggested.map((book) =>
                    <BookTile book={book}/>
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