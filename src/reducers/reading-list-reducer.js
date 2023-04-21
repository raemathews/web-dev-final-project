import { createSlice } from "@reduxjs/toolkit";
import {findReadByUserIdThunk} from "../services/reading-list/reading-list-thunk";
//import booksData from '../book-review/search/books.json'
const initialState = {
    read: [],
    wantToRead: [],
    loading: false
}
const readSlice = createSlice({
    name: "readingList",
    initialState: initialState,
    extraReducers: {
        [findReadByUserIdThunk.pending]:
            (state) => {
                state.loading = true
            },
        [findReadByUserIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.read = payload.filter((r) => r.finished)
                state.wantToRead = payload.filter((r) => !r.finished)
            },
    }
});

export default readSlice.reducer;