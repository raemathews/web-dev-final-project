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
                // state.following.push(payload)
            },
        [deleteFollowerThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                // state.followers = state.followers
                //     .filter(followers => followers.following_id !== payload.following_id
                //     && followers.follower_id !== payload.follower_id)
            },

    }
});

export default followersSlice.reducer;