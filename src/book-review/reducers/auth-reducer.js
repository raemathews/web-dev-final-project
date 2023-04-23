import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk
} from "../services/auth-thunks";


const userSlice = createSlice({
    name: "currentUser",
    initialState: { currentUser: null,
        rejected: false},
    reducers: {
        updateCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    },
    extraReducers: {
        [loginThunk.pending]: (state, { payload }) => {
            state.rejected = false
        },
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            state.rejected = false
            console.log(state.currentUser);
        },
        [loginThunk.rejected]:
            (state, action) => {
                state.rejected = true
                state.error = action.error
            },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
    },
});
export const {updateCurrentUser} = userSlice.actions
export default userSlice.reducer;