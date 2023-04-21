import {createSlice} from "@reduxjs/toolkit";
import {
    findFollowsThunk,
    findFollowersByUserIdThunk,
    findFollowingByUserIdThunk,
    createFollowsThunk,
    deleteFollowsThunk
} from "../services/followers/followers-thunk";
const initialState = {
    loading: false,
    followersById: [],
    followingById: []
}
const followsSlice = createSlice({
    name: "followers",
    initialState: initialState,
    extraReducers: {
        [findFollowersByUserIdThunk.fulfilled]:
            (state, {payload}) => {
                state.followersById = payload
            },
        [findFollowingByUserIdThunk.fulfilled]:
            (state, {payload}) => {
                state.followingById = payload
            }
    }
});

export default followsSlice.reducer;