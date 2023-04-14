import { createSlice } from "@reduxjs/toolkit";
import {findBooksThunk, findBookCoverThunk} from "../services/books/books-thunk";
//import booksData from '../book-review/search/books.json'
const initialState = {
    numResults: 0,
    books: {},
    loading: false
}
const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    extraReducers: {
        [findBooksThunk.pending]:
            (state) => {
            console.log("loading")
                state.loading = true
            },
        [findBooksThunk.fulfilled]:
            (state, {payload}) => {
                console.log("payload: " + payload)
                state.loading = false
                state.books = payload.data.docs
                state.numResults = payload.data.numFound
            },
        [findBookCoverThunk.pending]:
            (state) => {
                state.loading = false
            },
        [findBooksThunk.fulfilled]:
            (state, {payload}) => {
            state.loading = false
            //     const bookNdx = state.books.docs
            //         .findIndex((b) => b.cover_id === payload.cover_id)
            //     state.loading = false
            //     state.books.docs[bookNdx] = {
            //         ...state.books.docs[bookNdx],
            //         ...payload
             // }
            },
    }
});

export default booksSlice.reducer;