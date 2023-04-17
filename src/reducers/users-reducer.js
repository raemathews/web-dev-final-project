import {createSlice} from "@reduxjs/toolkit";
import {findUsersThunk, findUsersByIDThunk} from "../services/users/users-thunk";
import {findBooksThunk} from "../services/books/library-thunk";
//import booksData from '../book-review/search/books.json'
const initialState = {
    numResults: 0,
    foundUsers: [],
    loading: false
}
const usersSlice = createSlice({
    name: "library",
    initialState: initialState,
    extraReducers: {
        [findUsersThunk.pending]:
            (state) => {
                state.loading = true
                state.foundUsers = []
            },
        [findUsersThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.foundUsers = payload
            },
        [findUsersByIDThunk.pending]:
            (state) => {
                state.loading = true
                state.foundUsers = []
            },
        [findUsersByIDThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.foundUsers = payload
            },
    }
});

export default usersSlice.reducer;