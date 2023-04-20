import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk
} from "../services/auth-thunks";


const userSlice = createSlice({
    name: "currentUser",
    initialState: { currentUser: null },
    reducers: {
        updateCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.currentUser = payload;
            console.log(state.currentUser);
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
    },
});
export const {updateCurrentUser} = userSlice.actions
export default userSlice.reducer;