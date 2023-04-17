import { createSlice } from "@reduxjs/toolkit";
import {findBooksThunk, findBookCoverThunk} from "../services/books/library-thunk";
//import booksData from '../book-review/search/books.json'
const initialState = {
    numResults: 0,
    books: [],
    loading: false
}
const librarySlice = createSlice({
    name: "library",
    initialState: initialState,
    extraReducers: {
        [findBooksThunk.pending]:
            (state) => {
            console.log("loading")
                state.loading = true
                state.books = []
            },
        [findBooksThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.books = payload.docs
                state.numResults = payload.numFound
            },
        [findBookCoverThunk.pending]:
            (state) => {
                state.loading = false
            },
        [findBookCoverThunk.fulfilled]:
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

export default librarySlice.reducer;