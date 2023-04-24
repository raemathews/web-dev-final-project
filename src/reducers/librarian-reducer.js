import {createSlice} from "@reduxjs/toolkit";
import {
    findLibrariansThunk,
    findLibrarianByIDThunk,
    createLibrarianThunk,
    updateLibrarianThunk
} from "../services/librarians/librarians-thunk";

const initialState = {
    numResults: 0,
    foundLibrarians: [],
    librarianFoundById: "",
    loading: false
}
const librariansSlice = createSlice({
    name: "librarians",
    initialState: initialState,
    extraReducers: {
        [findLibrariansThunk.pending]:
            (state) => {
                state.loading = true
                state.foundLibrarians = []
            },
        [findLibrariansThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.foundLibrarians = payload
            },
        [findLibrariansThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findLibrarianByIDThunk.pending]:
            (state) => {
                state.loading = true
                state.librarianFoundById = []
            },
        [findLibrarianByIDThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.librarianFoundById = payload
            },
        [createLibrarianThunk.pending]:
            (state) => {
                state.loading = true;
            },
        [createLibrarianThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.foundLibrarians.push(payload);
                state.numResults = state.foundLibrarians.length;
            },
        [updateLibrarianThunk.pending]:
            (state, {payload}) => {
                state.loading = true;
            },
        [updateLibrarianThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                const librarianIndex = state.foundLibrarians
                    .findIndex((u) => u._id === payload._id)
                state.foundLibrarians[librarianIndex] = {
                    ...state.foundLibrarians[librarianIndex],
                    ...payload
                }
            }
    }
});

export default librariansSlice.reducer;