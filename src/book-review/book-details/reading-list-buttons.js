import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {
    createReadThunk,
    deleteReadThunk,
    findReadByUserIdThunk,
    updateReadThunk
} from "../../services/want-to-read/want-to-read-thunk";
import {useParams} from "react-router-dom";

const ReadingListButtons = ({bookInfo}) => {
    const [wtrMsg, setWtrMsg] = useState("Save to Want To Read");
    const [readMsg, setReadMsg] = useState("Save to Read list");
    const {bookid} = useParams();
    const dispatch = useDispatch();
    const {currentUser} = useSelector(store => store.currentUser)

    const {readingList, read, wantToRead, loadingReadingList} =
        useSelector(store => store.readingList)
    let wantToReadButtonMsg = wantToRead && wantToRead.find(
        (r) => (r.book_id === bookid) && (r.user_id === currentUser._id)) ?
        "Remove from Want To Read" : "Save to Want To Read";
    let readButtonMsg = read && read.find(
        (r) => (r.book_id === bookid) && (r.user_id === currentUser._id)) ?
        "Remove from Read list" : "Save to Read list";

    useEffect(() => {
        console.log("DISPATCH");
        dispatch(findReadByUserIdThunk(currentUser._id));
    }, [])

    const getMatch = (r) => {
        // console.log(`stringy: ${JSON.stringify(r)}`);
        console.log(r.book_id === bookid);
        return (r.book_id === bookid) && (r.user_id === currentUser._id);
    }

    const clickButton = (finished) => {
        new Promise((resolve, reject) => {
            dispatch(findReadByUserIdThunk(currentUser._id));
            resolve();
        }).then(r => addToReadingListHandler(finished));
    }

    const addToReadingListHandler = (finished) => {

        console.log('ADDING1');
        if (currentUser) {
            console.log('ADDING2');
            if (bookInfo) {
                console.log('ADDING3');
                console.log(bookInfo.key);
                console.log(`reading list: ${readingList.map((r) => (JSON.stringify(r)))}`);
                // console.log(`read: ${read.map((r) => (JSON.stringify(r)))}`);
                // console.log(`wtr: ${wantToRead.map((r) => (JSON.stringify(r)))}`);
                const inReadingList = readingList.find((r) => getMatch(r));
                console.log(inReadingList);
                if (inReadingList) {
                    if (inReadingList.finished == finished) {
                        // They are trying to delete it
                        console.log('ADDING4A');
                        setWtrMsg("Save to Want To Read");
                        setReadMsg("Save to Read list");
                        dispatch(deleteReadThunk(inReadingList._id));
                    } else {
                        // They are trying to add to the other list
                        console.log('ADDING4A');
                        dispatch(updateReadThunk({
                            ...inReadingList,
                            finished: finished
                        }));
                    }
                } else {
                    console.log('ADDING5');
                    dispatch(createReadThunk({
                        user_id: currentUser._id,
                        book_id: bookInfo.key.substring(7),
                        finished: finished,
                        title: bookInfo.book_title,
                        cover_i: bookInfo.cover_i,
                        ratings_average: bookInfo.ratings_average,
                        ratings_count: bookInfo.ratings_count,
                        author_name: bookInfo.author_name ? bookInfo.author_name.toString() : "",
                    }));
                }
                if (finished) { // Trying to add to Read
                    setWtrMsg("Save to Want To Read");
                    setReadMsg("Remove from Read list");
                } else { // Trying to add to Want To Read
                    setWtrMsg("Remove from Want To Read");
                    setReadMsg("Save to Read list");
                }
            }
        } else {
            // TODO: display something telling them to log in/sign up
        }
    }

    return(
        <>
            {console.log("RERENDER")}
            {/*TODO: will change to say something else when you click it, and # of saved will go up*/}
            <button type="button"
                    className="btn btn-primary mt-3"
                    style={{width: "100%"}}
                    onClick={() => clickButton(true)}>
                {readButtonMsg}
            </button>
            <button type="button"
                    className="btn btn-primary mt-2"
                    style={{width: "100%"}}
                    onClick={() => clickButton(false)}>
                {wantToReadButtonMsg}
            </button>
        </>
    );
};
export default ReadingListButtons;