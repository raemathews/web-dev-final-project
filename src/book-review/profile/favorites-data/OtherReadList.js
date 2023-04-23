import React, {useEffect, useState} from "react";
import ReadItem from "./ReadItem";
import favorites from "./favorites.json"
import {useDispatch, useSelector} from "react-redux";
import {findReadByUserIdThunk} from "../../../services/want-to-read/want-to-read-thunk";
import {findUsersThunk} from "../../../services/users/users-thunk";

const OtherReadList = ({isRead, accountId}) => {
    const {numResults, foundUsers, userFoundById, l} = useSelector(
        state => state.users)
    let[user, setUser] = useState({});
    const {readingList, read, wantToRead, loading} = useSelector(
        state => state.readingList)
    const dispatch = useDispatch();
    const [list, setList] = useState([]);

    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])

    useEffect(() => {
        const userList = foundUsers.filter((u) => u._id == accountId)
        if(userList.length > 0) {setUser(userList[0])};
    }, [foundUsers])

    useEffect(() => {
        dispatch(findReadByUserIdThunk(user._id))
    }, [user])

    useEffect(() => {
        if (isRead) {
            setList(read);
        } else {
            setList(wantToRead);
        }
    }, [readingList])

    return(
        <ul className="list-group">
            {
                list.map(book =>
                    <ReadItem
                        key={book._id} book={book}/> )
            }
        </ul>
    );
};
export default OtherReadList;
