import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {
    findFollowersByUserIdThunk, //
    findFollowingByUserIdThunk,
    createFollowerThunk,
    deleteFollowerThunk,
} from "../services/followers/followers-thunk";

const initialState = {
    followers: [],
    following: [],
    loading: false
}
const followersSlice = createSlice({
    name: "reviews",
    initialState: initialState,
    extraReducers: {
        [findFollowersByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.followers = []
                state.following = []
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
                state.followers.push(payload)
                state.following.push(payload)
            },
        [deleteFollowerThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.followers = state.followers
                    .filter(followers => followers._id !== payload)
                state.following = state.following
                    .filter(following => following._id !== payload)
            },

    }
});

export default followersSlice.reducer;
