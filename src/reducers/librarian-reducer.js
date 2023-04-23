import {createSlice} from "@reduxjs/toolkit";
import {
    findLibrariansThunk,
    findLibrarianByIDThunk,
    createLibrarianThunk,
    deleteLibrarianThunk,
    updateLibrarianThunk
} from "../services/librarians/librarians-thunk";
import {findFollowingByUserIdThunk} from "../services/followers/followers-thunk";

const initialState = {
    numResults: 0,
    foundLibrarians: [],
    librarianFoundById: "",
    loading: false
}
const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    extraReducers: {
        [findLibrariansThunk.pending]:
            (state) => {
                state.loading = true
                state.foundUsers = []
            },
        [findLibrariansThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.foundUsers = payload
            },
        [findLibrariansThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
                // console.log("error finding user in reducer")
            },
        [findLibrarianByIDThunk.pending]:
            (state) => {
                state.loading = true
                state.userFoundById = []
            },
        [findLibrarianByIDThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.userFoundById = payload
            },
        [createLibrarianThunk.pending]:
            (state) => {
                state.loading = true;
            },
        [createLibrarianThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.foundUsers.push(payload);
                state.numResults = state.foundUsers.length;
            },
        [updateLibrarianThunk.pending]:
            (state, {payload}) => {
                state.loading = true;
            },
        [updateLibrarianThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                const userIndex = state.foundUsers
                    .findIndex((u) => u._id === payload._id)
                state.foundUsers[userIndex] = {
                    ...state.foundUsers[userIndex],
                    ...payload
                }
            }
    }
});

export default usersSlice.reducer;