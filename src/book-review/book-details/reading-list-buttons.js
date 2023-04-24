import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {
    createReadThunk,
    deleteReadThunk,
    updateReadThunk
} from "../../services/want-to-read/want-to-read-thunk";
import {useParams} from "react-router-dom";
import {updateLibrarianThunk} from "../../services/librarians/librarians-thunk";

const ReadingListButtons = ({bookInfo, readingList, read, wantToRead, loadingReadingList}) => {
    // const [wtrMsg, setWtrMsg] = useState("Save to Want To Read");
    // const [readMsg, setReadMsg] = useState("Save to Read list");
    const {bookid} = useParams();
    const dispatch = useDispatch();
    const {currentUser} = useSelector(store => store.currentUser)

    let wantToReadButtonMsg = wantToRead && wantToRead.find(
        (r) => (r.book_id === bookid) && (r.user_id === currentUser._id)) ?
        "Remove from Want To Read" : "Save to Want To Read";
    let readButtonMsg = read && read.find(
        (r) => (r.book_id === bookid) && (r.user_id === currentUser._id)) ?
        "Remove from Read list" : "Save to Read list";

    const bookOfTheMonthHandler = () => {
        if (currentUser && currentUser.admin) {
            dispatch(updateLibrarianThunk({
                ...currentUser,
                book_of_month: {
                    ...bookInfo
                }
            }))
        }
    }

    const getBookOfMonthButton = () => {
        if (currentUser && currentUser.admin) {
            let text = "Add as Book Of the Month";
            if (currentUser.book_of_month && currentUser.book_of_month.key === bookid) {
                text =  "Remove from Book Of the Month";
            }
            return (
               //TODO: update librarian's book of the month
                <button type="button"
                        className="btn btn-outline-success border-2 mt-2"
                        style={{width: "100%"}}
                        onClick={bookOfTheMonthHandler}>
                    {text}
                </button>);
        }
        return (<></>);
    }

    const getMatch = (r) => {
        return (r.book_id === bookid) && (r.user_id === currentUser._id);
    }

    const addToReadingListHandler = (finished) => {
        if (currentUser && bookInfo) {
                const inReadingList = readingList.find((r) => getMatch(r));
                if (inReadingList) {
                    if (inReadingList.finished == finished) {
                        // They are trying to delete it
                        dispatch(deleteReadThunk(inReadingList._id));
                    } else {
                        // They are trying to add to the other list
                        dispatch(updateReadThunk({
                            ...inReadingList,
                            finished: finished
                        }));
                    }
                } else {
                    dispatch(createReadThunk({
                        user_id: currentUser._id,
                        book_id: bookInfo.key.substring(7),
                        finished: finished,
                        title: bookInfo.title,
                        cover_i: bookInfo.cover_i,
                        ratings_average: bookInfo.ratings_average,
                        ratings_count: bookInfo.ratings_count,
                        author_name: bookInfo.author_name ? bookInfo.author_name.toString() : "",
                    }));
                }
        }
    }

    return(
        <>
            {/*TODO: will change to say something else when you click it, and # of saved will go up*/}
            <button type="button"
                    className="btn btn-primary mt-3"
                    style={{width: "100%"}}
                    onClick={() => addToReadingListHandler(true)}>
                {readButtonMsg}
            </button>
            <button type="button"
                    className="btn btn-primary mt-2"
                    style={{width: "100%"}}
                    onClick={() => addToReadingListHandler(false)}>
                {wantToReadButtonMsg}
            </button>
            {getBookOfMonthButton()}
        </>
    );
};
export default ReadingListButtons;