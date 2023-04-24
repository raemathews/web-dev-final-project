import React, {useEffect, useState} from "react";
import ReadItem from "./ReadItem";
import {useDispatch, useSelector} from "react-redux";
import {findFollowingByUserIdThunk} from "../../../services/followers/followers-thunk";
import {findReadByUserIdThunk} from "../../../services/want-to-read/want-to-read-thunk";
//import favorites from "./favorites.json"

const ReadList = ({isRead}) => {
    const {currentUser} = useSelector((state) => state.currentUser);
    const {readingList, read, wantToRead, loading} = useSelector(
        state => state.readingList)
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    useEffect(() => {
        dispatch(findReadByUserIdThunk(currentUser._id))
    }, [])

    useEffect(() => {
        if (isRead) {
            setList(read);
        } else {
            setList(wantToRead);
        }
    }, [readingList])

    return (
        <>
            <div className={"fw-bold h6 d-md-none"}>
                {isRead ? "Read" : "Want to Read"}
            </div>
            <ul className="list-group">
                {
                    list.length > 0 ?
                        list.map(book =>
                            <ReadItem
                                key={book._id} book={book}/>)
                        : <div className={"list-group"}>
                            <div className={"list-group-item"}>No Books</div>
                        </div>
                }
            </ul>
        </>
    );
};
export default ReadList;
