import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    findReviewsThunk,
    findReviewsByUserIdThunk,
    findReviewsByBookId,
    createReviewThunk,
    deleteReviewThunk,
    updateReviewThunk
} from "../services/reviews/reviews-thunk";

const initialState = {
    reviews: [],
    loading: false
}
const reviewsSlice = createSlice({
    name: "reviews",
    initialState: initialState,
    extraReducers: {
        [findReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewsByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewsByBookId.pending]:
            (state) => {
                console.log("loading")
                state.loading = true
                state.reviews = []
            },
        [findReviewsByBookId.fulfilled]:
            (state, {payload}) => {
                console.log("done")
                state.loading = false
                state.reviews = payload
            },
        [findReviewsByBookId.rejected]:
            (state, action) => {
                console.log("rejected")
                state.loading = false
                state.error = action.error
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },
        [deleteReviewThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.reviews
                    .filter(review => review._id !== payload)
            },
        [updateReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const reviewIndex = state.reviews
                    .findIndex((r) => r._id === payload._id)
                state.reviews[reviewIndex] = {
                    ...state.reviews[reviewIndex],
                    ...payload
                }
            },
    }
});

export default reviewsSlice.reducer;