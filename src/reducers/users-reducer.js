import {createSlice} from "@reduxjs/toolkit";
import {
    findUsersThunk,
    findUsersByIDThunk,
    createUserThunk,
    deleteUserThunk,
    updateUserThunk
} from "../services/users/users-thunk";

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
                state.loading = false;
                state.foundUsers.push(payload);
                state.numResults = state.foundUsers.length;
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
        [createUserThunk.pending]:
            (state) => {
                state.loading = true;
            },
        [createUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.foundUsers.push(payload);
                state.numResults = state.foundUsers.length;
            },
        [deleteUserThunk.pending]:
            (state) => {
                state.loading = true;
            },
        [deleteUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.foundUsers =
                    state.foundUsers.filter(u => u._id !== payload)
                state.numResults = state.foundUsers.length;
            },
        [updateUserThunk.pending]:
            (state, {payload}) => {
                state.loading = true;
            },
        [updateUserThunk.fulfilled]:
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