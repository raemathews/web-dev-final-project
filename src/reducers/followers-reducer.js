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
                console.log("THE FOLLOWS: " + JSON.stringify(state.follows))
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
                //state.followers.push(payload)
                state.following.push(payload)
            },
        [deleteFollowerThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.following = state.following
                    .filter(following => following.following_id !== payload.following_id
                    && following.follower_id !== payload.follower_id)
            },

    }
});

export default followersSlice.reducer;