import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk
} from "../services/auth-thunks";


const userSlice = createSlice({
    name: "currentUser",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.currentUser = payload;
            console.log(state.currentUser);
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {}, //to implement
    },
});
export default userSlice.reducer;