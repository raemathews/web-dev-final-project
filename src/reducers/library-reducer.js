import { createSlice } from "@reduxjs/toolkit";
import {
    findBooksThunk,
    findBookCoverThunk,
    findBookByIdThunk,
    accumulateBooksByIdsThunk
} from "../services/books/library-thunk";
const initialState = {
    numResults: 0,
    books: [],
    loading: false,
    booksByIds: []
}
const librarySlice = createSlice({
    name: "library",
    initialState: initialState,
    extraReducers: {
        [findBooksThunk.pending]:
            (state) => {
                state.loading = true
                state.books = []
            },
        [findBooksThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.books = payload.docs
                state.numResults = payload.numFound
            },
        [findBookByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.books = []
            },
        [findBookByIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.books = payload
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
        [accumulateBooksByIdsThunk.pending]:
            (state) => {
                state.loading = true
            },
        [accumulateBooksByIdsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.booksByIds = payload
                console.log("STATE FROM ACCUMULATOR: ", state.booksByIds)
            },

    }
});

export default librarySlice.reducer;