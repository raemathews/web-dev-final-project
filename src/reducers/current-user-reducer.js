import {createSlice} from "@reduxjs/toolkit";

const anonymousUserId = ""

const initialState = {
    currentUserId: anonymousUserId
}
const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: { currentUser: null },
    reducers: {
        logInUser(state, action) {
            state.currentUser = action.payload._id
        },
        logOutUser(state) {
            state.currentUser = anonymousUserId
        },
    },
});

export const {logInUser, logOutUser} = currentUserSlice.actions
export default currentUserSlice.reducer;