import {createSlice} from "@reduxjs/toolkit";
import {
    findFollowsThunk,
    findFollowersByUserIdThunk,
    findFollowingByUserIdThunk,
    createFollowsThunk,
    deleteFollowsThunk
} from "../services/followers/followers-thunk";
//import booksData from '../book-review/search/books.json'
const initialState = {
    follows: [],
    loading: false,
    followersById: []
}
const followsSlice = createSlice({
    name: "follows",
    initialState: initialState,
    extraReducers: {
        [findFollowsThunk.pending]:
            (state) => {
                state.loading = true
                state.follows = []
            },
        [findFollowsThunk.fulfilled]:
            (state, payload) => {
                state.loading = false
                state.follows = payload
            },
        [findFollowersByUserIdThunk.fulfilled]:
            (state, payload) => {
                state.followersById = payload
            }
    }
});

export default followsSlice.reducer;