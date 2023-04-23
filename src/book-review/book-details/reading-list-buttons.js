import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {
    createReadThunk,
    deleteReadThunk,
    updateReadThunk
} from "../../services/want-to-read/want-to-read-thunk";
import {useParams} from "react-router-dom";

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

    const getMatch = (r) => {
        // console.log(`stringy: ${JSON.stringify(r)}`);
        // console.log(r.book_id === bookid);
        return (r.book_id === bookid) && (r.user_id === currentUser._id);
    }

    const addToReadingListHandler = (finished) => {
        // console.log('Inside add to reading list');
        if (currentUser && bookInfo) {
                // console.log(`Reading list: ${readingList.map((r) => (JSON.stringify(r)))}`);
                // console.log(`read: ${read.map((r) => (JSON.stringify(r)))}`);
                // console.log(`wtr: ${wantToRead.map((r) => (JSON.stringify(r)))}`);
                const inReadingList = readingList.find((r) => getMatch(r));
                // console.log(`Found book: ${inReadingList}`);
                if (inReadingList) {
                    if (inReadingList.finished == finished) {
                        // They are trying to delete it
                        // console.log('Removing book from reading list');
                        dispatch(deleteReadThunk(inReadingList._id));
                    } else {
                        // They are trying to add to the other list
                        // console.log('Adding book to other list');
                        dispatch(updateReadThunk({
                            ...inReadingList,
                            finished: finished
                        }));
                    }
                } else {
                    // console.log('Adding book for first time');
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
        </>
    );
};
export default ReadingListButtons;