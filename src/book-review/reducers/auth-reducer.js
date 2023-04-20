import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk
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
        }
    },
});
export default userSlice.reducer;