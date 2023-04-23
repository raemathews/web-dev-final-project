import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {
    findFollowersByUserIdThunk, //
    findFollowingByUserIdThunk,
    createFollowerThunk,
    deleteFollowerThunk, findAllFollows,
} from "../services/followers/followers-thunk";

const initialState = {
    followers: [],
    following: [],
    follows: [],
    loading: false
}
const followersSlice = createSlice({
    name: "reviews",
    initialState: initialState,
    extraReducers: {
        [findAllFollows.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.follows = payload
            },
        [findFollowersByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.followers = []
                state.following = []
                state.follows = []
            },
        [findFollowersByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.followers = payload
            },
        [findFollowersByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findFollowingByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.followers = []
                state.following = []
            },
        [findFollowingByUserIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.following = payload
            },
        [findFollowingByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createFollowerThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.follows.push(payload)
                state.following.push(payload)
            },
        [deleteFollowerThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.follows = state.follows
                    .filter(f => f._id !== payload.deleted_id)
                state.following = state.following
                    .filter(f => f._id !== payload.deleted_id)
                state.followers = state.followers
                    .filter(f => f._id !== payload.deleted_id)
            },

    }
});

export default followersSlice.reducer;